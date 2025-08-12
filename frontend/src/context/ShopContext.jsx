import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size')
            return;
        }


        if (cardData[itemId]) {
            if (cardData[itemId][size]) {
                cardData[itemId][size] += 1;
            }
            else {
                cardData[itemId][size] = 1;
            }
        }
        else {
            cardData[itemId] = {};
            cardData[itemId][size] = 1;
        }
        setCartItems(cardData);
    }

    useEffect(() => {

    }, [cartItems])

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItems, addToCart
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;