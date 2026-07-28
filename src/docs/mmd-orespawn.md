---
layout: doc
title: MMD OreSpawn 4
description: Meet OreSpawn 4, MMD's provider-driven engine for ores, geology, deposits, biomes, world materials, retrogen, and modpack-controlled world generation.
---

<div class="os-hero">
  <div class="os-hero-copy">
    <p class="os-eyebrow">MMD world-generation engine</p>
    <h1>MMD OreSpawn <span>4</span></h1>
    <p class="os-lead">
      One safe, declarative engine for ores, geology, underground deposits,
      biomes, world materials, retrogen, and complete modpack world profiles.
    </p>
    <div class="os-actions">
      <a class="os-action os-action-primary" href="https://www.curseforge.com/minecraft/mc-mods/mmd-orespawn" target="_blank" rel="noreferrer">Download on CurseForge</a>
      <a class="os-action" href="https://github.com/SkyBlade1978/OreSpawn/tree/master-1.18" target="_blank" rel="noreferrer">Browse the OS4 source</a>
      <a class="os-action" href="https://discord.moddev.zone" target="_blank" rel="noreferrer">Join the MMD Discord</a>
    </div>
  </div>
  <div class="os-core" aria-hidden="true">
    <span class="os-core-name">OS</span>
    <strong>4</strong>
    <span class="os-core-label">WORLDGEN</span>
  </div>
</div>

<div class="os-facts" aria-label="OreSpawn 4 highlights">
  <div><strong>Passive</strong><span>until you opt in</span></div>
  <div><strong>Provider-driven</strong><span>mods own their content</span></div>
  <div><strong>World-aware</strong><span>every world keeps its profile</span></div>
  <div><strong>Forge</strong><span>Minecraft 1.18.2 &amp; 1.19.4</span></div>
</div>

<div class="os-identity">
  <strong>Looking for the mod with creatures and dimensions?</strong>
  This is not that mod. MMD OreSpawn is a world-generation engine used by
  players, modpacks, and other mods.
</div>

## What is OreSpawn 4?

OreSpawn 4 is the next generation of MMD's world-generation library. It takes
the mature ore controls of OreSpawn 3, combines them with the powerful geology
work developed for Mineralogy, and turns the result into a general-purpose
platform that any mod or modpack can use.

The most important idea is **separation of content from world-generation
policy**. A metal mod can own its copper, tin, and silver blocks while OreSpawn
decides how they are distributed. Mineralogy can supply dozens of rocks and
geological regions without keeping a private worldgen engine. A total-conversion
mod can contribute biomes, surfaces, aquifer fluids, snow, and ice. A pack author
can then tune all of those contributions as one coherent world.

OreSpawn itself is deliberately passive. Simply installing it does not replace
stone, remove vanilla ores, or change the Nether. A provider mod, a modpack
profile, or a player using the Create World editor must choose what it should
do.

::: tip Current OS4 builds
OreSpawn 4.0.1 beta builds are available for **Minecraft 1.18.2** and
**Minecraft 1.19.4** on Forge. OreSpawn 3.3.1 remains available for older
Minecraft 1.12.2 packs.
:::

## Why OS4 is such a big step forward

OreSpawn 3 was already much more capable than a simple “spawn this ore”
utility. It supported multiple deposit patterns, weighted outputs and
replacement blocks, biome filtering, fractional frequency, and retrogen.
OS4 preserves that heritage and its configuration intent, but moves the whole
system into a modern, provider-owned model.

Mineralogy then proved that a worldgen engine could do much more than scatter
ores. Its Sky and Cyano geology modes created rock strata, geological regions,
biome influence, custom ore hosts, and fluid deposits. The limitation was not
the engine's ambition; it was that the engine belonged to one content mod.

OS4 makes those ideas reusable:

