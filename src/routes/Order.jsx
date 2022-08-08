import React, { useState, useEffect, useContext, useRef } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import CartOrder from "../components/CartOrder";
import ButtonKitchen from "../components/ButtonKitchen";
import { AppContext } from "../components/Provider";
import axios from "axios";
import {useNavigate, useLocation} from 'react-router-dom';



const Order = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.name);
    
    const context = useContext(AppContext);
    const cartProduct = context.cart;
    const [fMenu, setFMenu] = useState([]);
    const [pastas, setPastas] = useState(true)
    const [pizzas, setPizzas] = useState(false)
    const [bebidas, setBebidas] = useState(false)
    const [client, setClient] = useState({})

    const product = (cartProduct) => {
        let products = [];
        cartProduct.map(({ qty, product, price }) => {
            const item = { qty, product: product, price: price }
            products.push(item)
        })
        return products
    }

    const products = product(cartProduct)
    const data = { client, products }
    console.log(data)

    useEffect(() => {
        filterMenu("pasta")
    }, [context.menu])

    const handlePizzas = () => {
        setPizzas(true)
        setPastas(false)
        setBebidas(false)
    }
    const handlePastas = () => {
        setPizzas(false)
        setPastas(true)
        setBebidas(false)
    }
    const handleBebidas = () => {
        setPizzas(false)
        setPastas(false)
        setBebidas(true)
    }

    const filterMenu = (type) => {
        const result = context.menu.filter(item => item.type === type);
        setFMenu(result);
        if (type == 'pizza') {
            handlePizzas()
        } else if (type == 'pasta') {
            handlePastas()
        } else if (type == 'bebidas') {
            handleBebidas()
        }
    };

    const handleSendOrder = () => {
        let headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        console.log(headers)
        const body = data
        console.log(body)
        axios
        .post('https://apiburgerqueenv1.herokuapp.com/orders', body, { headers })
        .then((response) => {
            console.log(response);
            console.log(response.data.response._id);
        })
        .catch((err) => console.log(err.response.data));;
    }
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
            <div className="h-full pt-28 font-Comfortaa grid grid-cols-2">
                <div className="flex flex-col items-center">
                    <div>
                        <h1>{location.state.name}</h1>
                    </div>
                    <div className={localStorage.role == "mesero" ? "flex my-4" : "invisible"}>
                        <button className={pastas ? "button-type-on" : "button-type-off"} onClick={() => filterMenu("pasta")}>
                            Pastas
                        </button>
                        <button className={pizzas ? "button-type-on" : "button-type-off"} onClick={() => filterMenu("pizza")}>
                            Pizzas
                        </button>
                        <button className={bebidas ? "button-type-on" : "button-type-off"} onClick={() => filterMenu("bebidas")}>
                            Bebidas
                        </button>
                    </div>
                    <div className="flex justify-center w-11/12 h-4/6">
                        {localStorage.role == "mesero" ? <Menu menu={fMenu} /> : <ButtonKitchen />}
                    </div>
                    <div className="bg-[#B6CE55] flex my-4 h-16 w-5/6 items-end rounded-md">
                        <form onSubmit={e => { e.preventDefault(); setClient(e.target.client.value) }} className="flex">
                            <h1 className="mb-4 ml-4">cliente</h1>
                            <input type="text" name="client" placeholder="Nombre" autoComplete="off" className="mb-4 ml-4 bg-[#B6CE55]" />
                            <button type="submit">Guardar</button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-green w-96 h-5/6 flex rounded-md shadow-3xl flex-col ">
                        <CartOrder />
                    </div>
                    <div className={localStorage.role == "mesero" ? "flex my-4 h-16 items-end" : "invisible"}>
                        <button onClick={handleGetOrder} className="bg-[#D9BA3F] text-green-dark w-28 h-14 rounded-3xl mx-4 shadow-full">
                            Enviar
                        </button>
                        <button onClick={() => navigate("/tables")} className="bg-[#E6553C] text-[#FFFFFF] w-28 h-14 rounded-3xl mx-4 shadow-full">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
