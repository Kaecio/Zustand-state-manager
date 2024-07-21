import { create } from "zustand";
import { initialItems } from "../../src/mock";
import { v4 as uuidv4 } from "uuid";

type Item = {
  id: number;
  name: string;
  price: number;
};

type CartItem = Item & { uuid: string };

type CartStore = {
  cart: CartItem[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
  availableItems: Item[];
};

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    availableItems: initialItems,
    addToCart: (item) =>
      set((state) => ({ cart: [...state.cart, { ...item, uuid: uuidv4() }] })),
    removeFromCart: (uuid) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.uuid !== uuid),
      })),
  };
});
