import { readFileSync } from "node:fs";

const files = process.argv.slice(2);
let totalOk = 0, totalBad = 0;
for (const f of files) {
  const html = readFileSync(f, "utf8");
  const re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let m, ok = 0, bad = 0, types = new Set();
  while ((m = re.exec(html))) {
    try {
      const v = JSON.parse(m[1].replace(/\\u003c/g, "<"));
      ok++;
      const collect = (o) => {
        if (Array.isArray(o)) o.forEach(collect);
        else if (o && typeof o === "object") {
          if (o["@type"]) {
            if (Array.isArray(o["@type"])) o["@type"].forEach(t => types.add(t));
            else types.add(o["@type"]);
          }
          for (const k of Object.keys(o)) collect(o[k]);
        }
      };
      collect(v);
    } catch (e) {
      bad++;
      console.log(`  BAD in ${f}: ${e.message.slice(0, 100)}`);
    }
  }
  console.log(`${f}: ${ok} valid · ${bad} invalid · types: ${[...types].sort().join(",")}`);
  totalOk += ok; totalBad += bad;
}
console.log(`\nTOTAL: ${totalOk} valid · ${totalBad} invalid`);
process.exit(totalBad > 0 ? 1 : 0);
