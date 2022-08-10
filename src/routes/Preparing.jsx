import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";
import ButtonKitchen from "../components/ButtonKitchen";
import axios from "axios";

const Preparing = () => {

    const { state } = useLocation();
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState();
    const [table, setTable] = useState(state)
    const chef = localStorage.role == "chef"

    console.log(menu)
    console.log(order)
    console.log(table)

    useEffect(() => {
        handleGetOrder()
    }, [])

    useEffect(() => {
        filterMenu(table)
    }, [menu])

    const filterMenu = (table) => {
        const result = menu.filter(item => item.table === table && item.status !== null);
        setOrder(result[0]);
    };

    const totalProduct = () => {
        order != null ?
        order.products.reduce((previous, current) => previous + current.qty, 0) : 0
    }

    const handleGetOrder = () => {
        let headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        axios
        .get('https://apiburgerqueenv1.herokuapp.com/orders', { headers })
        .then((response) => {
            console.log(response.data)
            setMenu(response.data.result);
        })
        .catch((err) => console.log(err.response));;
    }

    const handleDeleteOrder = () => {
        let headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        axios
        .delete('https://apiburgerqueenv1.herokuapp.com/orders/62f41f59090b35d370a94b18', { headers })
        .then((response) => {
            console.log(response)
        })
        .catch((err) => console.log(err.response));;
    }

    return (
        <div className="w-full h-screen">
            <Navbar />
            <div className="h-full pt-32 font-Comfortaa grid grid-cols-2">
                <div className="flex flex-col items-center">
                    <div className="bg-green w-96 h-5/6 flex rounded-md shadow-3xl">
                        <div className="h-[32rem] overflow-y-auto">
                            {order!=null ? order.products.map((item, index) => (
                                <div key={index} className="flex w-56 mt-1.5 ">
                                    <p className="w-14 ml-4 flex ">{item.product}</p>
                                    <p className="w-10 ml-20 flex ">{item.qty}</p>
                                </div>
                            )) : <h2>'CARGANDO ORDEN'</h2>}
                            
                        </div>
                        <hr />
                        <div className="flex items-end justify-around mt-[auto] mb-2">
                            <p className="">Total:</p>
                            <p className="">{totalProduct()}</p>
                        </div>
                    </div>
                    <div className="bg-[#B6CE55] flex my-4 h-16 w-5/6 items-end rounded-md">
                            <h1 className="mt-4 mb-4 ml-4 bg-[#B6CE55]">Cliente: {order != null ? order.client : 'nombre'}</h1>
                    </div>
                </div>
                {chef ? <ButtonKitchen/> :
                    <div className="flex flex-col items-center justify-evenly">
                        <button onClick={(e)=>handleDeleteOrder()} className="bg-[#E6553C] text-green-dark w-72 h-28 rounded-3xl shadow-full">Cancelado</button>
                        <button className="bg-[#E0E2D4] text-green-dark w-72 h-28 rounded-3xl shadow-full">Listo</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Preparing