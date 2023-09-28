import Card from 'src/components/shared/Card';
import { IDocument } from 'src/types/PreRequisitesDocument';

import { preRequisites } from './PreRequisitesData';

const PreRequisitesDocument = () => {
  return (
    <div className="lg:max-w-[1200px] mt-[80px] mx-auto">
      <p className="text-[2rem] text-[#0e2e4f] text-center font-bold">
        Dokumen yang harus kamu siapkan
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mx-0 mx-[40px] gap-[24px]">
        {preRequisites?.map((document: IDocument, index: number) => {
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
