---
layout: doc
title: Minecraft Mineralogy 6
description: A geology-inspired Minecraft mod that fills the underground with real-world rocks, formations, useful resources, and matching building blocks.
---

<div class="mn-hero">
  <div class="mn-hero-copy">
    <p class="mn-eyebrow">MMD geology and building mod</p>
    <h1>Minecraft<br><span>Mineralogy 6</span></h1>
    <p class="mn-lead">
      Replace one generic stone with a world of recognisable rocks, broad
      geological formations, underground resources, and complete matching
      building families.
    </p>
    <div class="mn-actions">
      <a class="mn-button mn-button-primary" href="https://www.curseforge.com/minecraft/mc-mods/minecraft-mineralogy">Download on CurseForge</a>
      <a class="mn-button" href="https://github.com/SkyBlade1978/MinecraftMineralogy">Browse the source</a>
      <a class="mn-button" href="https://discord.moddev.zone">Join the MMD Discord</a>
    </div>
  </div>
  <div class="mn-strata" role="img" aria-label="Stylised cross-section of layered sedimentary, metamorphic, and igneous rock">
    <div class="mn-surface" aria-hidden="true"></div>
    <div class="mn-layer mn-layer-sedimentary" aria-hidden="true"><span>Sedimentary</span></div>
    <div class="mn-layer mn-layer-metamorphic" aria-hidden="true"><span>Metamorphic</span></div>
    <div class="mn-layer mn-layer-intrusive" aria-hidden="true"><span>Intrusive</span></div>
    <div class="mn-layer mn-layer-volcanic" aria-hidden="true"><span>Volcanic</span></div>
    <div class="mn-core-mark" aria-hidden="true">M6</div>
  </div>
</div>

<div class="mn-facts" aria-label="Mineralogy 6 highlights">
  <div><strong>32 rock choices</strong><span>across four geological families</span></div>
  <div><strong>OS4-powered</strong><span>one shared worldgen engine</span></div>
  <div><strong>Content-rich</strong><span>building, lighting, ores, and oil</span></div>
  <div><strong>Forge</strong><span>Minecraft 1.18.2</span></div>
</div>

<div class="mn-thesis">
  <strong>Minecraft is a game about mining—but real geology has no single
  material called “stone”.</strong> Mineralogy turns the underground into a
  landscape worth reading, exploring, collecting, and building with.
</div>

## What is Minecraft Mineralogy?

Minecraft Mineralogy is a geology-inspired content mod. It replaces much of
the Overworld's ordinary stone and deepslate with recognisable rock types
arranged into broad underground formations. Instead of every cave revealing
the same grey wall, a journey can cross limestone, gneiss, shale, gabbro,
marble, rock salt, volcanic glass, and many more materials.

Those rocks are not just scenery. Most participate in Minecraft's normal stone
and cobblestone systems, and Mineralogy turns them into extensive building
families: bricks, polished blocks, slabs, stairs, walls, relief carvings, and
rock-matched furnaces. The result changes both halves of a mining trip—the
world you explore and the palette you bring home.

Mineralogy is inspired by real rock families and geological relationships; it
is not presented as a scientifically exact simulation. Its goal is to make
Minecraft's underground more varied, believable, and fun.

<div class="mn-os4-callout">
  <p class="mn-callout-label">Mineralogy 6 always uses OreSpawn 4</p>
  <p>
    Mineralogy owns the rocks, blocks, items, fluids, recipes, textures, tags,
    and old-world compatibility. <a href="/docs/mmd-orespawn">MMD OreSpawn
    4</a> owns terrain replacement, geomes, formations, ore and fluid-deposit
    placement, world profiles, configuration screens, retrogen, and the public
    worldgen API.
  </p>
</div>

That split is one of Mineralogy 6's biggest strengths. Mineralogy can focus on
being the complete geology content experience while OS4 supplies one
well-tested, configurable engine that can also coordinate other mods in the
same world.

