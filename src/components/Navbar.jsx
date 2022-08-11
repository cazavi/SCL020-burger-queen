import React, {useState, useEffect} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {CgMenuRound, CgCloseO} from "react-icons/cg"
import axios from "axios";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem("email");
    navigate('/');
  };

  useEffect(() => {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    axios
      .get('https://apiburgerqueenv1.herokuapp.com/', { headers })
      .then((response)=> {
        console.log(response.data)
      })
      .catch((error)=> {
        console.log(error)
      })
  }, [])
  
  const user = window.localStorage.email;

  return (
  <div  className=" inline-block w-full h-28  m-0 p-0 fixed font-Comfortaa text-center">
    <div onClick={handleNav} className=" flex justify-between pr-2 pt-3.5 h-28 w-full"> 
    <img src='./public/nonna-queen.svg' className="flex pl-2 pt-0 h-28 w-28"></img>
      {nav ? <CgCloseO className="fixed right-96"color="#D13C36"size={70} /> : <CgMenuRound color="#D13C36" size={70} />}
    </div>
			<div className={nav ? 'px-4 mx-auto p-5 fixed right-0 top-0 w-[30%] h-full border-r border-r-green-dark bg-[#B6CE55] ease-in-out duration-300' : 'fixed right-[-100%]'}>
        <ul className="pt-20 uppercase">
        <div className="py-3 px-4">
          <span className="block text-sm font-bold text-gray-500 truncate ">{user}</span>
        </div>
          <li>
            <NavLink to="/kitchen" className='block rounded m-2.5 p-5 shadow-xl border-b bg-[#F0CE46] border-r-green-dark active:bg-[#9E2D29]'>Cocina</NavLink>
          </li>
          <li>
            <NavLink to="/tables" className='block rounded m-2.5 p-5 shadow-xl border-b bg-[#F0CE46] border-r-green-dark active:bg-[#9E2D29]'>Mesas</NavLink>
          </li>
          <li>
            <NavLink to="/iconography"className='block rounded m-2.5 p-5 shadow-xl border-b bg-[#F0CE46] border-r-green-dark active:bg-[#9E2D29]'>Iconografía</NavLink>
          </li>
          <li>
          <button className='block rounded center w-80 mt-80 m-auto p-5 shadow-2xl border-b bg-[#D13C36] border-r-green-dark active:bg-[#9E2D29]' type="submit"
      onClick={handleLogout}>Cerrar Sesión</button>
          </li>
        </ul>
      </div>
  </div>
  )
};

export default Navbar;
