import { whatsappUrl } from './site';

export const linkItems = [
  {
    title: 'Konsultasi via WhatsApp',
    description: 'Diskusikan kebutuhan botol plastik HDPE, ukuran, warna, tutup, dan jumlah order.',
    href: whatsappUrl,
    isPrimary: true,
  },
  {
    title: 'Lihat Produk Botol HDPE',
    description: 'Cek kategori botol plastik HDPE untuk kebutuhan cleaning, chemical, kosmetik, dan industri.',
    href: '/portfolio',
    isPrimary: false,
  },
  {
    title: 'Proses Order',
    description: 'Pelajari alur pemesanan dari konsultasi, sample, produksi, sampai pengiriman.',
    href: '/sistem-verd',
    isPrimary: false,
  },
  {
    title: 'Instagram',
    description: 'Lihat update produk, proses produksi, dan informasi kemasan plastik.',
    href: 'https://instagram.com/merpatiagungplastik',
    isPrimary: false,
  },
];