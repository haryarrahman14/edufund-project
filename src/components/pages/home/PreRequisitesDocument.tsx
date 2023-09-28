import Card from 'src/components/shared/Card';

interface Item {
  name: string;
  subItems?: string[];
}

interface Document {
  title: string;
  img: string;
  items: Item[];
}

const preRequisites: Document[] = [
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

const PreRequisitesDocument = () => {
  return (
    <div className="lg:max-w-[1200px] mt-[80px] mx-auto">
      <p className="text-[2rem] text-[#0e2e4f] text-center font-bold">
        Dokumen yang harus kamu siapkan
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mx-0 mx-[40px] gap-[24px]">
        {preRequisites?.map((document: Document, index: number) => {
          return (
            <div className="mt-[40px] min-h-[400px]">
              <Card
                key={index}
                title={document?.title}
                items={document?.items}
                img={document?.img}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PreRequisitesDocument;
