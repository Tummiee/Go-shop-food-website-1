import { createContext, useContext, useState } from 'react';


const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    return useContext(CartContext);
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (item) => {

        setCart([...cart, item]);
        setTotalItems(totalItems + 1); // Increment total items count
        setTotalPrice(totalPrice + item.price);
    };

    const removeFromCart = (itemId) => {
        const itemIndex = cart.findIndex(item => item.id === itemId);
        if (itemIndex > -1) {
            const newCart = [...cart];
            const item = newCart[itemIndex];
            newCart.splice(itemIndex, 1);
            setCart(newCart);
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - item.price);
        }
    };

    const checkout = () => {
        setCart([]);
        setTotalItems(0);
        setTotalPrice(0);
    };

    const value = {
        cart,
        addToCart,
        removeFromCart,
        totalItems,
        totalPrice,
        checkout,

    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
