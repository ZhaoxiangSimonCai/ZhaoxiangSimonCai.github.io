#!/usr/bin/env node
// One-off script: port old Hugo content (publications, projects, events)
// from /Users/scai/Career/SimonCaiCV.io into the new Astro content collections.

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OLD_ROOT = '/Users/scai/Career/SimonCaiCV.io/content';
const NEW_ROOT = path.resolve(__dirname, '../src/content');

// ----- helpers -----
function readEntry(dirOrFile) {
  const stat = fs.statSync(dirOrFile);
  if (stat.isDirectory()) {
    const idx = path.join(dirOrFile, 'index.md');
    if (!fs.existsSync(idx)) return null;
    return { dir: dirOrFile, md: idx };
  }
  return { dir: path.dirname(dirOrFile), md: dirOrFile };
}

function resolveVenue(pubStr) {
  if (!pubStr) return { venue: 'Unknown venue', fwci: undefined };
  const [venue, rest] = pubStr.split(/·|\u00b7|&nbsp;/).map((s) => s.trim());
  const fwciMatch = rest?.match(/FWCI:\s*([0-9.]+)/i);
  return {
    venue: venue.replace(/\*/g, '').replace(/&nbsp;/g, '').trim(),
    fwci: fwciMatch ? Number(fwciMatch[1]) : undefined,
  };
}

function yamlEscape(v) {
  if (v === undefined || v === null) return '';
  if (typeof v === 'string') {
    // Always quote strings to avoid YAML parsing surprises
    const esc = v.replace(/"/g, '\\"');
    return `"${esc}"`;
  }
  if (typeof v === 'boolean' || typeof v === 'number') return String(v);
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]';
    return '\n' + v.map((x) => `  - ${typeof x === 'string' ? yamlEscape(x) : x}`).join('\n');
  }
  return JSON.stringify(v);
}

function writeFrontmatter(obj) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null || v === '') continue;
    const formatted = yamlEscape(v);
    if (formatted.startsWith('\n')) lines.push(`${k}:${formatted}`);
    else lines.push(`${k}: ${formatted}`);
  }
  lines.push('---');
  return lines.join('\n');
}

function mkdirp(p) {
  fs.mkdirSync(p, { recursive: true });
}

// ----- author map -----
// `admin` in old content maps to Simon himself
function mapAuthor(a) {
  if (!a) return '';
  if (typeof a !== 'string') return String(a);
  const normalised = a.trim();
  if (normalised === 'admin') return 'Zhaoxiang Cai';
  return normalised;
}

