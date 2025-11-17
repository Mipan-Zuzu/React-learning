import CardProduct from "../Components/Fragments/CardProduct";
import Button from "../Components/Elements/Button/index";
import { Fragment, useEffect, useState, useRef } from "react";
import { getProduct } from "../services/product.services";
import { getUsername } from "../services/auth.services";



const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userName, setUsername] = useState("")
  
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);  
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setUsername(getUsername(token))
    }else{
      window.location.href = "/login"
    }
  }, [])

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProduct((data) => {
      setProducts(data)
    })
  }, [])

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((productt) => productt.id === item.id);
        return acc + product.price * item.quity;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);


  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/login"
    console.log("masuk")
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
        <p>{userName}</p>
        <p className="inline-block p-3 rounded-full bg-white border border-gray-400"></p>
        <Button
          onClick={handleLogout}
          type={"button"}
          variant="border border-gray-300 pl-2 pr-2 hover:text-white hover:bg-black  duration-300 cursor-pointer"
          color="text-black"
        >
          Logouts
        </Button>
      </div>
      <div className="flex justify-center gap-3 py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body
                title={product.title}
                description={product.description}
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

        <div className="w-1/4 mr-32">
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
              {products.length > 0 &&
                cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title.substring(0,5)}...</td>
                    <td>{item.quity}</td>
                    <td>
                      {product.price.toLocaleString("us-US", {
                        style: "currency",
                        currency: "USD",
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
                    {totalPrice.toLocaleString("us-US", {
                      style: "currency",
                      currency: "USD",
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