| Area | OreSpawn 3 | Mineralogy's engine | OreSpawn 4 |
| --- | --- | --- | --- |
| Main role | Configurable ore placement | Geology for Mineralogy's rocks and ores | Shared world-generation platform |
| Content ownership | Spawn files named blocks to place | Mineralogy supplied the content and engine | Every provider owns its declarations; OreSpawn owns execution |
| World scope | Legacy dimensions, heights, patterns, and biome filters | Rich Overworld geology with optional ore management | Ores, strata, deposits, biomes, materials, custom dimensions, and templates |
| Configuration | Primarily legacy JSON/config files | Mineralogy global and per-world geology settings | Providers, pack overrides, global defaults, templates, Create World edits, and self-contained world snapshots |
| Safety | Pack authors coordinated generators manually | Integrations were tied to Mineralogy's lifecycle | Provider validation, fail-closed overrides, ownership checks, and takeover status prevent silent duplication |
| Player experience | Powerful but configuration-led | Mineralogy supplied its own geology editor | A shared Create World editor, recommended defaults, tooltips, and an in-game guide |

<div class="os-callout">
  <strong>OS4 does not make Mineralogy obsolete.</strong>
  Mineralogy remains the content-rich geology mod: it supplies real-world
  rocks, building blocks, ores, geomes, and recommended settings. OS4 is the
  reusable engine underneath. Install Mineralogy for the complete geological
  experience; use OreSpawn directly when you want to design the rules yourself
  or integrate another mod.
</div>

The result is a single worldgen language that can describe a tiny ore-only mod,
a carefully balanced expert pack, Mineralogy's complete rock system, or a
dimension whose terrain and fluids are unlike the Overworld.

## Ways to use OreSpawn

<div class="os-use-grid">
  <article>
    <span>01</span>
    <h3>Build a solo world</h3>
    <p>
      Start passive, then opt in through <strong>OreSpawn...</strong> on the
      Create World screen. Use installed blocks—or a balanced starter set of
      vanilla stone, deepslate, granite, diorite, andesite, and tuff—to design
      strata and ore placement without installing a full geology content mod.
    </p>
  </article>
  <article>
    <span>02</span>
    <h3>Run a provider mod</h3>
    <p>
      Install a mod such as Mineralogy or Base Metals. Its provider supplies
      sensible defaults; OreSpawn validates them, merges them into the world
      profile, and performs the generation. Ore-only providers do not need to
      enable rock strata.
    </p>
  </article>
  <article>
    <span>03</span>
    <h3>Author a modpack</h3>
    <p>
      Tune providers without editing their jars, create named templates, manage
      vanilla ores, choose formation styles, and ship a reproducible global
      profile. Every world receives its own complete snapshot.
    </p>
  </article>
  <article>
    <span>04</span>
    <h3>Develop a content mod</h3>
    <p>
      Package a declarative provider JSON or enqueue an immutable provider
      through Forge IMC. Keep your blocks and gameplay in your mod while
      OreSpawn handles dimensions, hosts, patterns, validation, and migration.
    </p>
  </article>
  <article>
    <span>05</span>
    <h3>Create a total conversion</h3>
    <p>
      Add provider biomes, broad biome palettes, custom surfaces, aquifer
      fluids, deep fluids, snow, ice, rock strata, and underground deposits.
      Unconfigured dimensions keep their original generator.
    </p>
  </article>
  <article>
    <span>06</span>
    <h3>Integrate with live geology</h3>
    <p>
      Query the active profile, sample the exact production geology for
      gameplay decisions, or register a custom ore-pattern type whose settings
      are decoded and compiled before generation.
    </p>
  </article>
</div>

## One profile, clear ownership

OS4 builds a new world's settings in a deliberate order. Later stages may tune
earlier defaults, and the final result is copied into the world:

<div class="os-flow" aria-label="OreSpawn world profile precedence">
  <span>Provider defaults</span>
  <b>→</b>
  <span>Pack overrides</span>
  <b>→</b>
  <span>Global profile</span>
  <b>→</b>
  <span>Selected template</span>
  <b>→</b>
  <span>Create World edits</span>
  <b>→</b>
  <span>World snapshot</span>
</div>

