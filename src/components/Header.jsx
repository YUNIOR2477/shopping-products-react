import "../styles/header.css";
import { useState, useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

export const Header = (props) => {
  const { allProducts } = useContext(ShoppingContext);
  const { setAllProducts } = useContext(ShoppingContext);
  const { total } = useContext(ShoppingContext);
  const { setTotal } = useContext(ShoppingContext);
  const { countProducts } = useContext(ShoppingContext);
  const { setCountProducts } = useContext(ShoppingContext);

  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    let price = -(product.discount * product.price) / 100 + product.price;
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header className="container mb-4">
      <h1 className="title-header">Tienda</h1>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-cart"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>

        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {allProducts.length ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>
                    <div className="info-cart-product">
                      <span className="cantidad-producto-carrito">
                        {product.quantity}
                      </span>
                      <p className="titulo-producto-carrito">
                        {product.nameProduct}
                      </p>
                      <span className="precio-producto-carrito">
                        ${-(product.discount * product.price) / 100 + product.price}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="icon-close"
                      onClick={() => onDeleteProduct(product)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                ))}
              </div>
              <h4 className="text-center m-3 fw-bold">Total: ${total} </h4>
              <div className="text-center">
                <button
                  className="btn btn-outline-dark mb-4 w-75"
                  onClick={onCleanCart}
                >
                  Vaciar carrito
                </button>
              </div>
            </>
          ) : (
            <h4 className="m-5 text-center">El carrito está vacío 🥲</h4>
          )}
        </div>
      </div>
    </header>
  );
};
