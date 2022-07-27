import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

const Order = () => {

        const [menu, setMenu] = useState([])
        const [fMenu, setFMenu] = useState([])
      
        useEffect(() =>{
          fetch("src/menu.json")
          .then(response => response.json())
          .then(data => {
            setMenu(data)
            filterMenu('pasta')
          })
        }, [])
    
        const filterMenu = (type)=>{
            const result= menu.filter(item => item.type === type);
            setFMenu(result)
        }
        
        
    
    return (
        <div className="w-full h-screen">
            <Navbar />
            <div className="h-full pt-28 font-Comfortaa grid grid-cols-2">
                <div  className="flex flex-col items-center">
                    <div>
                        <h1>posible boton mesa</h1>
                    </div>
                    <div className="flex my-4">
                        <button className="bg-[#B1B5A5] text-[#9E2D29] w-28 h-14 rounded-3xl mx-4 shadow-full" onClick={() =>filterMenu('pasta')} >Pastas</button>
                        <button className="bg-[#B1B5A5] text-[#9E2D29] w-28 h-14 rounded-3xl mx-4 shadow-full" onClick={() =>filterMenu('pizza')}>Pizzas</button>
                        <button className="bg-[#B1B5A5] text-[#9E2D29] w-28 h-14 rounded-3xl mx-4 shadow-full" onClick={() =>filterMenu('bebidas')}>Bebestibles</button>
                    </div>
                    <div className="flex justify-center w-11/12 h-4/6">
                        <Menu menu={fMenu} />
                    </div>
                    <div className="bg-[#B6CE55] flex my-4 h-16 w-5/6 items-end rounded-md">
                        <h1>cliente</h1>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="bg-green w-96 h-5/6 flex rounded-md shadow-3xl">
                        <h1>pedido</h1>
                    </div>
                    <div className="flex my-4 h-16 items-end"> 
                        <button className="bg-[#D9BA3F] text-green-dark w-28 h-14 rounded-3xl mx-4 shadow-full">Enviar</button>
                        <button className="bg-[#E6553C] text-[#FFFFFF] w-28 h-14 rounded-3xl mx-4 shadow-full">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;