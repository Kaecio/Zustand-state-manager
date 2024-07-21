import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Total } from "./components/Total";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyItems: "center",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "20px",
        width: "100%",
      }}
    >
      <div>
        <Products />
        <Cart />
      </div>
      <div
        style={{
          width: "300px",
        }}
      >
        <Total />
      </div>
    </div>
  );
}

export default App;