## Why the OS4 foundation matters

Earlier Mineralogy versions contained their own private geology and
configuration systems. They proved how transformative broad rock formations
could be, but every worldgen feature, compatibility hook, and editor belonged
to one mod.

Mineralogy 6 makes the boundary clear:

<div class="mn-ownership">
  <article>
    <p class="mn-owner">Mineralogy</p>
    <h3>The geological content</h3>
    <ul>
      <li>rock, ore, fluid, lamp, and building registrations;</li>
      <li>textures, models, recipes, loot, language, and tags;</li>
      <li>stone and cobblestone compatibility;</li>
      <li>historical registry IDs and saved-world continuity;</li>
      <li>a complete declarative OS4 provider.</li>
    </ul>
  </article>
  <div class="mn-plus" aria-hidden="true">+</div>
  <article>
    <p class="mn-owner">OreSpawn 4</p>
    <h3>The world-generation engine</h3>
    <ul>
      <li>rock strata, geological regions, and formations;</li>
      <li>ore and underground fluid placement;</li>
      <li>world creation screens, templates, and help;</li>
      <li>pack overrides, saved world profiles, and retrogen;</li>
      <li>fast, validated, provider-aware generation.</li>
    </ul>
  </article>
</div>

For a player, the two mods feel like one complete experience. For a modpack
author, the separation means Mineralogy's content can be tuned alongside
Base Metals or another OS4 provider without several unrelated generators
fighting over the same terrain.

## Ways to enjoy Mineralogy

<div class="mn-use-grid">
  <article>
    <span>01</span>
    <h3>Explore a geological world</h3>
    <p>
      Start with Recommended Defaults and let caves, cliffs, mines, and deep
      tunnels reveal changing rock families. Learn to recognise where one
      formation gives way to another.
    </p>
  </article>
  <article>
    <span>02</span>
    <h3>Build with local stone</h3>
    <p>
      Turn the rocks under a settlement into matching bricks, polished blocks,
      slabs, stairs, walls, reliefs, and furnaces. Every region can develop its
      own architectural character.
    </p>
  </article>
  <article>
    <span>03</span>
    <h3>Design a modpack's geology</h3>
    <p>
      Adjust formation scale, rock weights, ore hosts, abundance, dimensions,
      biomes, and deposits through OS4 while leaving Mineralogy's jar intact.
    </p>
  </article>
  <article>
    <span>04</span>
    <h3>Run a shared server world</h3>
    <p>
      Every world stores a complete OS4 profile. Copy the world and install
      the same mod set on a server to retain the geology chosen at creation.
    </p>
  </article>
  <article>
    <span>05</span>
    <h3>Combine MMD projects</h3>
    <p>
      Add a content provider such as Base Metals. OS4 can place its ores
      through Mineralogy's rock families without making either mod own the
      other's blocks.
    </p>
  </article>
  <article>
    <span>06</span>
    <h3>Continue a long-lived world</h3>
    <p>
      Mineralogy retains historical registrations and aliases for saved
      blocks. Always upgrade a disposable copy first and keep every required
      content mod installed.
    </p>
  </article>
</div>

## A world made from rock families

Mineralogy 6's provider gives OS4 **32 active rock choices**: 26 Mineralogy
rocks and six appropriate vanilla materials. They are organised into four
families so formations can feel related instead of randomly shuffling every
block.

