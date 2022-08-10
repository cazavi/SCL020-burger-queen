import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const Tables = () => {
	const [order, setOrder] = useState([]);
	const navigate = useNavigate();
	const mesero = localStorage.role == "mesero"

	useEffect(() => {
		getOrder()
	}, [])

	const getOrder = () => {
		let headers = {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
		fetch('https://apiburgerqueenv1.herokuapp.com/orders', { headers })
			.then((response) => response.json())
			.then((data) => {
				setOrder(data.result);
			});
	}
	setInterval(() => {
		getOrder()
	}, 50000)

	const status = (table) => {
		const result = order.filter(item => item.table === table && item.status !== null);
		if (result.length == 0) {
			const style = "empty-table"
			return style
		} else {
			return result.map((item) => {
				if (item.status === "pending") {
					const style = "order-made"
					return style
				} else {
					const style = "empty-table"
					return style
				}
			})
		}
	}

	return (
		<div className="w-full h-screen">
			<Navbar />
			<div className="h-full pt-28 font-Comfortaa">
				<h1 className="text-[#B9C48B] text-5xl pl-3.5 py-2.5 h-20 grid justify-items-center">Mesas</h1>
				<div className="grid grid-cols-4 grid-rows-3 gap-y-14 justify-items-center text-3xl text-[#3F4F00]">
					<button onClick={e => mesero ? navigate("/order", { state: "Mesa 01" }) : navigate("/preparing", { state: "Mesa 01" })} className="empty-table"> Mesa 01 </button>
					<button onClick={e => mesero ? navigate("/order", { state: "Mesa 02" }) : navigate("/preparing", { state: "Mesa 02" })} className="empty-table"> Mesa 02 </button>
					<button onClick={e => mesero ? navigate("/order", { state: "Mesa 03" }) : navigate("/preparing", { state: "Mesa 03" })} className="empty-table"> Mesa 03 </button>
					<button onClick={e => mesero ? navigate("/order", { state: "Mesa 04" }) : navigate("/preparing", { state: "Mesa 04" })} className="empty-table"> Mesa 04 </button>
					<button onClick={e => mesero ? navigate("/order", { state: "Mesa 05" }) : navigate("/preparing", { state: "Mesa 05" })} className="empty-table"> Mesa 05 </button>
					<button onClick={e => mesero ? navigate("/order", { state: "Mesa 06" }) : navigate("/preparing", { state: "Mesa 06" })} className={`${status("Mesa 06")}`}> Mesa 06 </button>
					<button onClick={e => mesero ? navigate("/order", { state: "Mesa 07" }) : navigate("/preparing", { state: "Mesa 07" })} className="empty-table"> Mesa 07 </button>
					<button onClick={e => mesero ? navigate("/order", { state: "Mesa 08" }) : navigate("/preparing", { state: "Mesa 08" })} className="empty-table"> Mesa 08 </button>
					<button onClick={e => mesero ? navigate("/order", { state: "Mesa 09" }) : navigate("/preparing", { state: "Mesa 09" })} className="empty-table"> Mesa 09 </button>
					<button onClick={e => mesero ? navigate("/order", { state: "Mesa 10" }) : navigate("/preparing", { state: "Mesa 10" })} className="empty-table"> Mesa 10 </button>
					<button onClick={e => mesero ? navigate("/order", { state: "Mesa 11" }) : navigate("/preparing", { state: "Mesa 11" })} className="empty-table"> Mesa 11 </button>
					<button onClick={e => mesero ? navigate("/order", { state: "Mesa 12" }) : navigate("/preparing", { state: "Mesa 12" })} className={`${status("Mesa 12")}`}> Mesa 12 </button>
				</div>
			</div>
		</div>
	)
}

export default Tables