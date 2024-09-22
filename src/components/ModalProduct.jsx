import Modal from "react-bootstrap/Modal";
import { useContext, useState } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/ModalProducts.css";

const ModalProduct = (props) => {
  const { show } = useContext(ShoppingContext);
  const { setShow } = useContext(ShoppingContext);
  const { descriptionProduct } = useContext(ShoppingContext);
  const { allProducts } = useContext(ShoppingContext);
  const { setAllProducts } = useContext(ShoppingContext);
  const { total } = useContext(ShoppingContext);
  const { setTotal } = useContext(ShoppingContext);
  const { countProducts } = useContext(ShoppingContext);
  const { setCountProducts } = useContext(ShoppingContext);
  const { image } = useContext(ShoppingContext);
  const { setImage } = useContext(ShoppingContext);

  const onAddProduct = (descriptionProduct) => {
    if (allProducts.find((item) => item.id === descriptionProduct.id)) {
      const products = allProducts.map((item) =>
        item.id === descriptionProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setTotal(total + descriptionProduct.price * descriptionProduct.quantity);
      setCountProducts(countProducts + descriptionProduct.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + descriptionProduct.price * descriptionProduct.quantity);
    setCountProducts(countProducts + descriptionProduct.quantity);
    setAllProducts([...allProducts, descriptionProduct]);
  };

  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      aria-labelledby="example-modal-sizes-title-sm"
      size="xl"
    >
      <Modal.Header closeButton className="modalContainer">
        <Modal.Title className="fw-light fs-2 p-1 text-black">
          Descripcion del producto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="pb-1 modalContainer modalc">
        <Container>
          <Row>
            <Col xs={6} md={1}>
              <img
                className="modal-img"
                src={descriptionProduct.img}
                alt={descriptionProduct.nameProduct}
                onClick={() => {
                  setImage(descriptionProduct.img);
                }}
              />
              <img
                className="modal-img"
                src={descriptionProduct.img2}
                alt={descriptionProduct.nameProduct}
                onClick={() => {
                  setImage(descriptionProduct.img2);
                }}
              />
              <img
                className="modal-img"
                src={descriptionProduct.img3}
                alt={descriptionProduct.nameProduct}
                onClick={() => {
                  setImage(descriptionProduct.img3);
                }}
              />
              <img
                className="modal-img"
                src={descriptionProduct.img4}
                alt={descriptionProduct.nameProduct}
                onClick={() => {
                  setImage(descriptionProduct.img4);
                }}
              />
            </Col>
            <Col xs={6} md={5}>
              <img
                className="modal-img-principal"
                src={image}
                alt={descriptionProduct.nameProduct}
              />
            </Col>
            <Col xs={6} md={5} className="m-lg-2 ">
              <h2 className="fw-bold fs-2 text-black">{descriptionProduct.nameProduct}</h2>
              <h2 className="fw-bold fs-4 text-black">
                $ COP
                {-(descriptionProduct.discount * descriptionProduct.price) /
                  100 +
                  descriptionProduct.price}{" "}
                <span className="text-dark fs-5 text-decoration-line-through fw-light">
                  COP{descriptionProduct.price}
                </span>{" "}
                <span className="text-danger-emphasis fs-5 fw-light">
                  -{descriptionProduct.discount}% dto
                </span>
              </h2>
              <h3 className="fw-bold mt-4 text-black">Descripcion:</h3>
              <p className="text-dark">{descriptionProduct.description}</p>
              <h3 className="fw-bold text-black">Colores:</h3>
              <p className="text-dark">{descriptionProduct.colors}</p>
              <h3 className="fw-bold text-black">
                Stock:{" "}
                <span className="text-danger-emphasis fs-5">
                  {descriptionProduct.stock}{" "}
                  <span className="fw-light text-black">und disponibles</span>
                </span>
              </h3>
            </Col>
          </Row>
        </Container>
        <hr className="line-hr"></hr>
          <button
            className="btn btn-outline-dark w-75 button"
            onClick={() => {
              onAddProduct(descriptionProduct);
            }}
          >
            Añadir al carrito
          </button>
      </Modal.Body>
    </Modal>
  );
};

export default ModalProduct;
