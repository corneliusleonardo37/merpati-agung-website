import { whatsappUrl } from './site';

export const linkItems = [
  {
    title: 'Konsultasi via WhatsApp',
    description: 'Diskusikan kebutuhan botol HDPE, jerigen, botol pupuk, botol oli, botol HCL, dan jumlah order.',
    href: whatsappUrl,
    isPrimary: true,
  },
  {
    title: 'Lihat Produk Plastik',
    description: 'Cek kategori produk plastik untuk toko bahan kimia, toko plastik, pabrik pupuk, dan industri.',
    href: '/portfolio',
    isPrimary: false,
  },
  {
    title: 'Proses Order',
    description: 'Pelajari alur pemesanan dari konsultasi, cek spesifikasi, penawaran, sampai pengiriman.',
    href: '/proses-order',
    isPrimary: false,
  },
  {
    title: 'Instagram',
    description: 'Lihat update produk dan informasi kemasan plastik.',
    href: 'https://instagram.com/merpatiagungplastik',
    isPrimary: false,
  },
];
