import React, { useContext } from "react";
import { AppContext } from "./Provider";

function Menu({menu}){
  const context = useContext(AppContext)
  
  return (
    <div className="font-Comfortaa grid grid-cols-2 gap-8 my-8">
      {menu.map((item, index) => (
        <button key={index} onClick={() => context.comanda(item)} className="bg-[#F9D67E] rounded-full h-28 w-56 shadow-full">
          <h2>{item.product}</h2>
        </button>
      ))}
    </div>
  )
}
export default Menu