<div class="mn-family-grid">
  <article class="mn-family mn-family-volcanic">
    <p class="mn-family-kicker">Igneous</p>
    <h3>Volcanic</h3>
    <p>Rocks associated with material reaching or approaching the surface.</p>
    <div class="mn-rock-list">
      <span>Andesite</span><span>Basalt</span><span>Rhyolite</span>
      <span>Basaltic glass</span><span>Scoria</span><span>Tuff</span>
      <span>Pumice</span>
    </div>
  </article>
  <article class="mn-family mn-family-intrusive">
    <p class="mn-family-kicker">Igneous</p>
    <h3>Intrusive</h3>
    <p>Deep crystalline rocks that give lower formations a weightier palette.</p>
    <div class="mn-rock-list">
      <span>Diorite</span><span>Granite</span><span>Pegmatite</span>
      <span>Diabase</span><span>Gabbro</span><span>Peridotite</span>
    </div>
  </article>
  <article class="mn-family mn-family-metamorphic">
    <p class="mn-family-kicker">Changed by heat and pressure</p>
    <h3>Metamorphic</h3>
    <p>Layered, crystalline, and decorative rocks for varied deep terrain.</p>
    <div class="mn-rock-list">
      <span>Amphibolite</span><span>Gneiss</span><span>Hornfels</span>
      <span>Marble</span><span>Novaculite</span><span>Phyllite</span>
      <span>Quartzite</span><span>Schist</span><span>Slate</span>
    </div>
  </article>
  <article class="mn-family mn-family-sedimentary">
    <p class="mn-family-kicker">Deposited in layers</p>
    <h3>Sedimentary</h3>
    <p>Softer, bedded materials that bring character to shallower formations.</p>
    <div class="mn-rock-list">
      <span>Sandstone</span><span>Chalk</span><span>Chert</span>
      <span>Conglomerate</span><span>Dolomite</span><span>Gypsum</span>
      <span>Limestone</span><span>Rock salt</span><span>Shale</span>
      <span>Siltstone</span>
    </div>
  </article>
</div>

### Familiar Minecraft rocks stay familiar

Minecraft now supplies its own andesite, basalt, diorite, granite, and tuff.
Mineralogy uses those vanilla blocks in newly generated formations by default
instead of placing visually duplicate versions. Mineralogy's historical blocks
remain registered so existing worlds still resolve correctly and pack authors
may deliberately select them.

That is content-aware compatibility rather than deletion: old saves keep their
identity, new terrain uses the most natural shared block, and recipes can work
through Forge and vanilla stone/cobblestone tags.

## How the underground comes together

OS4 turns Mineralogy's catalogue into a stable world profile before chunks are
generated:

<div class="mn-flow" aria-label="Mineralogy world generation flow">
  <span><b>1</b>Rock catalogue</span>
  <i aria-hidden="true">→</i>
  <span><b>2</b>Geological region</span>
  <i aria-hidden="true">→</i>
  <span><b>3</b>Rock family</span>
  <i aria-hidden="true">→</i>
  <span><b>4</b>Formation at depth</span>
  <i aria-hidden="true">→</i>
  <span><b>5</b>Ores and deposits</span>
</div>

A **geome** is a broad geological region. It changes which rock families and
individual rocks are more likely without simply copying biome borders.
Formation controls then decide the horizontal reach, vertical thickness,
waviness, edge detail, and continuity of the strata within that region.

Mineralogy supports both OS4 geology experiences:

- **Sky** is the modern geome engine. Its recommended `stable_layers`
  algorithm creates broad, coherent formations whose size and shape can be
  tuned independently.
- **Cyano (Legacy)** preserves the classic Mineralogy layer style for worlds
  and players that prefer it.

The supplied Mineralogy profile starts with stable Sky formations, Overworld
stone and deepslate hosts, and conservative settings that are ready to play.
Recommended Defaults restores that authored baseline whenever experimentation
goes too far.

## More than new terrain

