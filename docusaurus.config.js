// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'آموزش جاوا',
  tagline: 'آموزش ويژگی‌های جدید زبان جاوا',
  url: 'https://java.javacup.ir',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'javacup-ir', // Usually your GitHub org/user name.
  projectName: 'java', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
    localeConfigs: {
      fa: {
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/javacup-ir/java/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'آموزش جاوا',
        logo: {
          alt: 'JavaCup',
          src: 'img/javacup.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'آموزش',
          },
          {
            href: 'https://github.com/javacup-ir/java',
            label: 'مخزن گیت‌هاب',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'بخش‌ها',
            items: [
              {
                label: 'معرفی پروژه',
                to: '/docs/intro',
              },
              {
                label: 'ويژگی‌های جدید',
                to: 'http://localhost:3001/docs/category/%D9%88%DB%8C%DA%98%DA%AF%DB%8C%D9%87%D8%A7%DB%8C-%D8%AC%D8%AF%DB%8C%D8%AF',
              },
              {
                label: 'نسخه‌های جاوا',
                to: 'http://localhost:3001/docs/category/%D9%86%D8%B3%D8%AE%D9%87%D9%87%D8%A7%DB%8C-%D8%B2%D8%A8%D8%A7%D9%86-%D8%AC%D8%A7%D9%88%D8%A7',
              },
            ],
          },
          {
            title: 'رسانه‌های اجتماعی',
            items: [
              {
                label: 'تلگرام',
                href: 'http://t.me/JavaCupIR',
              },
              {
                label: 'اینستاگرام',
                href: 'https://www.instagram.com/javacup.ir/',
              },
              {
                label: 'لینکداین',
                href: 'https://www.linkedin.com/groups/4656692',
              },
              {
                label: 'توئیتر',
                href: 'https://twitter.com/JavaCupIR',
              },
            ],
          },
        ],
        copyright: `حق نشر © ${new Date().getFullYear()} جاواکاپ. قدرت گرفته از داکیوسورس`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
