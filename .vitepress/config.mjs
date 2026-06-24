import navbar from './navbar.mjs';

export default {
    lang: 'en-GB',
    title: 'Minecraft Mod Development',
    icon: 'src/public/mmd-binary-green.png',
    description: 'Modding Minecraft together!',
    cleanUrls: true,
    srcDir: './src',

    themeConfig: {
        outline: 'h2',

        // Set up social links in the navbar next to the theme toggle.
        socialLinks: [
            {icon: 'github', link: 'https://github.com/minecraftmoddevelopment'},
            {icon: 'discord', link: 'https://discord.moddev.zone'},
        ],

        // Allow searching local site contents.
        search: {
            provider: 'local',
        },

        // Set the last updated time on posts/docs.
        lastUpdated: {
            text: 'Last updated',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            },
        },

        // Disable "previous" and "next" doc footer buttons.
        docFooter: {
            prev: false,
            next: false,
        },

        // Provide an "Edit this page" link on posts/docs.
        editLink: {
            pattern: 'https://github.com/minecraftmoddevelopment/mmd-site/edit/main/src/:path',
            text: 'Contribute to this page on GitHub'
        },

        // The footer notice for the entire site.
        footer: {
            message: 'Modding Minecraft Together! (Not affiliated with Mojang, Minecraft or Microsoft)',
            copyright: 'Copyright © 2016 - 2026 Minecraft Mod Development, All Rights Reserved.',
        },

        // The navbar for the entire site.
        nav: navbar,

        // The sidebar holds quick jump-to links to different parts of the same page.
        sidebar: {
            '/docs': [
                {
                    text: 'Minecraft Mods',
                    items: [
                        {text: 'Iron Age Furniture', link: '/docs/iron-age-furniture'},
                        {text: 'Base Metals', link: '/docs/base-metals'},
                    ]
                }
            ]
        }
    }
};
