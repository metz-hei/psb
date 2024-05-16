// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ПСБ Гайды',
  tagline: 'Что это такое? И зачем все это нужно? ',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ПСБ', // Usually your GitHub org/user name.
  projectName: 'ПСБ Гайды', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/metz-hei/psb',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ПСБ Гайды',
        logo: {
          alt: 'ПСБ Гайды',
          src: 'img/logo.svg',
        },
        items: [
          {collapsible: false, to: '/patterns', label: 'Паттерны', position: 'left'},
          {
            href: 'https://github.com/metz-hei/psb/discussions',
            label: 'Предложить идею',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© 2001 — 2024 ПAO «Промсвязьбанк» Генеральная лицензия на осуществление банковских операций № 3251 от 17 декабря 2014`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
