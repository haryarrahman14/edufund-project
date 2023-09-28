import { Document } from 'src/types/PreRequisitesDocument';

export const preRequisites: Document[] = [
  {
    title: 'Pekerja',
    img: 'https://edufund.co.id/assets/images/icon/icon-pekerja.svg',
    items: [
      { name: 'KTP (Kartu Tanda Penduduk)' },
      {
        name: 'Bukti Penghasilan',
        subItems: [
          'NPWP, atau',
          'Slip Gaji, atau',
          'Surat Keterangan Kerja, atau',
          'Rekening Koran 1 bulan terakhir'
        ]
      },
      { name: 'Tagihan pembayaran dari institusi pendidikan (selain EduCash)' }
    ]
  },
  {
    title: 'Wiraswasta',
    img: 'https://edufund.co.id/assets/images/icon/icon-wiraswasta.svg',
    items: [
      { name: 'KTP (Kartu Tanda Penduduk)' },
      {
        name: 'Bukti Penghasilan',
        subItems: ['NPWP, atau', 'Rekening Koran 1 bulan terakhir']
      },
      { name: 'Tagihan pembayaran dari institusi pendidikan (selain EduCash)' }
    ]
  },
  {
    title: 'Pelajar',
    img: 'https://edufund.co.id/assets/images/icon/icon-pelajar.svg',
    items: [
      { name: 'KTP (Kartu Tanda Penduduk)' },

      { name: 'Tagihan pembayaran dari institusi pendidikan (selain EduCash)' }
    ]
  }
];
