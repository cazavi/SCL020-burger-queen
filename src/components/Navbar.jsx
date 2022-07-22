import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
  <div  className="bg-green-dark inline-block w-full h-28  m-0 p-0 fixed">
    <img src='./public/LOGO.svg'/>
    <div onClick={handleNav}>
      {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
    </div>
			<div className={!nav ? 'flex flex-col justify-between px-4 mx-auto p-5 fixed right-0 top-0 w-[30%] h-full border-r border-r-green-dark bg-[#B6CE55] ease-in-out duration-300' : 'fixed right-[-100%]'}>
        <ul className="pt-24 uppercase">
          <li>
            <NavLink to="/kitchen" className='block rounded p-5 border-b bg-[#F0CE46] border-r-green-dark'>Cocina</NavLink>
          </li>
          <li>
            <NavLink to="/tables" className='block rounded p-5 border-b bg-[#F0CE46] border-r-green-dark'>Mesas</NavLink>
          </li>
          <li>
            <NavLink to="/info"className='block rounded p-5 border-b bg-[#F0CE46] border-r-green-dark'>Iconografía</NavLink>
          </li>
          <li>
            <NavLink to="/"className='block rounded p-5 border-b bg-[#D13C36] border-r-green-dark'>Cerrar Sesión</NavLink>
          </li>
        </ul>
      </div>
  </div>
  )
};

export default Navbar;
