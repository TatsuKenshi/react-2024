// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useCartContext } from "./context/CartContext";

function App() {
  const { isLoading } = useCartContext();

  if (isLoading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: "10rem" }}></div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
