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

  const comanda = (product) => {
    const searchProduct = cart.findIndex((item) => item.id === product.id);
    // console.log(searchProduct)
    if (searchProduct == -1) {
      const productList = [
        ...cart,
        {
          id: product.id,
          name: product.name,
          cost: product.cost,
          count: 1,
          totalCost: product.cost,
        },
      ];
      // console.log(productList)
      setCart(productList);
    } else {
      const newCart = [...cart];
      newCart[searchProduct].count += 1;
      newCart[searchProduct].totalCost =
        newCart[searchProduct].count * newCart[searchProduct].cost;
      setCart(newCart);
    }
  };

  const deleteItem = (product) => {
    const searchProduct = cart.find((item) => item.id === product.id);

    if (searchProduct.count === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(() => {
        // console.log(searchProduct.id)
        // console.log(product.id)
        if (product.id === searchProduct.id) {
            return[{...searchProduct, count: searchProduct.count -1 }];
        } else 
        // console.log('aqui', searchProduct)
        return searchProduct;
      });
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