That snapshot lives at
`<world>/serverconfig/orespawn-worldgen.json`. It travels with the world, so a
single-player world moved to a dedicated server keeps the same geology when the
same provider mods are installed.

Provider ownership is just as important. A present pack override is
authoritative; if it is malformed, that provider becomes inactive instead of
silently falling back to different defaults. A content mod should disable its
native generator only when OreSpawn reports that its takeover is active. Bad
IDs or invalid hosts therefore fail safely rather than quietly removing—or
duplicating—ores.

## What OS4 can generate

<div class="os-capability-grid">
  <article>
    <h3>Rock strata and geomes</h3>
    <p>
      Broad geological formations use sedimentary, metamorphic, intrusive
      igneous, and volcanic families. Geomes influence which families and rocks
      belong in a region, while the surface biome can bias geology without
      forcing identical borders.
    </p>
  </article>
  <article>
    <h3>Ores with real placement rules</h3>
    <p>
      Configure dimensions, Y ranges, frequency, fixed or ranged block budgets,
      height curves, cave exposure, rock families, blocks, tags, geomes, and
      biome filters. Outputs and hosts may both be weighted.
    </p>
  </article>
  <article>
    <h3>Underground fluid deposits</h3>
    <p>
      Create covered pockets of water, lava, oil, brine, or another installed
      fluid. Radius, vertical shape, lobes, solid roof, solid shell, hosts,
      biomes, and depth are independently configurable.
    </p>
  </article>
  <article>
    <h3>Biomes and world materials</h3>
    <p>
      Augment an existing biome source or replace eligible regions with
      provider biomes. Define top, filler, underwater, and ceiling materials,
      then optionally change aquifer fluids, deep fluids, snow, and ice.
    </p>
  </article>
  <article>
    <h3>Dimensions and templates</h3>
    <p>
      Target the Overworld, Nether, End, or installed custom dimensions by
      registry ID. Named templates can describe a complete optional world
      style, and total-conversion providers may offer a fresh-world default.
    </p>
  </article>
  <article>
    <h3>Managed ores and retrogen</h3>
    <p>
      Optionally replace claimed vanilla ore features, flatten bedrock, and
      apply bounded ore or bedrock retrogen. Rock strata are never retro-generated,
      protecting existing terrain from a surprise rewrite.
    </p>
  </article>
</div>

### Sky and Cyano geology

OS4 retains two geology experiences:

- **Sky** is the modern geome engine. It creates broad formations whose reach,
  thickness, waviness, edge detail, and continuity can be tuned independently.
- **Cyano (Legacy)** preserves the classic Mineralogy layer style for players
  and worlds that prefer it.

The modern `stable_layers` algorithm is recommended for new worlds. The older
`sky_v1` algorithm remains available so migrated worlds can retain their
established shape.

### Ore patterns

Every ore rule chooses a deposit shape. The built-in patterns are:

| Pattern | Best for |
| --- | --- |
| **Compact** | Dense, familiar, face-connected deposits |
| **Vein** | Wandering mineralised paths through rock |
| **Normal cloud** | Broad, diffuse deposits |
| **Precision** | Deterministic compact filling |
| **Clusters** | Groups of nearby connected nodes |
| **Under fluids** | Deposits that favour host blocks beneath a configured fluid |

Height distributions can be uniform, centre-peaked, deep-biased, or split
between uniform and deep-biased placement. `discard_chance_on_air_exposure`
controls how much ore remains hidden from cave walls. Pattern settings are
compiled while the profile is baked, so generation does not repeatedly parse
configuration.

## For players and server owners

### Creating a world

1. Open **OreSpawn...** from the Create World flow.
2. Start with **Recommended Defaults** when provider mods are installed.
3. Choose a complete template or customise rocks, formations, ores, fluids,
   biomes, and world materials.
4. Use the built-in **Help & Guide** and control tooltips whenever a setting is
   unfamiliar.
5. Press **Done** and create the world normally.

Changes to a profile normally affect newly generated chunks. If you alter a
world later, travel beyond explored terrain to see the new settings.

### Important files and commands

