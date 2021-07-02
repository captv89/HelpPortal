/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Documentaion Site',
  tagline: 'The best documentation site',
  url: 'https://example.com',
  baseUrl: '/HelpPortal/',
  favicon: 'img/favicon.ico',
  organizationName: 'CaptV89', // Usually your GitHub org/user name.
  projectName: 'HelpDocs', // Usually your repo name.
  plugins: [
      require.resolve('docusurus-lunr-search'),
  ],
  themeConfig: {
    Image: 'img/Picture3.png',
    metadatas: [{name: 'twitter:card', content: 'summary'}],
    colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
        switchConfig: {
            darkIcon: '🌜',
            lightIcon: '☀️',
            darkIconStyle: {
                marginLeft: '2px',
            },
            lightIconStyle: {
                marginLeft: '1px',
            },
        },
    },
    announcementBar: {
        id: 'Announcements',
        content: `⭐️ Prefer Video Tutorials to Reading Documents? Checkout the <b>Videos</b> Section! ⭐️`,
        backgroundColor: '#303846',
        textColor: '#fafbfc',
      },
      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'Documentation Logo',
          src: 'img/logo.png',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'greeting',
            position: 'left',
            label: 'Manuals',
          },
          {
            type: 'doc',
            docId: 'how2video',
            label: 'Videos',
            position: 'left',
          },
          {
            to:'blog',
            label: 'Features',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            docsPluginId: 'default',
            dropdownItemsAfter: [
              {
                to: '/',
                label: 'All versions',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Documents',
                to: 'docs/greeting',
              },
              {
                label: 'Video Tutorials',
                to: 'docs/how2video',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/',
              },
              {
                label: 'Linkedin',
                href: 'https://in.linkedin.com/',
              },
            ],
          },
          {
            title: 'Others',
            items: [
              {
                label: 'Privacy',
                href: 'https://google.com/privacy',
                target: '_blank',
                rel: 'noreferrer noopener',
              },
              {
                label: 'Features',
                to: 'blog/',
              },
            ],
          },
        ],
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
          href: 'https://reactjs.org/',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Me.`,
      },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
});
