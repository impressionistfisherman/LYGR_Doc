import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const githubRepository = process.env.GITHUB_REPOSITORY ?? 'LYGR/LYGR_Doc';
const githubRepoUrl = `https://github.com/${githubRepository}`;

const config: Config = {
  title: 'LYGR Docs',
  tagline: 'Minecraft RPG Server Guide',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: process.env.SITE_URL ?? 'https://LYGR.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL ?? '/LYGR_Doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.GITHUB_ORG ?? 'LYGR', // Usually your GitHub org/user name.
  projectName: process.env.GITHUB_REPOSITORY_NAME ?? 'LYGR_Doc', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${githubRepoUrl}/tree/main/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'LYGR Docs',
      logo: {
        alt: 'LYGR Docs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Guides',
          position: 'left',
          items: [
            {label: '가이드 홈', to: '/'},
            {label: 'Apotheosis', to: '/docs/apotheosis/overview'},
            {label: 'RPG Skill Trees', to: '/docs/skill-system/overview'},
            {label: 'Spell Engine', to: '/docs/spell-engine/overview'},
            {label: 'Silent Gear', to: '/docs/silent-gear/overview'},
            {label: 'Create', to: '/docs/create/overview'},
            {label: 'Mekanism', to: '/docs/mekanism/overview'},
            {label: 'Applied Energistics 2', to: '/docs/ae2/overview'},
            {label: 'Structures', to: '/docs/idas/overview'},
            {label: 'Cataclysm', to: '/docs/cataclysm/overview'},
            {label: 'RPG Classes', to: '/docs/classes/class-overview'},
            {label: 'Weapons & Others', to: '/docs/guide-recommended/archers-armory-arsenal'},
            {label: 'Dungeons mods', to: '/docs/wiki-reference/dungeons-arise'},
          ],
        },
        {
          href: githubRepoUrl,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Apotheosis',
              to: '/docs/apotheosis/overview',
            },
            {
              label: 'Silent Gear',
              to: '/docs/silent-gear/overview',
            },
            {
              label: 'Create',
              to: '/docs/create/overview',
            },
          ],
        },
        {
          title: 'Reference',
          items: [
            {
              label: 'All Guides',
              to: '/docs/apotheosis/overview',
            },
            {
              label: 'GitHub',
              href: githubRepoUrl,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LYGR. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
