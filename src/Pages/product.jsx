import CardProduct from "../Components/Fragments/CardProduct";
import Button from '../Components/Elements/Button/index'
import Counter from "../Components/Fragments/Counter";

const products = [
  {
    id: 1,
    img: "macbook-1.jpg",
    title: "MacBook Air 13” dan 15”",
    detailShort : "Chip M4",
    detailLong : "Luar biasa tipis dan cepat untuk bekerja, bermain, dan berkarya dimana saja.",
  },
  {
    id: 2,
    img: "macbook-2.jpg",
    title: "MacBook Pro 14” dan 16”",
    detailShort : "Chip M5, M4 Pro, atau M4 Max",
    detailLong : "Laptop Mac paling canggih untuk pekerjaan berat dengan file besar.",
  },
  {
    id: 3,
    img: "iMac-1.jpg",
    title: "iMac",
    detailShort : "Chip M5, M4 Pro, atau M4 Max",
    detailLong : "Desktop lengkap yang menakjubkan untuk kreativitas dan produktivitas.",
  }
];


const ProductPage = () => {
    const Email = localStorage.getItem("Email")

    const HandleLogout = () => {
        localStorage.removeItem('Email')
        localStorage.removeItem('Number')
        window.location.href = '/login'
    }

  return (
    <>
    <div className="flex justify-end gap-5 p-3 px-10 border-b">
        <p>{Email}</p>
        <p className="inline-block p-3 rounded-full bg-white border border-gray-400"></p>
        <Button OnClick={HandleLogout} variant="border border-gray-300 pl-2 pr-2 hover:text-white hover:bg-black  duration-300 cursor-pointer" color="text-black">Logout</Button>
    </div>
        <div className="flex justify-center gap-3 py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
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
      <div className="flex justify-center mb-20">
        <Counter></Counter>
      </div>
    </>
  );
};

export default ProductPage;
