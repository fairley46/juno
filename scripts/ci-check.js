#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
let failed = 0;

function fail(msg) {
  console.error(`FAIL: ${msg}`);
  failed += 1;
}

function exists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

function readJson(rel) {
  try {
    return JSON.parse(fs.readFileSync(path.join(ROOT, rel), 'utf8'));
  } catch (err) {
    fail(`${rel}: ${err.message}`);
    return null;
  }
}

for (const script of ['setup.js', 'export.js']) {
  if (!exists(script)) {
    fail(`missing ${script}`);
    continue;
  }
  const result = spawnSync(process.execPath, ['--check', path.join(ROOT, script)], {
    encoding: 'utf8',
  });
  if (result.status !== 0) fail(`${script}: ${result.stderr.trim() || 'parse failed'}`);
}

const pkg = readJson('package.json');
const manifest = readJson('manifest.json');
if (pkg && manifest && pkg.version !== manifest.version) {
  fail(`version mismatch package=${pkg.version} manifest=${manifest.version}`);
}

const logo = path.join(ROOT, 'assets/juno-logo.png');
if (!exists('assets/juno-logo.png')) {
  fail('missing assets/juno-logo.png');
} else {
  const buf = fs.readFileSync(logo);
  if (!(buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47)) {
    fail('assets/juno-logo.png is not a PNG');
  }
}

if (manifest && Array.isArray(manifest.modules)) {
  for (const mod of manifest.modules) {
    if (!mod.file || !exists(mod.file)) fail(`missing module ${mod.file || mod.id}`);
    if (mod.exercise && !exists(mod.exercise)) fail(`missing exercise ${mod.exercise}`);
  }
} else if (manifest) {
  fail('manifest.json modules[] missing');
}

for (const rel of [
  'PROGRESS.md.template',
  'org/org-context.template.md',
  'org/escalation.template.md',
  'org/approved-mcps.template.json',
  'org/golden-paths.template.md',
  'LICENSE',
  'README.md',
  'assets/session-preview.png',
]) {
  if (!exists(rel)) fail(`missing ${rel}`);
}

if (failed > 0) {
  console.error(`\n${failed} check(s) failed`);
  process.exit(1);
}
console.log('All checks passed');
