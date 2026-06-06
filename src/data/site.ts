export const site = {
  name: 'Merpati Agung Plastik',
  tagline: 'Pabrik dan Supplier Produk Plastik',
  url: 'https://merpati-agung-website.pages.dev/',

  whatsappNumber: '6281234567890',
  whatsappDisplay: '0812-3456-7890',
  whatsappMessage:
    'Halo Merpati Agung Plastik, saya ingin konsultasi kebutuhan produk plastik untuk pemesanan.',

  instagram: '@merpatiagungplastik',
  email: 'hello@merpatiagungplastik.com',

  areas: ['Sidoarjo', 'Surabaya', 'Jawa Timur', 'Indonesia'],

  seo: {
    title: 'Pabrik dan Supplier Produk Plastik | Merpati Agung Plastik',
    description:
      'Merpati Agung Plastik adalah pabrik dan supplier produk plastik untuk botol HDPE, jerigen plastik, botol pupuk, botol oli, botol HCL, dan kemasan bahan kimia.',
    keywords: [
      'pabrik plastik',
      'supplier produk plastik',
      'pabrik botol plastik HDPE',
      'supplier botol plastik HDPE',
      'jerigen plastik',
      'botol pupuk',
      'botol kemasan oli',
      'botol HCL',
      'botol bahan kimia',
      'kemasan plastik bahan kimia',
      'botol plastik grosir',
      'supplier toko bahan kimia',
      'supplier toko plastik',
    ],
  },
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;
