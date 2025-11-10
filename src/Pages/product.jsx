import CardProduct from "../Components/Fragments/CardProduct";
import Button from "../Components/Elements/Button/index";
import { Fragment, useEffect, useState, useRef } from "react";

const products = [
  {
    id: 1,
    img: "macbook-1.jpg",
    title: "MacBook Air 13” dan 15”",
    detailShort: "Chip M4",
    pricese: 12000000,
    detailLong:
      "Luar biasa tipis dan cepat untuk bekerja, bermain, dan berkarya dimana saja.",
  },
  {
    id: 2,
    img: "macbook-2.jpg",
    title: "MacBook Pro 14” dan 16”",
    detailShort: "Chip M5, M4 Pro, atau M4 Max",
    pricese: 40000000,
    detailLong:
      "Laptop Mac paling canggih untuk pekerjaan berat dengan file besar.",
  },
  {
    id: 3,
    img: "iMac-1.jpg",
    title: "iMac",
    detailShort: "Chip M5, M4 Pro, atau M4 Max",
    pricese: 20000000,
    detailLong:
      "Desktop lengkap yang menakjubkan untuk kreativitas dan produktivitas.",
  },
];

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((productt) => productt.id === item.id);
        return acc + product.pricese * item.quity;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const Email = localStorage.getItem("Email");
  const HandleLogout = () => {
    localStorage.removeItem("Email");
    localStorage.removeItem("Number");
    window.location.href = "/login";
  };

  const HandleAddCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quity: item.quity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, quity: 1 }]);
    }
  };

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || [])

  const HandleAddCartRef = (id) => {
    cartRef.current = [...cartRef.current,{ id,quity: 1}]
    localStorage.setItem("cart", JSON.stringify(cartRef.current))
  }

  const totalPriceRef = useRef(null)
  useEffect(() => {
    if(cart.length > 0) {
      totalPriceRef.current.style.display = "table-row"
    }else {
      totalPriceRef.current.style.display = "none"
    }
  }, [cart])

  return (
    <Fragment>
      <div className="flex justify-end gap-5 p-3 px-10 border-b">
        <p>{Email}</p>
        <p className="inline-block p-3 rounded-full bg-white border border-gray-400"></p>
        <Button
          OnClick={HandleLogout}
          variant="border border-gray-300 pl-2 pr-2 hover:text-white hover:bg-black  duration-300 cursor-pointer"
          color="text-black"
        >
          Logout
        </Button>
      </div>
      <div className="flex justify-center gap-3 py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header img={product.img}></CardProduct.Header>
              <CardProduct.Body
                title={product.title}
                detail={product.detailShort}
              >
                {product.detailLong}
              </CardProduct.Body>
              <CardProduct.Footer
                HandleAddCart={HandleAddCart}
                id={product.id}
              ></CardProduct.Footer>
            </CardProduct>
          ))}
        </div>

        <div className="w-1/4">
          <h1 className="text-3xl font-mono font-bold">🛒 Cart ›</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr className="">
                <th>Product</th>
                <th>Quantity</th>
                <th>Prices</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>{item.quity}</td>
                    <td>
                      {product.pricese.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <Counter />
      </div> */}
    </Fragment>
  );
};

export default ProductPage;
