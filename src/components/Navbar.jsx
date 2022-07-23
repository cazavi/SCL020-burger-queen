import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import {CgMenuRound, CgCloseO} from "react-icons/cg"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  // pt-[0px] h-full w-full  pl-[1100px] 
  return (
  <div  className="bg-green-dark inline-block w-full h-28  m-0 p-0 fixed">
    {/* <img src='./public/LOGO.svg' className="pt-3.5 pl-2.5 h-28 w-28"/> */}
    <div onClick={handleNav} className=" flex justify-between pr-2 pt-3.5 h-28 w-full"> 
    <img src='./public/LOGO.svg' className="flex pl-2 pt-0 h-28 w-28"></img>
      {!nav ? <CgCloseO color="#D13C36"size={70} /> : <CgMenuRound color="#D13C36" size={70} />}
    </div>
			<div className={!nav ? 'px-4 mx-auto p-5 fixed right-0 top-0 w-[30%] h-full border-r border-r-green-dark bg-[#B6CE55] ease-in-out duration-300' : 'fixed right-[-100%]'}>
        <ul className="pt-24 uppercase">
          <li>
            <NavLink to="/kitchen" className='block rounded m-2.5 p-5 border-b bg-[#F0CE46] border-r-green-dark'>Cocina</NavLink>
          </li>
          <li>
            <NavLink to="/tables" className='block rounded m-2.5 p-5 border-b bg-[#F0CE46] border-r-green-dark'>Mesas</NavLink>
          </li>
          <li>
            <NavLink to="/info"className='block rounded m-2.5 p-5 border-b bg-[#F0CE46] border-r-green-dark'>Iconografía</NavLink>
          </li>
          <li>
            <NavLink to="/"className='block rounded mt-96 m-2.5 p-5 border-b bg-[#D13C36] border-r-green-dark'>Cerrar Sesión</NavLink>
          </li>
        </ul>
      </div>
  </div>
  )
};

export default Navbar;
