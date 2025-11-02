import Button from "../Elements/Button/index";

const CardProduct = (props) => {
  const { img, title, detailShort, detailLong } = props;
  return (
    <div className="flex justify-self-center items-center min-h-screen hover:scale-95 duration-300">
      <div className="w-full max-w-sm bg-white border border-gray600 rounded-r-2xl shadow">
        <a href="#">
          <ImgCard img={img} />
        </a>
        <div className="px pb-5">
          <a href="">
            <div className="flex gap-2 mb-3 justify-self-center">
              <Dots bg={"bg-black"} />
              <Dots bg={"bg-white"} />
              <Dots bg={"bg-cyan-400"} />
            </div>
            <Title>{title}</Title>
            <DetailShort>{detailShort}</DetailShort>
            <DetailLong>
              {detailLong}
            </DetailLong>
          </a>
        </div>
        <div className="flex gap-3 items-center mb-10 justify-self-center justify-between">
          <Selengkap />
          <Button variant={"bg-black"} color={"text-white"}>
            Buy ›
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ImgCard = (props) => {
  const { img } = props;
  return (
    <img src={`/images/${img}`}  className="p-8 rounded-t-lg" />
  );
};

export const Dots = (props) => {
  const { bg } = props;
  return (
    <a
      className={`p-2 h-2 w-2 border border-black rounded-full ${bg} inline-block`}
    ></a>
  );
};

export const Title = (props) => {
  const { children } = props;
  return (
    <h3 className="text-2xl text-center font-mono font-semibold tracking-tight">
      {children}
    </h3>
  );
};

export const DetailShort = (props) => {
  const { children } = props;
  return <p className="text-center font-medium font-mono">{children}</p>;
};

export const DetailLong = (props) => {
  const { children } = props;
  return (
    <p className="text-sm max-w-[300px] justify-self-center font-mono text-center text-gray-500">
      {children}
    </p>
  );
};

export const Selengkap = () => {
  return (
    <span className="rounded-2xl font-mono p-2 bg-blue-500 text-white">
      Selengkapnya
    </span>
  );
};

export default CardProduct;
