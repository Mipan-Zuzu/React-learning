import CardProduct from "../Components/Fragments/CardProduct";

const ProductPage = () => {
  return (
        <div className="flex justify-center gap-3 py-5">
            <CardProduct>
                <CardProduct.Header img={'macbook-1.jpg'} ></CardProduct.Header>
                <CardProduct.Body title={"MacBook Air 13” dan 15”"} detail={"Chip M4"}>Luar biasa tipis dan cepat untuk bekerja, bermain, dan berkarya di mana saja.</CardProduct.Body>
                <CardProduct.Footer ></CardProduct.Footer>
            </CardProduct>

            <CardProduct>
                <CardProduct.Header img={'macbook-2.jpg'} ></CardProduct.Header>
                <CardProduct.Body title={"MacBook Pro 14” dan 16”"} detail={"Chip M5, M4 Pro, atau M4 Max"}> Laptop Mac paling canggih untuk pekerjaan berat dengan file besar.</CardProduct.Body>
                <CardProduct.Footer ></CardProduct.Footer>
            </CardProduct>

            <CardProduct>
                <CardProduct.Header img={'iMac-1.jpg'} ></CardProduct.Header>
                <CardProduct.Body title={"iMac"} detail={"Chip M4"}>Desktop lengkap yang menakjubkan untuk kreativitas dan produktivitas.</CardProduct.Body>
                <CardProduct.Footer ></CardProduct.Footer>
            </CardProduct>
        </div>
  )
}

export default ProductPage;
