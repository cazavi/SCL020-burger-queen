import React, {useState} from "react";
import Navbar from "../components/Navbar";

const Iconography = () => {
  return (
		<div className="w-full h-screen">
			<Navbar />
        <div className="h-full pt-28 font-Comfortaa">
          <h1 className="text-[#B9C48B] text-5xl pl-3.5 py-2.5 h-20 grid justify-items-center">ICONOGRAFÍA</h1>
        	<div className="grid grid-cols-2 grid-rows-3 gap-y-14 justify-items-center text-3xl text-[#3F4F00]">
						<button className="bg-[#D9BA3F] w-64 h-36 rounded-3xl shadow-xl"> PEDIDO HECHO </button> 
						<button className="bg-[#F0983A] w-64 h-36 rounded-3xl shadow-xl"> EN PREPARACIÓN </button> 
						<button className="bg-[#E6553C] w-64 h-36 rounded-3xl shadow-xl"> PEDIDO CANCELADO </button> 
						<button className="bg-[#8FEB95] w-64 h-36 rounded-3xl shadow-xl"> PEDIDO LISTO </button> 
						<button className="border-[#8FEB95] text-[#8FEB95] w-64 h-36 rounded-3xl shadow-xl border-8 border-dashed"> PEDIDO ENTREGADO </button> 
						<button className="border-[#D9BA3F] text-[#D9BA3F] w-64 h-36 rounded-3xl shadow-xl border-8 border-dashed"> SIN PEDIDO </button> 
					</div>
        </div>
		</div>
  )
};

export default Iconography;