<div class="mn-content-grid">
  <article>
    <h3>Complete building families</h3>
    <p>
      Most standard rocks can become brick, polished, and polished-brick
      variants, then matching slabs, stairs, walls, and furnaces. Content flags
      let packs trim families they do not need.
    </p>
  </article>
  <article>
    <h3>Relief carvings</h3>
    <p>
      Decorative rock reliefs add symbols and shallow carved detail without
      demanding a completely different building material.
    </p>
  </article>
  <article>
    <h3>Rock salt lighting</h3>
    <p>
      Rock salt becomes warm lamps and tall streetlamps, giving the
      sedimentary family a useful decorative identity above ground.
    </p>
  </article>
  <article>
    <h3>Three mineral ores</h3>
    <p>
      Sulfur, phosphorous, and nitrate have provider-owned OS4 ore rules and
      matching dust or block recipes. Mineral fertiliser gives those resources
      a practical use.
    </p>
  </article>
  <article>
    <h3>Gypsum and drywall</h3>
    <p>
      Gypsum can be processed into building material, including a full set of
      coloured drywall for a cleaner contrast with natural stone.
    </p>
  </article>
  <article>
    <h3>Underground crude oil</h3>
    <p>
      Mineralogy supplies the crude-oil fluid and bucket. OS4 places covered,
      lobe-shaped deposits beneath ocean biomes in compatible sedimentary
      hosts.
    </p>
  </article>
</div>

### Rock-specific crafting

Mineralogy deliberately keeps a relationship between the material you mine and
the result you craft. A furnace made from one matching rock produces that
rock's furnace. Rock-family slabs, stairs, walls, and bricks remain distinct
instead of collapsing every recipe back into vanilla stone.

At the same time, ordinary recipes that genuinely mean “any stone” or “any
cobblestone” can accept compatible Mineralogy rocks through tags. The mod
therefore expands Minecraft's material language without needlessly breaking
familiar tools and recipes.

## OreSpawn-powered world settings

Mineralogy supplies what may appear; OS4 controls how it appears. Open
**OreSpawn World Generation** during world creation to use Recommended
Defaults, choose a template, or tune individual systems.

| Area | What you can control |
| --- | --- |
| Geology engine | Sky geomes or classic Cyano layers |
| Formations | Horizontal size, thickness, waviness, edges, and continuity |
| Rocks and geomes | Enabled materials, weights, depth preferences, and regional influence |
| Ores | Dimensions, height, abundance, quantity, pattern, hosts, biomes, and cave exposure |
| Fluid deposits | Depth, frequency, radius, shape, hosts, biomes, roof, and shell |
| World profile | Templates, pack defaults, Create World edits, and the per-world snapshot |
| Advanced OS4 features | Optional vanilla-ore management, flat bedrock, and bounded retrogen |

Mineralogy itself contributes sulfur, phosphorous, nitrate, and crude oil.
OS4's optional vanilla-ore management remains an engine feature and is not
silently forced on by Mineralogy.

Changes normally affect newly generated chunks. OS4 can perform bounded ore or
bedrock retrogen when deliberately enabled, but it never retro-generates rock
strata through existing terrain.

## For players and server owners

### Installing Mineralogy 6

Install matching **Minecraft 1.18.2 Forge** builds of:

1. **Minecraft Mineralogy 6**
2. **MMD OreSpawn 4**

Both are required on clients and servers. A world containing Mineralogy blocks
should never be opened without Mineralogy installed.

### Creating a world

1. Open **OreSpawn World Generation** from the Create World flow.
2. Select **Recommended Defaults** for the authored Mineralogy experience.
3. Optionally choose Sky or Cyano and tune formations, rocks, ores, deposits,
   geomes, or other advanced settings.
4. Use **Help & Guide** whenever a control is unfamiliar.
5. Press **Done** and create the world normally.

The result is copied into the new world as a complete profile. Moving that
world to a dedicated server keeps its choices when the same required mods are
installed.

### Important files

| Location | Purpose |
| --- | --- |
| `config/mineralogy-common.toml` | Mineralogy content, recipes, drops, and compatibility options |
| `config/orespawn-worldgen.json` | Installed-pack defaults used when creating new worlds |
| `<world>/serverconfig/orespawn-worldgen.json` | One world's complete, self-contained worldgen profile |
| `config/mineralogy-orespawn.json` | A pack's authoritative override of Mineralogy's provider |
| `config/mineralogy-guide/` | Mineralogy's exported player, content, and provider guide |
| `config/orespawn-guide/` | OS4 engine, schema, template, dimension, and API documentation |

