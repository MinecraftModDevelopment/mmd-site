---
layout: doc
title: Fabulous Example Mod
description: This is an example doc page, use this to get the base of your project page ready and add content.
---

# This project page is an example and this line is an example of another "On this page"

For MMD devs, to add a new project page for your mod, create a file like this `example-mod.md` in `/src/docs/`, then mimic the head of an existing file like this one.
Please make sure if you use local images you store them in `/public/docs/project-id/image.png`

Once you have finished the page for your project go to the `config.mjs` file in the `.vitepress` folder, look for the `sidebar` section and link your project there.
To add your mod to the dropdown `Our Mods` navbar menu, go to the `navbar.mjs` file in `.vitepress` and add your project under the `Our Mods` section.

# Example Mod Project (Using parts from a real project)
[![CurseForge Badge](https://img.shields.io/badge/CurseForge-16181C?style=for-the-badge&logo=curseforge&logoColor=FF784D)](https://www.curseforge.com/minecraft/mc-mods/vampiric-strike-enchantment)
[![Modrinth Badge](https://img.shields.io/badge/Modrinth-16181C?style=for-the-badge&logo=modrinth&logoColor=17B85A)](https://modrinth.com/mod/vampiric-strike-enchantment)
[![Github Badge](https://img.shields.io/badge/GitHub-16181C?style=for-the-badge&logo=github&logoColor=BBDDE5)](https://github.com/kiris-mods/vampiric-strike-enchantment)

Absorb the health of you enemies when you attack, become the never dying foe!

Once you have a full Enchantment Table system, grab a weapon, some lapis and exp levels, now you can try to get the Vampiric Strike enchantment on your weapon!

There are four levels to this enchantment and each level heals a little more than the last.
If you want to change the amount of health gained each time you attack players/mobs, you can do so via the config which can be found in: ``config/vampiric-strike-enchantment.jsonc`` or the "mods" menu!

![Image showing off an enchantment table with the Vampiric Strike enchantment in](https://wsrv.nl/?url=https%3A%2F%2Ftophatcat.dev%2Fmods%2Fvampiric-strike-enchantment%2Fvampiric-strike-enchantment.png)