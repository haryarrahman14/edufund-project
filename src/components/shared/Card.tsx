import { ICard, ICardBody, ICardHeader } from 'src/types/Card';

const CardHeader = ({ img, title }: ICardHeader) => {
  return (
    <>
      {img && <img className="mx-auto mt-[-64px]" width={124} src={img} />}
      <p className="text-[1.2rem] text-[#0e2e4f] text-center font-bold">
        {title}
      </p>
    </>
  );
};

const CardBody = ({ customClass = '', children }: ICardBody) => {
  return (
    <div className={`flex flex-col gap-[16px] mt-[24px] ${customClass}`}>
      {children}
    </div>
  );
};

const Card = ({ customClass = '', children }: ICard) => {
  return (
    <div
      className={`h-full flex flex-col bg-[#ffffff] p-[20px] rounded-[16px] ${customClass}`}
    >
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
