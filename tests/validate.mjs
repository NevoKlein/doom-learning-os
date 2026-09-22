#!/usr/bin/env node
/* Dependency-free repository integrity checks. Run: node tests/validate.mjs */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
const root = path.resolve(import.meta.dirname, "..");
const failures = [];
const check = (ok, message) => { if (!ok) failures.push(message); };
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
function loadJson(file) { try { return JSON.parse(read(file)); } catch (e) { failures.push(file + ": invalid JSON (" + e.message + ")"); return null; } }
const curriculum = loadJson("content/curriculum.json");
const resources = loadJson("content/resources.json");
const html = read("index.html");
check(Array.isArray(curriculum), "curriculum.json must contain an array");
check(Array.isArray(resources), "resources.json must contain an array");
if (Array.isArray(curriculum)) {
  const ids = new Set();
  curriculum.forEach((p, i) => {
    check(p && typeof p === "object", "curriculum[" + i + "] must be an object");
    if (!p || typeof p !== "object") return;
    check(typeof p.id === "string" && p.id.length > 0, "phase missing id at index " + i);
    if (p.id) check(!ids.has(p.id), "duplicate phase id: " + p.id);
    if (p.id) ids.add(p.id);
    check(Number.isInteger(p.number), "phase " + (p.id || i) + " missing integer number");
    check(typeof p.title === "string" && p.title.length > 0, "phase " + (p.id || i) + " missing title");
    check(Array.isArray(p.tasks), "phase " + (p.id || i) + " tasks must be an array");
    check(Array.isArray(p.resource_ids), "phase " + (p.id || i) + " resource_ids must be an array");
    check(Array.isArray(p.prerequisites), "phase " + (p.id || i) + " prerequisites must be an array");
  });
}
if (Array.isArray(resources)) {
  const ids = new Set();
  resources.forEach((r, i) => {
    check(r && typeof r === "object", "resources[" + i + "] must be an object");
    if (!r || typeof r !== "object") return;
    check(typeof r.id === "string" && r.id.length > 0, "resource missing id at index " + i);
    if (r.id) check(!ids.has(r.id), "duplicate resource id: " + r.id);
    if (r.id) ids.add(r.id);
    check(typeof r.phase_id === "string" && r.phase_id.length > 0, "resource " + (r.id || i) + " missing phase_id");
    check(typeof r.url === "string" && /^https?:\\/\\//.test(r.url), "resource " + (r.id || i) + " has invalid URL");
  });
  if (Array.isArray(curriculum)) {
    const phaseIds = new Set(curriculum.map(p => p && p.id));
    const resourceIds = new Set(resources.map(r => r && r.id));
    resources.forEach(r => { if (r && r.phase_id) check(phaseIds.has(r.phase_id), "resource " + r.id + " references missing phase " + r.phase_id); });
    curriculum.forEach(p => { if (p && Array.isArray(p.resource_ids)) p.resource_ids.forEach(id => check(resourceIds.has(id), "phase " + p.id + " references missing resource " + id)); });
  }
}
check(html.includes('id="search"'), "index.html missing search control");
check(html.includes('id="curriculum"'), "index.html missing curriculum container");
check(html.includes('id="exportBtn"'), "index.html missing progress export");
check(html.includes('doomLearningState'), "index.html missing progress state key");
check(html.includes('doomGlobalNotes'), "index.html missing global notes state key");
if (failures.length) { console.error("FAILED — " + failures.length + " check(s)"); failures.forEach(x => console.error("- " + x)); process.exit(1); }
console.log("PASS — repository integrity checks");
console.log("- phases: " + curriculum.length);
console.log("- resources: " + resources.length);
console.log("- index.html required UI/state markers present");
