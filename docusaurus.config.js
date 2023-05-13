// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          {collapsible: false, to: '/principles', label: 'Принципы', position: 'left'},
          {collapsible: false, to: '/components', label: 'Компоненты', position: 'left'},
          {collapsible: false, to: '/rdpk', label: 'Редполитика', position: 'left'},
          {
            href: 'https://github.com/metz-hei/psb/issues',
            label: 'Стать автором',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© 2001 — 2022 ПAO «Промсвязьбанк» Генеральная лицензия на осуществление банковских операций № 3251 от 17 декабря 2014`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
