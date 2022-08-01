import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const Provider = (props) => {
	
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('src/menu.json')
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
        console.log(data)
      })

		}, []);

    console.log(menu)
  return (
    <>
      <AppContext.Provider value={menu}>
        {props.children}
      </AppContext.Provider>
    </>
  );
};

export default Provider;
