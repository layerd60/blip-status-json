#!/usr/bin/env node
import { join } from 'node:path';
import { homedir } from 'node:os';
import { readFileSync } from 'node:fs';

const statFile = join(homedir(), '.config', 'opencrater', 'state.json');
let state = {};
try {
  state = JSON.parse(readFileSync(statFile, 'utf8'));
} catch {}

console.log(JSON.stringify({
  installId: state.installId || null,
  optedOut: !!state.optOut,
  lastShownAt: state.lastShownAt || null,
  publisherIntegrations: state.integrations ? state.integrations.length : null,
  pooledBlips: state.pool ? state.pool.length : null,
  lastImpression: state.lastImpression || null
}, null, 2));
