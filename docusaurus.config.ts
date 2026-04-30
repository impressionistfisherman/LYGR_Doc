import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const githubRepository = process.env.GITHUB_REPOSITORY ?? 'LYGR/LYGR_Doc';
const githubRepoUrl = `https://github.com/${githubRepository}`;

const config: Config = {
  title: 'LYGR Docs',
  tagline: 'LYGR Minecraft RPG 모드팩 가이드',
  favicon: 'img/favicon-full-centered.png',

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

  markdown: {
    mermaid: true,
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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.6,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: ['/guides', '/docs/guides', '/docs/modpack'],
            to: '/',
          },
          {
            from: ['/docs/user-guide'],
            to: '/docs/user-guide/beginners-guide',
          },
          {
            from: ['/docs/setup'],
            to: '/docs/setup-guide',
          },
        ],
      },
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'ko'],
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        searchResultLimits: 8,
        searchResultContextMaxLength: 80,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/lygr-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'LYGR Docs',
      logo: {
        alt: 'LYGR Docs Logo',
        src: 'img/lygr-logo.png',
      },
      items: [
        {
          type: 'dropdown',
          label: '모드팩 가이드',
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
          type: 'docSidebar',
          sidebarId: 'userGuideSidebar',
          position: 'left',
          label: '유저 가이드',
        },
        {
          type: 'docSidebar',
          sidebarId: 'setupGuideSidebar',
          position: 'left',
          label: '설치 가이드',
        },
        {
          type: 'docSidebar',
          sidebarId: 'faqSidebar',
          position: 'left',
          label: 'FAQ',
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
          title: '모드팩 가이드',
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
            {
              label: 'Cataclysm',
              to: '/docs/cataclysm/overview',
            },
          ],
        },
        {
          title: '유저 가이드',
          items: [
            {
              label: '초보자 완전 가이드',
              to: '/docs/user-guide/beginners-guide',
            },
            {
              label: '설치 & 첫 실행',
              to: '/docs/user-guide/beginners-guide/first-launch',
            },
            {
              label: '엔드게임 로드맵',
              to: '/docs/user-guide/beginners-guide/endgame-roadmap',
            },
          ],
        },
        {
          title: '설치 & 도움말',
          items: [
            {
              label: '설치 가이드',
              to: '/docs/setup-guide',
            },
            {
              label: '성능 최적화',
              to: '/docs/setup-guide/performance',
            },
            {
              label: 'FAQ',
              to: '/docs/faq',
            },
          ],
        },
        {
          title: '저장소',
          items: [
            {
              label: '가이드 홈',
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
