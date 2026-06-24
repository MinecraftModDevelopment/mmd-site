---
layout: home
title: Home

hero:
  name: "Welcome To"
  text: "The Home of The Modding Group, Minecraft Mod Development!"
  tagline: "Modding Minecraft Together!"
    
  image:
    src: /mmd-binary-green.png
    alt: The MMD brand logo.
    
  actions:
    - theme: brand
      text: Our CurseForge Page
      link: https://curseforge.com/members/mcmoddev
    - theme: brand
      text: Discord
      link: https://discord.moddev.zone

#features:
  #- title: What is Minecraft Mod Development?
    #details: Minecraft Mod Development (Sometimes shortened to MMD) is a group of friends that mod Minecraft for fun, and have done so for over 10 years now!
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/kiricattus.png',
    name: 'KiriCattus',
    title: 'Manager',
    desc: 'Developer of Mysterious Lands, Knock Knock, Cattus Utils and more!',
    links: [
      { icon: 'github', link: 'https://github.com/kiricattus' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/tophatcat.dev' }
    ]
  },
  {
    avatar: 'https://www.github.com/thecurle.png',
    name: 'Curle',
    title: 'Manager',
    desc: 'Developer of Bare Essentials and retro tech enthusiast!',
    links: [
      { icon: 'github', link: 'https://github.com/thecurle' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/gemwire.uk' }
    ]
  },
  {
    avatar: 'https://www.github.com/dshadowwolf.png',
    name: 'DShadowWolf',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/dshadowwolf' }
    ]
  },
  {
    avatar: 'https://www.github.com/SkyBlade1978.png',
    name: 'SkyBlade1978',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/SkyBlade1978' }
    ]
  },
{
    avatar: 'https://www.github.com/skyjay1.png',
    name: 'skyjay1',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/skyjay1' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Meet the Group
    </template>
    <template #lead>
      The MMD modding gang are from all over, but all share the same desire to mod Minecraft and have fun!
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>