// ----- publications -----
function portPublications() {
  const src = path.join(OLD_ROOT, 'publication');
  const dst = path.join(NEW_ROOT, 'publications');
  mkdirp(dst);

  const entries = fs
    .readdirSync(src, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_'));

  let count = 0;
  for (const d of entries) {
    const slug = d.name;
    const entry = readEntry(path.join(src, d.name));
    if (!entry) continue;
    const raw = fs.readFileSync(entry.md, 'utf8');
    const { data, content } = matter(raw);

    const authors = (data.authors || []).map(mapAuthor);
    const { venue, fwci } = resolveVenue(data.publication);
    const d8 = data.date instanceof Date ? data.date : new Date(data.date);
    const year = d8.getFullYear();
    const iso = d8.toISOString();
    const firstAuthor = authors[0] === 'Zhaoxiang Cai';
    // co-first author heuristic: content mentions "Co-first" or title has equal contribution
    const coFirstAuthor = /co-?first/i.test(content) || /co-?first/i.test(data.role || '');

    const fm = {
      title: data.title,
      authors,
      venue,
      venueShort: (data.publication_short || '').replace(/\*/g, '').trim() || undefined,
      year,
      date: iso,
      doi: data.doi || undefined,
      publicationType:
        (data.publication_types && data.publication_types[0] === '3' && 'preprint') ||
        (data.publication_types && data.publication_types[0] === '1' && 'conference') ||
        'journal',
      featured: !!data.featured,
      tags: data.tags || [],
      fwci,
      firstAuthor,
      coFirstAuthor,
      abstract: (data.abstract || '').trim() || undefined,
      pdf: data.url_pdf || undefined,
      code: data.url_code || undefined,
      projectSlug: (data.projects && data.projects[0]) || undefined,
    };

    const outDir = path.join(dst, slug);
    mkdirp(outDir);
    const outPath = path.join(outDir, 'index.mdx');
    const body = content.trim()
      ? `\n\n${content.trim()}\n`
      : '\n';
    fs.writeFileSync(outPath, writeFrontmatter(fm) + body);
    count++;
  }
  console.log(`publications: ported ${count}`);
}

// ----- projects -----
function portProjects() {
  const src = path.join(OLD_ROOT, 'project');
  const dst = path.join(NEW_ROOT, 'projects');
  mkdirp(dst);

  const entries = fs
    .readdirSync(src, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_'));

  let count = 0;
  for (const d of entries) {
    const slug = d.name;
    const entry = readEntry(path.join(src, d.name));
    if (!entry) continue;
    const raw = fs.readFileSync(entry.md, 'utf8');
    const { data, content } = matter(raw);

    const d8 = data.date instanceof Date ? data.date : new Date(data.date || '2020-01-01');
    const iso = d8.toISOString();

    // Copy featured.png if present
    const featuredSrc = path.join(entry.dir, 'featured.png');
    const outDir = path.join(dst, slug);
    mkdirp(outDir);
    let imagePath = undefined;
    let imageAlt = undefined;
    if (fs.existsSync(featuredSrc)) {
      const imgDst = path.join(outDir, 'featured.png');
      fs.copyFileSync(featuredSrc, imgDst);
      imagePath = './featured.png';
      imageAlt = data.title;
    }

    // Build summary from first paragraph of content if not in frontmatter
    const summary =
      data.summary ||
      (content.trim().split(/\n\n/)[0] || '').replace(/\n/g, ' ').trim() ||
      data.title;

    const fm = {
      title: data.title,
      summary,
      date: iso,
      tags: data.tags || [],
      featured: fs.existsSync(featuredSrc),
      image: imagePath,
      imageAlt,
      github: data.url_code || undefined,
      paper: data.url_pdf || undefined,
      url: data.external_link || undefined,
      status: 'completed',
    };

    const outPath = path.join(outDir, 'index.mdx');
    const body = content.trim() ? `\n\n${content.trim()}\n` : '\n';
    fs.writeFileSync(outPath, writeFrontmatter(fm) + body);
    count++;
  }
  console.log(`projects: ported ${count}`);
}

// ----- talks -----
function portTalks() {
  const src = path.join(OLD_ROOT, 'event');
  const dst = path.join(NEW_ROOT, 'talks');
  mkdirp(dst);

  const entries = fs
    .readdirSync(src, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_'));

  let count = 0;
  for (const d of entries) {
    const slug = d.name;
    const entry = readEntry(path.join(src, d.name));
    if (!entry) continue;
    const raw = fs.readFileSync(entry.md, 'utf8');
    const { data, content } = matter(raw);

    const d8 = data.date instanceof Date ? data.date : new Date(data.date);
    const iso = d8.toISOString();

    const talkType =
      data.featured || /invited/i.test(data.subtitle || '')
        ? 'invited'
        : /poster/i.test(data.type || data.subtitle || '')
          ? 'poster'
          : 'oral';

    const fm = {
      title: data.title,
      event: data.event || data.location || data.publication || data.title,
      location: data.location || undefined,
      date: iso,
      type: talkType,
      url: data.url_slides || data.url_video || data.url_poster || undefined,
      summary: data.abstract || data.summary || undefined,
    };

    const outDir = path.join(dst, slug);
    mkdirp(outDir);
    const outPath = path.join(outDir, 'index.mdx');
    const body = content.trim() ? `\n\n${content.trim()}\n` : '\n';
    fs.writeFileSync(outPath, writeFrontmatter(fm) + body);
    count++;
  }
  console.log(`talks: ported ${count}`);
}

// ----- experience (from _index.md inline YAML) -----
function portExperience() {
  const src = path.join(OLD_ROOT, '_index.md');
  const dst = path.join(NEW_ROOT, 'experience');
  mkdirp(dst);

  const raw = fs.readFileSync(src, 'utf8');
  const { data } = matter(raw);
  const expBlock = (data.sections || []).find((s) => s.block === 'experience');
  if (!expBlock) {
    console.log('experience: no block found');
    return;
  }
  const items = expBlock.content?.items || [];
  let i = 0;
  for (const item of items) {
    const slug = `${String(i + 1).padStart(2, '0')}-${(item.company || 'role')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/-+$/, '')}`;
    const desc = (item.description || '')
      .split('\n')
      .map((l) => l.replace(/^\s*\*\s*/, '').trim())
      .filter(Boolean);
    const current = !item.date_end;
    const fm = {
      title: item.title,
      company: item.company,
      companyShort: undefined,
      companyUrl: item.company_url || undefined,
      logo: item.company_logo ? `/logos/${item.company_logo}.svg` : undefined,
      location: item.location || undefined,
      dateStart: item.date_start || '',
      dateEnd: item.date_end || '',
      current,
      description: desc,
      order: i,
    };
    const outPath = path.join(dst, `${slug}.json`);
    fs.writeFileSync(outPath, JSON.stringify(fm, null, 2) + '\n');
    i++;
  }
  console.log(`experience: ported ${i}`);
}

// ----- run -----
portPublications();
portProjects();
portTalks();
portExperience();
console.log('done');
