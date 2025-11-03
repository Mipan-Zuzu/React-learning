import CardProduct from "../Components/Fragments/CardProduct";

const products = [
  {
    img: "macbook-1.jpg",
    title: "MacBook Air 13” dan 15”",
    detailShort : "Chip M4",
    detailLong : "Luar biasa tipis dan cepat untuk bekerja, bermain, dan berkarya dimana saja.",
  },
  {
    img: "macbook-2.jpg",
    title: "MacBook Pro 14” dan 16”",
    detailShort : "Chip M5, M4 Pro, atau M4 Max",
    detailLong : "Laptop Mac paling canggih untuk pekerjaan berat dengan file besar.",
  },
  {
    img: "iMac-1.jpg",
    title: "iMac",
    detailShort : "Chip M5, M4 Pro, atau M4 Max",
    detailLong : "Desktop lengkap yang menakjubkan untuk kreativitas dan produktivitas.",
  }
];


const ProductPage = () => {
  return (
    <div className="flex justify-center gap-3 py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header img={product.img}></CardProduct.Header>
          <CardProduct.Body
            title={product.title}
            detail={product.detailShort}
          >
            {product.detailLong}
          </CardProduct.Body>
          <CardProduct.Footer></CardProduct.Footer>
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
