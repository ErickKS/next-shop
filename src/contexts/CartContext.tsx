import { ReactNode, createContext, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  discount: number;
  description: string;
  detailedDescription: string[];
  defaultPriceId: string;
}

interface CartContextData {
  cartItems: IProduct[];
  cartSubtotal: number;
  cartDiscount: number;
  cartTotal: number;
  addToCart: (product: IProduct) => void;
  removeCartItem: (productId: string) => void;
  checkIfItemAlreadyExists: (productId: string) => boolean;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const cartSubtotal = cartItems.reduce((total, product) => {
    return total + product.price;
  }, 0);
  const cartDiscount = cartItems.reduce((total, product) => {
    return total + (product.price * product.discount) / 100;
  }, 0);
  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.price - (product.price * product.discount) / 100;
  }, 0);

  function addToCart(product: IProduct) {
    setCartItems((state) => [...state, product]);
  }

  function removeCartItem(productId: string) {
    setCartItems((state) => state.filter((item) => item.id !== productId));
  }

  function checkIfItemAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartSubtotal,
        cartDiscount,
        cartTotal,
        addToCart,
        removeCartItem,
        checkIfItemAlreadyExists
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
