import CardProduct from "../Components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center justify-self-center gap-10">
    <CardProduct
      img={"macbook-1.jpg"}
      title={"MacBook Pro 14” dan 16”"}
      detailShort={"Chip M4"}
      detailLong={"Luar biasa tipis dan cepat untuk bekerja, bermain, dan berkarya di mana saja."}
    />
    
     <CardProduct
      img={"macbook-2.jpg"}
      title={"MacBook Pro 14” dan 16”"}
      detailShort={"Chip M5, M4 Pro, atau M4 Max"}
      detailLong={"Laptop Mac paling canggih untuk pekerjaan berat dengan file besar."}
    />

    <CardProduct
      img={"iMac-1.jpg"}
      title={"iMac"}
      detailShort={"Chip M4"}
      detailLong={"Desktop lengkap yang menakjubkan untuk kreativitas dan produktivitas."}
    />
    </div>
    
  );
};

export default ProductPage;