Content configuration changes require a restart. Do not disable a block family
that is already used in a world unless you understand the missing-registry
consequences.

## For modpack authors

### Start with the authored provider

Mineralogy packages a declarative OS4 provider at:

```text
data/mineralogy/orespawn/provider.json
```

It declares the 32 rock choices, the three Mineralogy ores, Overworld terrain
hosts, matching vanilla aliases, stable-layer defaults, and Mineralogy's crude
oil deposit. That is the normal integration—there is no private Mineralogy
worldgen engine to enable or synchronise.

To replace the provider for a pack, ship a complete file at:

```text
config/mineralogy-orespawn.json
```

The override is authoritative. If it is malformed or incomplete, OS4 rejects
the Mineralogy provider instead of quietly falling back to different defaults.
That fail-closed behaviour makes pack mistakes visible and avoids mixed or
duplicated world generation.

Existing worlds retain their self-contained profile. A newer provider can
introduce newly added IDs, but it does not overwrite choices already owned by
that world.

### Trim content separately from worldgen

`mineralogy-common.toml` controls whether optional decorative families are
registered and craftable. Packs can independently choose reliefs, rock
furnaces, slabs, stairs, walls, bricks, polished variants, and
polished-brick variants.

Those flags control Mineralogy content. Rock placement, ore abundance, geomes,
dimensions, templates, deposits, and retrogen belong in the OS4 profile.
Keeping the two concerns separate makes configuration easier to reason about.

### Integrate through OS4

Other mods and pack tools should use OS4's supported provider format or
`zone.moddev.mc.orespawn.api`. Do not build new integrations against
Mineralogy's internal classes.

Useful compatibility tags include:

- `mineralogy:rocks` and `mineralogy:standard_rocks`;
- broad sedimentary, metamorphic, and igneous rock-family tags;
- `mineralogy:crafting_materials/<rock>` for matching recipes;
- Forge and vanilla stone/cobblestone tags for intentionally broad recipes.

## Existing worlds and historical blocks

Mineralogy has existed across many Minecraft generations, and the content side
of Mineralogy 6 continues to own saved-block compatibility. Historical
Mineralogy versions of andesite, basalt, diorite, granite, and tuff remain
registered even though new OS4 terrain uses the matching vanilla blocks.
Registry aliases also preserve deliberately renamed historical IDs.

World upgrades still deserve care:

1. Back up the original world.
2. Upgrade a disposable copy first.
3. Install every mod that owns blocks or items in that save.
4. Inspect important builds, inventories, furnaces, and explored terrain.
5. Keep the original copy until the upgraded world has been played and backed
   up successfully.

Mineralogy can preserve only the content it owns; blocks and items from other
absent mods cannot be reconstructed for it. New chunks use the current OS4
world profile, while existing chunks retain their saved blocks.

## Designed for real play

OS4 resolves blocks, tags, dimensions, rock weights, hosts, geomes, patterns,
and provider ownership before generation. Mineralogy's provider is declarative:
it does not insert callbacks, configuration reads, registry lookups, or logging
into per-block generation loops.

Unconfigured dimensions skip immediately. The Overworld is the only default
terrain-replacement dimension, so the Nether, End, and modded dimensions keep
their own terrain unless a pack deliberately opts them in with valid hosts and
rock rules.

Mineralogy 6 also ships complete language files for 16 locales and exports its
own guides on first launch. The aim is a rich geology mod that remains
approachable at world creation, inspectable by pack authors, and predictable on
a dedicated server.

## Start exploring

