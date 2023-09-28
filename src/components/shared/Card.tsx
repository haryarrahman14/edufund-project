interface Item {
  name: string;
  subItems?: string[];
}

interface Card {
  title: string;
  img?: string;
  items?: Item[];
}

const Document = ({ title, img, items }: Card) => {
  return (
    <div className="h-full flex flex-col bg-[#ffffff] p-[20px] rounded-[16px]">
      {img && <img className="mx-auto mt-[-64px]" width={124} src={img} />}
      <p className="text-[1.2rem] text-[#0e2e4f] text-center font-bold">
        {title}
      </p>
      <div className="flex flex-col gap-[16px] mt-[24px]">
        {items?.map((item: Item) => {
          return (
            <>
              <div className="flex flex-row items-start gap-[8px]">
                <img
                  width={16}
                  height={16}
                  src="https://edufund.co.id/icon-check.956d764ed0fa006606f8.svg"
                  alt="marker"
                />
                <p className="text-[1rem] text-[#0e2e4f]">{item?.name}</p>
              </div>

              {item?.subItems && item?.subItems?.length > 0 && (
                <>
                  {item?.subItems?.map((name: string, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center ml-[24px] gap-[8px]"
                      >
                        <div className="w-[8px] h-[8px] rounded-[8px] bg-[#ff990a]" />
                        <p className="text-[1rem] text-[#0e2e4f]">{name}</p>
                      </div>
                    );
                  })}
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Document;