| Location or command | Purpose |
| --- | --- |
| `config/orespawn-worldgen.json` | Defaults used when new worlds are created |
| `<world>/serverconfig/orespawn-worldgen.json` | The complete, self-contained profile for one world |
| `config/<modid>-orespawn.json` | A modpack's authoritative provider override |
| `config/orespawn-guide/` | The documentation bundle exported by OreSpawn |
| `/orespawn status` | Show active mode, rules, providers, and retrogen state |
| `/orespawn reload` | Reload providers and the active profile |
| `/orespawn retrogen [radius]` | Queue bounded retrogen for loaded chunks |
| `/orespawn dump-biomes` | Export the biome IDs visible to the installation |

## For mod and modpack authors

### Declarative first

Most mods need no custom world-generation code. Package a provider at:

```text
src/main/resources/data/<modid>/orespawn/provider.json
```

A minimal ore-only provider can be as small as:

```json
{
  "schema_version": 4,
  "provider_modid": "examplemod",
  "provider_revision": 1,
  "ores": {
    "examplemod:ore/tin": {
      "block": "examplemod:tin_ore",
      "enabled": true,
      "dimensions": {
        "minecraft:overworld": {
          "enabled": true,
          "min_y": -16,
          "max_y": 96,
          "frequency": 6.0,
          "min_quantity": 4,
          "max_quantity": 11,
          "pattern": "vein",
          "height_distribution": "triangle",
          "host_tags": ["minecraft:stone_ore_replaceables"]
        }
      }
    }
  }
}
```

That definition places tin in ordinary Overworld ore hosts. It does not enable
rock strata, replace biomes, or require Mineralogy.

Provider schema 4 can additionally declare rocks, geomes, biome rules, terrain
dimensions, templates, fluid deposits, biome palettes, and dimension materials.
JSON Schemas and complete examples are included in the normal OreSpawn jar and
exported into `config/orespawn-guide/` on first load.

### Use the Java API when it adds value

Mods that need programmatic construction can submit an immutable
`WorldgenProvider` through `InterModEnqueueEvent`:

```java
OreSpawnApi.enqueue(provider);
```

Only `zone.moddev.mc.orespawn.api` is supported API. The normal OreSpawn jar is
both the compile-time and runtime dependency; it is not intended to be shaded
into another mod.

The API also provides:

- provider status and safe native-generation takeover;
- a read-only view of the active server profile;
- a production geology sampler for gameplay and compatible features;
- provider-owned fluid deposits, biome palettes, and world materials;
- a registry for custom pattern types that compile before generation.

### Pack overrides and templates

A pack may override one provider with
`config/<modid>-orespawn.json`. Overrides are ideal for changing heights,
quantities, patterns, dimensions, or hosts without repacking the provider mod.

Templates are named profile overlays. They can configure formations, rocks,
geomes, biome influences, ores, fluids, terrain dimensions, suppression,
retrogen, and bedrock as one selectable world style. Switching templates starts
from the merged provider/pack baseline, so settings from the previous template
do not leak into the next one.

## Moving from OS3 or Mineralogy

OS4's migration is designed to preserve intent rather than merely make old JSON
parse.

It can import:

- Mineralogy 6's `config/mineralogy-geomes.json`;
- legacy files under `config/orespawn3/` and `config/orespawn/`;
- compatible flags from `config/orespawn.cfg`;
- older global, world, and provider schema revisions.

The migrator understands OS3's ranged `size ± variation`, exclusive maximum
height, fractional frequency, patterns, weighted blocks, biome filters,
retrogen flags, and “all ordinary dimensions except Nether and End” behaviour.
When a legacy output uniquely matches an installed provider rule, the user's
values move under that provider's stable ID instead of creating a duplicate.
Ambiguous entries are kept under a legacy ID and called out for review.

Migration is non-destructive: source files are retained, target profiles are
backed up before persisted revisions, and a report is written to
`config/orespawn-migration/migration-report.txt`. Existing rock strata are not
rewritten.

## Fast because world generation has to be

