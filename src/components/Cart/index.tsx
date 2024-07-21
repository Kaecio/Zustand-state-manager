import { useCartStore } from "../../store/CartStore";

export const Cart = () => {
  const [items, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart,
  ]);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((item) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              width: "250px",
              height: "80px",
              border: "1px solid #ccc",
              listStyle: "none",
              margin: "10px",
            }}
          >
            <li key={`${item.id} - ${item.name}`}>
              {item.name} - ${item.price}
            </li>
            <button
              onClick={() => useCartStore.getState().removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
