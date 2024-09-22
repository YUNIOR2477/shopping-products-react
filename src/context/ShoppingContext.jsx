import { createContext, useState } from "react";
import { products } from "../data/products";

export const ShoppingContext = createContext();

export const ShoppingContextProvider = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [show, setShow] = useState(false);
  const [descriptionProduct, setDescriptionProduct] = useState({});
  const [image, setImage] = useState();
  return (
    <ShoppingContext.Provider
      value={{
        products,
        allProducts,
        setAllProducts,
        total,
        setTotal,
        countProducts,
        setCountProducts,
        show,
        setShow,
        descriptionProduct,
        setDescriptionProduct,
        image,
        setImage,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};
