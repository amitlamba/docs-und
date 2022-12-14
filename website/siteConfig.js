/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Amit',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/facicon.png',
    infoLink: 'https://www.linkedin.com/in/amitlamba',
    pinned: false,
  },
];

const siteConfig = {
  title: 'UserNDot', // Title for your website.
  tagline: 'A Machine Learning based multi-channel marketing system',
  url: 'https://userndot.com', // Your website URL
  baseUrl: '/d/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'UserNDot Docs',
  organizationName: 'Digicologies Software',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'fundamentals/about', label: 'Documentation'},
    // {doc: 'doc4', label: 'API'},
    // {page: 'help', label: 'Help'},
    // {blog: true, label: 'Blog'},
    {href: 'https://userndot.com', label: 'Try UserNDot'},
      {href: 'https://userndot.com/login', label: 'Login'},
      {href: 'https://userndot.com/register', label: 'Demo'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.png',
  footerIcon: 'img/favicon.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    //primaryColor: '#2E8555',
    primaryColor: '#005c99',
    // secondaryColor: '#205C3B',
    secondaryColor: '#00A756'
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright ?? 2017 - ${new Date().getFullYear()} Digicologies Software Pvt Ltd`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
      'https://buttons.github.io/buttons.js',
      'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
      '/d/js/code-block-buttons.js',
  ],
  stylesheets: ['/d/css/code-block-buttons.css'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/favicon.png',
  twitterImage: 'img/favicon.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
