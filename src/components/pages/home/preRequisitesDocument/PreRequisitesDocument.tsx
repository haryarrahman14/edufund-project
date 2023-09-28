import Card from 'src/components/shared/Card';
import { IDocument, IItem } from 'src/types/PreRequisitesDocument';

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
            <Card customClass="mt-[40px] min-h-[400px]">
              <Card.Header title={document?.title} img={document?.img} />
              <Card.Body>
                {document?.items?.map((item: IItem) => {
                  return (
                    <>
                      <div className="flex flex-row items-start gap-[8px]">
                        <img
                          width={16}
                          height={16}
                          src="https://edufund.co.id/icon-check.956d764ed0fa006606f8.svg"
                          alt="marker"
                        />
                        <p className="text-[1rem] text-[#0e2e4f]">
                          {item?.name}
                        </p>
                      </div>

                      {item?.subItems && item?.subItems?.length > 0 && (
                        <>
                          {item?.subItems?.map(
                            (name: string, index: number) => {
                              return (
                                <div
                                  key={index}
                                  className="flex flex-row items-center ml-[24px] gap-[8px]"
                                >
                                  <div className="w-[8px] h-[8px] rounded-[8px] bg-[#ff990a]" />
                                  <p className="text-[1rem] text-[#0e2e4f]">
                                    {name}
                                  </p>
                                </div>
                              );
                            }
                          )}
                        </>
                      )}
                    </>
                  );
                })}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PreRequisitesDocument;
