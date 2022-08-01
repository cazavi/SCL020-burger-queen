import React, { useContext } from "react";

function Menu({menu}){
  
  return (
    <div className="font-Comfortaa grid grid-cols-2 gap-8 my-8">
      {menu.map(item => (
        <button key={item.id} className="bg-[#F9D67E] rounded-full h-28 w-56 shadow-full">
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  )
}
export default Menu