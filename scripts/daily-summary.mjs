/**
 * Send daily summary to Discord
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendDailySummary } from './notify.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DATA_PATH = path.join(ROOT, 'data', 'status.json');

async function main() {
  console.log('📊 Sending daily summary...');
  
  const data = JSON.parse(await fs.readFile(DATA_PATH, 'utf-8'));
  await sendDailySummary(data);
  
  console.log('✅ Daily summary sent');
}

main().catch(console.error);

