import { useCartStore } from "../../store/CartStore";

export const Products = () => {
  const [items, addToCart] = useCartStore((state) => [
    state.availableItems,
    state.addToCart,
  ]);

  return (
    <div>
      <h1>Choose your Products</h1>
      <div>
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
              <li key={`${item.id}`}>
                {item.name} - R$ {item.price}
              </li>
              <button onClick={() => useCartStore.getState().addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
