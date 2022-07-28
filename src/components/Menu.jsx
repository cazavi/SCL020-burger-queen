import React, {useRef, useContext} from "react";
import {AppContext} from './Provider'

function Menu({menu}){
  const ticket = () => {
    let product = useRef(null);
    const [state, setState] = useContext(AppContext);

    return (<input type='text' ref={product} 
    onChange={()=>{setState({name:product.current.value})}} />
    );
  }
  
  return (
    <div className="font-Comfortaa grid grid-cols-2 gap-8 my-8">
      {menu.map(item => (
        <button key={item.id} className="bg-[#F9D67E] rounded-full h-28 w-56 shadow-full">
          <h2>{item.name}</h2>
          <h3 className="hidden">{item.cost}</h3>
        </button>
      ))}
    </div>
  )
}

export default Menu