OS4 resolves registry IDs, tags, dimensions, blocks, fluids, biomes, weights,
patterns, and provider ownership before chunk generation. Its hot paths do not
read JSON, call provider code, look up registry names, or log per block.

Compact deposits use pre-baked connected shapes. Unconfigured dimensions skip
immediately. Biome palettes operate on cached holders and primitive weights.
Retrogen is revision-marked, bounded, and scheduled a limited number of chunks
per tick.

This design matters because OS4 is not only placing a few ore veins. In a full
provider setup it may classify geology and replace terrain throughout every new
chunk, so predictable work and fail-safe validation are first-class features.

## Start exploring

<div class="os-footer-links">
  <a href="https://www.curseforge.com/minecraft/mc-mods/mmd-orespawn" target="_blank" rel="noreferrer">
    <strong>Download OS4</strong>
    <span>Forge builds for Minecraft 1.18.2 and 1.19.4</span>
  </a>
  <a href="https://github.com/SkyBlade1978/OreSpawn/tree/master-1.18/docs" target="_blank" rel="noreferrer">
    <strong>Read the complete documentation</strong>
    <span>Player, provider, API, configuration, biome, migration, and troubleshooting guides</span>
  </a>
  <a href="https://github.com/MinecraftModDevelopmentMods/OreSpawn/tree/master-1.18" target="_blank" rel="noreferrer">
    <strong>Visit the MMD source repository</strong>
    <span>OreSpawn is open source under LGPL-2.1</span>
  </a>
</div>

<style scoped>
.os-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 180px;
  gap: 2.5rem;
  align-items: center;
  overflow: hidden;
  margin: 0 0 1rem;
  padding: 2.4rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 24px;
  background:
    radial-gradient(circle at 90% 18%, color-mix(in srgb, var(--vp-c-brand-1) 20%, transparent), transparent 36%),
    linear-gradient(145deg, color-mix(in srgb, var(--vp-c-bg-soft) 92%, var(--vp-c-brand-1)), var(--vp-c-bg-soft));
}

.os-hero::after {
  content: "";
  position: absolute;
  inset: auto -10% -42% 34%;
  height: 70%;
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 34%, transparent);
  border-radius: 50%;
  transform: rotate(-8deg);
  pointer-events: none;
}

.os-hero-copy {
  position: relative;
  z-index: 1;
}

.os-eyebrow {
  margin: 0 0 .55rem;
  color: var(--vp-c-brand-1);
  font-size: .76rem;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.os-hero h1 {
  margin: 0;
  border: 0;
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  line-height: .98;
  letter-spacing: -.055em;
}

.os-hero h1 span {
  color: var(--vp-c-brand-1);
}

.os-lead {
  max-width: 660px;
  margin: 1.2rem 0 1.5rem;
  color: var(--vp-c-text-2);
  font-size: 1.08rem;
  line-height: 1.65;
}

.os-actions {
  display: flex;
  flex-wrap: wrap;
  gap: .65rem;
}

.os-action {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: .58rem .9rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: .84rem;
  font-weight: 700;
  text-decoration: none;
  transition: border-color .2s ease, transform .2s ease, background .2s ease;
}

.os-action:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}

.os-action-primary {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

.os-action-primary:hover {
  background: var(--vp-c-brand-2);
  color: var(--vp-c-white);
}

.os-core {
  position: relative;
  z-index: 1;
  display: grid;
  width: 164px;
  height: 164px;
  place-content: center;
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 55%, var(--vp-c-divider));
  border-radius: 50%;
  background:
    radial-gradient(circle, var(--vp-c-bg) 0 35%, transparent 36%),
    repeating-radial-gradient(circle, color-mix(in srgb, var(--vp-c-brand-1) 26%, transparent) 0 2px, transparent 3px 12px);
  box-shadow: 0 0 60px color-mix(in srgb, var(--vp-c-brand-1) 14%, transparent);
  text-align: center;
}

.os-core-name {
  color: var(--vp-c-text-2);
  font-size: .72rem;
  font-weight: 800;
  letter-spacing: .2em;
}

