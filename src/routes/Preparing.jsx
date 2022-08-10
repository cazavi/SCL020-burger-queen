import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";

const Preparing = () => {

    const { state } = useLocation();
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState();
    const [table, setTable] = useState(state)
    console.log(menu)
    console.log(order.products)
    console.log(table)

    useEffect(() => {
        getOrder()
    }, [])

    useEffect(() => {
        filterMenu(table)
    }, [menu])

    const getOrder = () => {
        let headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        fetch('https://apiburgerqueenv1.herokuapp.com/orders', { headers })
            .then((response) => response.json())
            .then((data) => {
                setMenu(data.result);
            });
    }
    const filterMenu = (table) => {
        const result = menu.filter(item => item.table === table && item.status !== null);
        setOrder(result[0]);
    };
    const totalProduct = () => {
        return order.reduce((previous, current) => previous + current.qty, 0)


    const handleGetOrder = () => {
        let headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        axios
        .get('https://apiburgerqueenv1.herokuapp.com/orders', { headers })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => console.log(err.response.data));;

    }

    return (
        <div className="w-full h-screen">
            <Navbar />
            <div className="h-full pt-32 font-Comfortaa grid grid-cols-2">
                <div className="flex flex-col items-center">
                    <div className="bg-green w-96 h-5/6 flex rounded-md shadow-3xl">
                        <div className="h-[32rem] overflow-y-auto">
                            {order.map((item, index) => (
                                <div key={index} className="flex w-56 mt-1.5 ">
                                    <p className="w-14 ml-4 flex ">{item.product}</p>
                                    <p className="w-10 ml-20 flex ">{item.qty}</p>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <div className="flex items-end justify-around mt-[auto] mb-2">
                            <p className="">Total:</p>
                            <p className="">{totalProduct()}</p>
                        </div>
                    </div>
                    <div className="bg-[#B6CE55] flex my-4 h-16 w-5/6 items-end rounded-md">
                        {order.map((item) => (
                            <h1 className="mt-4 mb-4 ml-4 bg-[#B6CE55]">Cliente: {item.client}</h1>
                            ))}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-evenly">
                    <button className="bg-[#F0983A] text-green-dark w-72 h-28 rounded-3xl shadow-full">Preparando</button>
                    <button className="bg-[#E6553C] text-green-dark w-72 h-28 rounded-3xl shadow-full">Cancelado</button>
                    <button className="bg-[#E0E2D4] text-green-dark w-72 h-28 rounded-3xl shadow-full">Listo</button>
                </div>
            </div>
        </div>
    )
}

export default Preparing