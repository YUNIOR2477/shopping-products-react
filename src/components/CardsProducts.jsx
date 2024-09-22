import CardProduct from "./CardProduct";
import { ShoppingContext } from "../context/ShoppingContext";
import { useContext } from "react";

const CartsProducts = (props) => {
  const { products } = useContext(ShoppingContext);
  return (
    <div className="container">
      <div className="row">
      {products.map((product) => (
        <div className="col-md-3" key={product.id}>
            <CardProduct product={product} />
        </div>
        ))}
      </div>
    </div>
  );
};

export default CartsProducts;