.os-core strong {
  color: var(--vp-c-brand-1);
  font-size: 4.2rem;
  line-height: .9;
}

.os-core-label {
  margin-top: .35rem;
  color: var(--vp-c-text-3);
  font-size: .58rem;
  font-weight: 800;
  letter-spacing: .14em;
}

.os-facts {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0 0 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}

.os-facts div {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: .15rem;
  padding: .9rem 1rem;
  border-right: 1px solid var(--vp-c-divider);
}

.os-facts div:last-child {
  border-right: 0;
}

.os-facts strong {
  color: var(--vp-c-text-1);
  font-size: .8rem;
}

.os-facts span {
  color: var(--vp-c-text-3);
  font-size: .68rem;
  line-height: 1.35;
}

.os-identity,
.os-callout {
  margin: 1.25rem 0 2rem;
  padding: 1rem 1.15rem;
  border-left: 4px solid var(--vp-c-brand-1);
  border-radius: 0 12px 12px 0;
  background: color-mix(in srgb, var(--vp-c-brand-soft) 65%, var(--vp-c-bg-soft));
  color: var(--vp-c-text-2);
  line-height: 1.65;
}

.os-identity strong,
.os-callout strong {
  color: var(--vp-c-text-1);
}

.os-use-grid,
.os-capability-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.25rem 0 2rem;
}

.os-use-grid article,
.os-capability-grid article {
  position: relative;
  padding: 1.15rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
}

.os-use-grid article > span {
  position: absolute;
  top: .85rem;
  right: .95rem;
  color: color-mix(in srgb, var(--vp-c-brand-1) 52%, var(--vp-c-text-3));
  font-size: .7rem;
  font-weight: 800;
  letter-spacing: .12em;
}

.os-use-grid h3,
.os-capability-grid h3 {
  margin: 0 2rem .55rem 0;
  border: 0;
  font-size: 1rem;
}

.os-use-grid p,
.os-capability-grid p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: .88rem;
  line-height: 1.58;
}

.os-flow {
  display: flex;
  align-items: stretch;
  gap: .45rem;
  overflow-x: auto;
  margin: 1.2rem 0 1.5rem;
  padding: .25rem 0 .5rem;
}

.os-flow span {
  display: grid;
  flex: 1 1 0;
  min-width: 80px;
  min-height: 62px;
  place-items: center;
  padding: .55rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: .76rem;
  font-weight: 700;
  text-align: center;
}

.os-flow b {
  display: grid;
  place-items: center;
  color: var(--vp-c-brand-1);
}

.os-footer-links {
  display: grid;
  gap: .8rem;
  margin: 1.25rem 0 2rem;
}

.os-footer-links a {
  display: flex;
  flex-direction: column;
  gap: .2rem;
  padding: 1rem 1.1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: border-color .2s ease, transform .2s ease;
}

.os-footer-links a:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateX(3px);
}

.os-footer-links span {
  color: var(--vp-c-text-2);
  font-size: .82rem;
  line-height: 1.45;
}

@media (max-width: 720px) {
  .os-hero {
    grid-template-columns: 1fr;
    gap: 1.4rem;
    padding: 1.35rem;
  }

  .os-core {
    width: 124px;
    height: 124px;
    justify-self: start;
  }

  .os-core strong {
    font-size: 3rem;
  }

  .os-facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .os-facts div:nth-child(2) {
    border-right: 0;
  }

  .os-facts div:nth-child(-n + 2) {
    border-bottom: 1px solid var(--vp-c-divider);
  }

  .os-use-grid,
  .os-capability-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 420px) {
  .os-hero h1 {
    font-size: 2.55rem;
  }

  .os-action {
    width: 100%;
    justify-content: center;
  }

  .os-facts {
    grid-template-columns: 1fr;
  }

  .os-facts div {
    border-right: 0;
    border-bottom: 1px solid var(--vp-c-divider);
  }

  .os-facts div:last-child {
    border-bottom: 0;
  }
}
</style>