<div class="mn-footer-links">
  <a href="https://www.curseforge.com/minecraft/mc-mods/minecraft-mineralogy">
    <strong>Download Minecraft Mineralogy</strong>
    <span>Official Forge files, release history, screenshots, and requirements</span>
  </a>
  <a href="/docs/mmd-orespawn">
    <strong>Meet the OreSpawn 4 engine</strong>
    <span>Learn how OS4 powers providers, profiles, patterns, dimensions, and retrogen</span>
  </a>
  <a href="https://github.com/SkyBlade1978/MinecraftMineralogy">
    <strong>Browse Mineralogy's source</strong>
    <span>Follow development, inspect the provider, or report an issue</span>
  </a>
</div>

<style scoped>
.mn-hero {
  --mn-sand: #c7a36a;
  --mn-clay: #a56e57;
  --mn-slate: #596174;
  --mn-deep: #343746;
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(220px, .65fr);
  gap: 2.25rem;
  overflow: hidden;
  margin: 1rem 0 .75rem;
  padding: 2.5rem;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 70%, var(--mn-sand));
  border-radius: 24px;
  background:
    radial-gradient(circle at 15% 15%, color-mix(in srgb, var(--mn-sand) 20%, transparent), transparent 36%),
    linear-gradient(145deg, color-mix(in srgb, var(--vp-c-bg-soft) 90%, #f6e9cf), var(--vp-c-bg-soft));
}

.mn-hero::before {
  position: absolute;
  right: 29%;
  bottom: -86px;
  width: 260px;
  height: 160px;
  border: 1px solid color-mix(in srgb, var(--mn-sand) 35%, transparent);
  border-radius: 50%;
  content: "";
  transform: rotate(-12deg);
}

.mn-hero-copy {
  position: relative;
  z-index: 1;
}

.mn-eyebrow {
  margin: 0 0 .7rem;
  color: color-mix(in srgb, var(--mn-clay) 82%, var(--vp-c-text-1));
  font-size: .76rem;
  font-weight: 800;
  letter-spacing: .15em;
  text-transform: uppercase;
}

.mn-hero h1 {
  margin: 0;
  border: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(2.65rem, 7vw, 4.8rem);
  font-weight: 820;
  letter-spacing: -.06em;
  line-height: .88;
}

.mn-hero h1 span {
  color: color-mix(in srgb, var(--mn-clay) 82%, var(--vp-c-brand-1));
  font-size: .72em;
}

.mn-lead {
  max-width: 610px;
  margin: 1.45rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 1.08rem;
  line-height: 1.65;
}

.mn-actions {
  display: flex;
  flex-wrap: wrap;
  gap: .7rem;
  margin-top: 1.45rem;
}

.mn-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: .72rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: .78rem;
  font-weight: 700;
  text-decoration: none;
  transition: border-color .2s ease, transform .2s ease;
}

.mn-button:hover {
  border-color: var(--mn-clay);
  transform: translateY(-2px);
}

.mn-button-primary {
  border-color: var(--mn-clay);
  background: color-mix(in srgb, var(--mn-clay) 88%, var(--vp-c-brand-1));
  color: #fff;
}

.mn-strata {
  position: relative;
  align-self: stretch;
  min-height: 320px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--mn-deep) 30%, var(--vp-c-divider));
  border-radius: 120px 120px 18px 18px;
  background: var(--mn-deep);
  box-shadow: inset 0 0 45px rgb(0 0 0 / 18%);
}

