import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { pages } from './content.mjs';
const root=new URL('../public/',import.meta.url).pathname;
assert(existsSync(join(root,'index.html')),'Run npm run build first');
const routes=[];
function walk(dir){for(const e of readdirSync(dir,{withFileTypes:true})){const f=join(dir,e.name);if(e.isDirectory())walk(f);else if(e.name==='index.html')routes.push(f);}}
walk(root);
assert(routes.length>=25,`Expected at least 25 pages, found ${routes.length}`);
for(const file of routes){const html=readFileSync(file,'utf8');assert.match(html,/<h1>/);assert.match(html,/<link rel="canonical"/);assert.match(html,/<meta name="description"/);assert(!html.includes('undefined'));for(const match of html.matchAll(/href="(\/[a-z0-9-/]+\/)"/g)){const target=match[1];assert(existsSync(join(root,target,'index.html')),`${file}: missing ${target}`);}}
for(const p of pages)assert(existsSync(join(root,p.slug,'index.html')),p.slug);
for(const asset of ['robots.txt','sitemap.xml','llms.txt','assets/site.css','assets/site.js'])assert(existsSync(join(root,asset)),asset);
const sitemap=readFileSync(join(root,'sitemap.xml'),'utf8');assert.equal((sitemap.match(/<url>/g)||[]).length,routes.length);
console.log(`Checked ${routes.length} pages, routes, metadata and sitemap.`);
