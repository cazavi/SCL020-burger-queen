import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const Provider = (props) => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("src/menu.json")
            .then((response) => response.json())
            .then((data) => {
                setMenu(data);
                console.log(data);
            });
    }, []);

    const [cart, setCart] = useState([]);

    const comanda = (selectedProduct) => {
        const searchProduct = cart.findIndex((item) => item.id === selectedProduct.id);
        // console.log(searchProduct)
        if (searchProduct == -1) {
            const productList = [
                ...cart,
                {
                    id: selectedProduct.id,
                    product: selectedProduct.product,
                    price: selectedProduct.price,
                    qty: 1,
                    totalPrice: selectedProduct.price,
                },
            ];
            // console.log(productList)
            setCart(productList);
        } else {
            const newCart = [...cart];
            newCart[searchProduct].qty += 1;
            newCart[searchProduct].totalPrice =
                newCart[searchProduct].qty * newCart[searchProduct].price;
            setCart(newCart);
        }
    };

    const deleteItem = (selectedProduct) => {
        const searchProduct = cart.find((item) => item.id === selectedProduct.id);

        if (searchProduct.qty === 1) {
            setCart(cart.filter((item) => item.id !== selectedProduct.id));
        } else {
            setCart(
                cart.map((item) => {
                    if (item.id === selectedProduct.id) {
                        console.log(item)
                        return { ...searchProduct, qty: searchProduct.qty - 1, totalPrice: searchProduct.totalPrice - searchProduct.price };
                    } else
                        return item;
                }));
        }
    };

    const newMenu = { menu, cart, comanda, deleteItem };

    return (
        <>
            <AppContext.Provider value={newMenu}>
                {props.children}
            </AppContext.Provider>
        </>
    );
};

export default Provider;
