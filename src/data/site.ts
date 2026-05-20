export const site = {
  name: 'Merpati Agung Plastik',
  tagline: 'Pabrik Botol Plastik HDPE',
url: 'https://merpati-agung-website.pages.dev/',

  whatsappNumber: '6281234567890',
  whatsappDisplay: '0812-3456-7890',
  whatsappMessage:
    'Halo Merpati Agung Plastik, saya ingin konsultasi kebutuhan botol plastik HDPE.',

  instagram: '@merpatiagungplastik',
  email: 'hello@merpatiagungplastik.com',

  areas: ['Sidoarjo', 'Surabaya', 'Jawa Timur', 'Indonesia'],

  seo: {
    title: 'Pabrik Botol Plastik HDPE Sidoarjo | Merpati Agung Plastik',
    description:
      'Merpati Agung Plastik adalah pabrik botol plastik HDPE di Sidoarjo untuk kebutuhan kemasan industri, kosmetik, chemical, cleaning product, dan brand lokal.',
    keywords: [
      'pabrik botol plastik HDPE',
      'produsen botol plastik HDPE',
      'botol plastik HDPE Sidoarjo',
      'pabrik kemasan plastik',
      'botol plastik custom',
      'supplier botol plastik HDPE',
      'botol sabun cair HDPE',
      'botol shampoo HDPE',
      'botol chemical HDPE',
      'botol plastik industri',
      'botol plastik grosir',
    ],
  },
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;