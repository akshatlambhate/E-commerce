import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import reducer from "../Cart Component/CartReducer"
const Cartcontext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, amount, image) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, image } });
  };
  return (
    <Cartcontext.Provider value={{ ...state, addToCart }}>
      {children}
    </Cartcontext.Provider>
  );
};

const useCartContext = () => {
    return useContext(Cartcontext);
}

export { CartProvider , useCartContext };
