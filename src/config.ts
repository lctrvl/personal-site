// Edit this file to update your name, tagline, social links, etc.
// These values are imported throughout the site.

export const site = {
  name: 'Alex Silvestre',
  // The line under your name on the homepage. Make it yours.
  tagline: 'Transformation practioner. Forever curious. Woodworker, gardner, cook, rider.',
  // The longer description used in <meta> tags
  description:
    'A  curated catalog of personal projects — woodworking, apps, motorcycle road trips, gardening, cooking — by someone who treats craft as a serious practice. I experiment. I fail. I learn. I get things done.',
  // Your real domain once you have one
  url: 'https://alexsilvestre.com',

  // Where to reach you
  email: 'alex.silvestre@me.com',
  social: [
    { label: 'Email', href: 'mailto:alex.silvestre@me.com' },
    { label: 'GitHub', href: 'https://github.com/lctrvl' },
    // Add or remove as you like
  ],

  // Nav order
  nav: [
    { label: "Things I've Made", href: '/made' },
    { label: 'Writing', href: '/writing' },
    { label: 'Plants', href: '/plants' },
    { label: 'About', href: '/about' },
    { label: 'Now', href: '/now' },
  ],
};

// Labels for the project "domain" field — controls how projects are grouped
// on the listing page. Edit the labels freely; if you add or rename a key,
// also update the enum in src/content/config.ts.
export const domains = {
  craft: { label: 'In the shop', short: 'Craft' },
  code: { label: 'At the keyboard', short: 'Code' },
  road: { label: 'On the road', short: 'Road' },
  table: { label: 'At the table', short: 'Table' },
};
