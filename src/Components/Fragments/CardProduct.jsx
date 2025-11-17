import Button from "../Elements/Button/index";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-white border mx-2 my-2 border-gray-600 rounded-r-2xl shadow hover:scale-95 duration-300">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={`${image}`} alt="produc" className="p-8 rounded-t-lg h-60 w-full object-cover" />
    </a>
  );
};

const Body = (props) => {
  const { children, title, description } = props;
  return (
    <div className="px pb-5">
      <a href="">
        <div className="flex gap-2 mb-3 justify-self-center">
          <p className="p-2 h-2 w-2 border border-black rounded-full bg-black inline-block"></p>
          <p className="p-2 h-2 w-2 border border-black rounded-full bg-cyan-700 inline-block"></p>
          <p className="p-2 h-2 w-2 rounded-full border border-gray-500 inline-block"></p>
        </div>
        <h3 className="text-2xl line-clamp-1 text-center font-mono font-semibold tracking-tight">
          {title}
        </h3>
        <p className="text-center font-medium font-mono">{description.substring(0,100)}</p>
        <p className="text-sm max-w-[300px] justify-self-center font-mono text-center text-gray-500">
          {children}
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { HandleAddCart, id } = props;
  return (
    <div className="flex gap-3 items-center mb-10 justify-self-center justify-between">
      <span className="rounded-2xl font-mono p-2 bg-blue-500 text-white">
        Selengkapnya
      </span>
      <Button
        onClick={() => {
          HandleAddCart(id);
        }}
        variant={"bg-black p-3"}
        color={"text-white"}
      >
        Add Cart ›
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