.mn-surface {
  height: 14%;
  background:
    radial-gradient(circle at 18% 35%, #f0d990 0 3%, transparent 4%),
    linear-gradient(165deg, #91a878 0 45%, #698265 46% 100%);
}

.mn-layer {
  position: relative;
  display: flex;
  align-items: center;
  height: 21.5%;
  padding: 0 1rem;
  color: rgb(255 255 255 / 82%);
  font-size: .62rem;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.mn-layer::after {
  position: absolute;
  inset: 0;
  opacity: .42;
  background: repeating-linear-gradient(172deg, transparent 0 13px, rgb(255 255 255 / 18%) 14px 15px);
  content: "";
}

.mn-layer span {
  position: relative;
  z-index: 1;
}

.mn-layer-sedimentary {
  background: linear-gradient(105deg, #b9915d, #d2b47c);
  clip-path: polygon(0 7%, 100% 0, 100% 100%, 0 91%);
}

.mn-layer-metamorphic {
  background: linear-gradient(105deg, #626979, #7b7582);
  clip-path: polygon(0 0, 100% 8%, 100% 92%, 0 100%);
}

.mn-layer-intrusive {
  background: linear-gradient(105deg, #6f6964, #999087);
  clip-path: polygon(0 9%, 100% 0, 100% 100%, 0 91%);
}

.mn-layer-volcanic {
  background: linear-gradient(105deg, #674c49, #9b6654);
  clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 100%);
}

.mn-core-mark {
  position: absolute;
  right: 1rem;
  bottom: .75rem;
  z-index: 2;
  display: grid;
  width: 54px;
  height: 54px;
  place-items: center;
  border: 1px solid rgb(255 255 255 / 34%);
  border-radius: 50%;
  background: rgb(30 30 36 / 46%);
  color: #fff;
  font-size: 1rem;
  font-weight: 850;
  letter-spacing: -.03em;
  backdrop-filter: blur(4px);
}

.mn-facts {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0 0 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}

.mn-facts div {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: .15rem;
  padding: .9rem 1rem;
  border-right: 1px solid var(--vp-c-divider);
}

.mn-facts div:last-child {
  border-right: 0;
}

.mn-facts strong {
  color: var(--vp-c-text-1);
  font-size: .8rem;
}

.mn-facts span {
  color: var(--vp-c-text-3);
  font-size: .68rem;
  line-height: 1.35;
}

.mn-thesis,
.mn-os4-callout {
  margin: 1.25rem 0 2rem;
  padding: 1rem 1.15rem;
  border-left: 4px solid color-mix(in srgb, #a56e57 82%, var(--vp-c-brand-1));
  border-radius: 0 12px 12px 0;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 82%, #c7a36a);
  color: var(--vp-c-text-2);
  line-height: 1.65;
}

.mn-thesis strong,
.mn-os4-callout strong {
  color: var(--vp-c-text-1);
}

.mn-os4-callout {
  border-left-color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-soft) 68%, var(--vp-c-bg-soft));
}

.mn-os4-callout p {
  margin: 0;
}

.mn-callout-label {
  margin-bottom: .35rem !important;
  color: var(--vp-c-text-1);
  font-size: .86rem;
  font-weight: 800;
}

.mn-ownership {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: .8rem;
  align-items: stretch;
  margin: 1.25rem 0 2rem;
}

.mn-ownership article {
  padding: 1.2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}

.mn-owner {
  margin: 0 0 .25rem;
  color: color-mix(in srgb, #a56e57 78%, var(--vp-c-brand-1));
  font-size: .72rem;
  font-weight: 850;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.mn-ownership h3 {
  margin: 0 0 .7rem;
  border: 0;
  font-size: 1.05rem;
}

.mn-ownership ul {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--vp-c-text-2);
  font-size: .84rem;
  line-height: 1.55;
}

.mn-plus {
  display: grid;
  place-items: center;
  color: color-mix(in srgb, #a56e57 70%, var(--vp-c-brand-1));
  font-size: 1.6rem;
  font-weight: 300;
}

.mn-use-grid,
.mn-content-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.25rem 0 2rem;
}

.mn-use-grid article,
.mn-content-grid article {
  position: relative;
  padding: 1.15rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
}

.mn-use-grid article > span {
  position: absolute;
  top: .85rem;
  right: .95rem;
  color: color-mix(in srgb, #a56e57 65%, var(--vp-c-text-3));
  font-size: .7rem;
  font-weight: 850;
  letter-spacing: .12em;
}

.mn-use-grid h3,
.mn-content-grid h3 {
  margin: 0 2rem .55rem 0;
  border: 0;
  font-size: 1rem;
}

.mn-use-grid p,
.mn-content-grid p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: .88rem;
  line-height: 1.58;
}

.mn-family-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.25rem 0 2rem;
}

.mn-family {
  position: relative;
  overflow: hidden;
  padding: 1.2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}

.mn-family::before {
  position: absolute;
  inset: 0 auto 0 0;
  width: 5px;
  background: var(--mn-family-color);
  content: "";
}

.mn-family-volcanic { --mn-family-color: #a3604f; }
.mn-family-intrusive { --mn-family-color: #8c8178; }
.mn-family-metamorphic { --mn-family-color: #696b7d; }
.mn-family-sedimentary { --mn-family-color: #c29b62; }

.mn-family-kicker {
  margin: 0 0 .15rem;
  color: var(--mn-family-color);
  font-size: .67rem;
  font-weight: 850;
  letter-spacing: .11em;
  text-transform: uppercase;
}

.mn-family h3 {
  margin: 0 0 .45rem;
  border: 0;
  font-size: 1.1rem;
}

.mn-family > p:not(.mn-family-kicker) {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: .84rem;
  line-height: 1.5;
}

.mn-rock-list {
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;
  margin-top: .9rem;
}

.mn-rock-list span {
  padding: .3rem .5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: .68rem;
}

.mn-flow {
  display: flex;
  align-items: stretch;
  gap: .35rem;
  overflow-x: auto;
  margin: 1.2rem 0 1.5rem;
  padding: .25rem 0 .5rem;
}

.mn-flow span {
  display: grid;
  flex: 1 1 0;
  min-width: 92px;
  min-height: 76px;
  place-items: center;
  padding: .55rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: .72rem;
  font-weight: 700;
  text-align: center;
}

.mn-flow b {
  display: grid;
  width: 22px;
  height: 22px;
  place-items: center;
  border-radius: 50%;
  background: color-mix(in srgb, #a56e57 18%, var(--vp-c-bg));
  color: color-mix(in srgb, #a56e57 75%, var(--vp-c-brand-1));
  font-size: .68rem;
}

.mn-flow i {
  display: grid;
  place-items: center;
  color: color-mix(in srgb, #a56e57 70%, var(--vp-c-brand-1));
  font-style: normal;
}

.mn-footer-links {
  display: grid;
  gap: .8rem;
  margin: 1.25rem 0 2rem;
}

.mn-footer-links a {
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

.mn-footer-links a:hover {
  border-color: color-mix(in srgb, #a56e57 78%, var(--vp-c-brand-1));
  transform: translateX(3px);
}

.mn-footer-links span {
  color: var(--vp-c-text-2);
  font-size: .82rem;
  line-height: 1.45;
}

@media (max-width: 720px) {
  .mn-hero {
    grid-template-columns: 1fr;
    gap: 1.4rem;
    padding: 1.35rem;
  }

  .mn-strata {
    min-height: 230px;
    border-radius: 80px 80px 16px 16px;
  }

  .mn-facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .mn-facts div:nth-child(2) {
    border-right: 0;
  }

  .mn-facts div:nth-child(-n + 2) {
    border-bottom: 1px solid var(--vp-c-divider);
  }

  .mn-ownership {
    grid-template-columns: 1fr;
  }

  .mn-plus {
    min-height: 20px;
  }

  .mn-use-grid,
  .mn-content-grid,
  .mn-family-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 420px) {
  .mn-hero h1 {
    font-size: 2.55rem;
  }

  .mn-actions {
    display: grid;
  }

  .mn-button {
    width: 100%;
  }

  .mn-facts div {
    padding: .8rem;
  }
}
</style>
