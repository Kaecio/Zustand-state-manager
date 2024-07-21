import { useCartStore } from "../../store/CartStore";

export const Total = () => {
  const items = useCartStore((state) => [state.cart]);

  const sum = items[0].reduce((acc, item) => acc + item.price, 0);

  return (
    <aside
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <h1>Total</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "400px",
          height: "100px",
          border: "1px solid #ccc",
        }}
      >
        <p>Total: ${sum.toLocaleString("PT-br")}</p>
      </div>
    </aside>
  );
};
