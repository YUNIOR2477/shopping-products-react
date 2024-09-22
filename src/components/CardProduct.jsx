import "../styles/CardProducts.css";
import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

const CardProduct = (props) => {
  const { allProducts } = useContext(ShoppingContext);
  const { setAllProducts } = useContext(ShoppingContext);
  const { total } = useContext(ShoppingContext);
  const { setTotal } = useContext(ShoppingContext);
  const { countProducts } = useContext(ShoppingContext);
  const { setCountProducts } = useContext(ShoppingContext);
  const { setShow } = useContext(ShoppingContext);
  const { setDescriptionProduct } = useContext(ShoppingContext);
  const { setImage } = useContext(ShoppingContext);

  const onAddProduct = (product) => {
    let price = -(product.discount * product.price) / 100 + product.price

    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <>
      <div className="card text-center container-product border-0 mb-5">
        <div className="overflow-hidden">
          <img
            className="img"
            src={props.product.img}
            alt={props.product.nameProduct}
            onClick={() => {
              setShow(true);
              setDescriptionProduct(props.product);
              setImage(props.product.img);
            }}
          />
        </div>
        <div className="card-body text-light description">
          <h3 className="card-title text fw-bold">
            {props.product.nameProduct}
          </h3>
          <h5 className="card-text text-capitalize">
            $COP{" "}
            {-(props.product.discount * props.product.price) / 100 +
              props.product.price}
          </h5>
          <p className="card-text text-secundary descriptionText">
            {props.product.description}
          </p>
          <button
            className="btn btn-outline-light rounded-0 w-75"
            onClick={() => {
              onAddProduct(props.product);
            }}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
