import CartsProducts from "./components/CardsProducts";
import { Header } from "./components/Header";
import ModalProduct from "./components/modalProduct";

const App = () => {
  return (
    <div className="main">
      <Header/>
      <ModalProduct/>
      <CartsProducts />
    </div>
  );
};

export default App;
