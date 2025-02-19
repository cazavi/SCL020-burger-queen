import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
// import {Timer} from "../components/Timer";

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
		axios
		.get('https://apiburgerqueenv1.herokuapp.com/orders', { headers })
			.then((response) => {
				console.log(response.data)
				setOrder(response.data.result);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	setInterval(() => {
		getOrder()
	}, 300000)

	console.log(order)
	const orderTable = (table) => order.filter(item => item.table === table && item.status !== "delivered")
	
	const status = (table) => {
		const result = orderTable(table);
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
					<button onClick={e => mesero ? 
						(orderTable('Mesa 01').length !=0 ? navigate("/preparing", { state: "Mesa 01" }): navigate("/order", { state: "Mesa 01" })) 
						: navigate("/preparing", { state: "Mesa 01" })} 
						className={`${status("Mesa 01")}`}> Mesa 01 
						{/* <Timer /> */}
						</button>

					<button onClick={e => mesero ?
						(orderTable('Mesa 02').length !=0 ? navigate("/preparing", { state: "Mesa 02" }): navigate("/order", { state: "Mesa 02" })) 
						: navigate("/preparing", { state: "Mesa 02" })} 
						className={`${status("Mesa 02")}`}> Mesa 02 </button>

					<button onClick={e => mesero ? 
						(orderTable('Mesa 03').length !=0 ? navigate("/preparing", { state: "Mesa 03" }): navigate("/order", { state: "Mesa 03" })) 
						: navigate("/preparing", { state: "Mesa 03" })} 
						className={`${status("Mesa 03")}`}> Mesa 03 </button>

					<button onClick={e => mesero ?
						(orderTable('Mesa 04').length !=0? navigate("/preparing", { state: "Mesa 04" }): navigate("/order", { state: "Mesa 04" })) 
						: navigate("/preparing", { state: "Mesa 04" })} 
						className={`${status("Mesa 04")}`}> Mesa 04 </button>

					<button onClick={e => mesero ? 
						(orderTable('Mesa 05').length !=0 ? navigate("/preparing", { state: "Mesa 05" }): navigate("/order", { state: "Mesa 05" })) 
						: navigate("/preparing", { state: "Mesa 05" })} 
						className={`${status("Mesa 05")}`}> Mesa 05 </button>
					
					<button onClick={e => mesero ? 
						(orderTable('Mesa 06').length !=0 ? navigate("/preparing", { state: "Mesa 06" }): navigate("/order", { state: "Mesa 06" })) 
						: navigate("/preparing", { state: "Mesa 06" })} 
						className={`${status("Mesa 06")}`}> Mesa 06 </button>
					
					<button onClick={e => mesero ? 
						(orderTable('Mesa 07').length !=0 ? navigate("/preparing", { state: "Mesa 07" }): navigate("/order", { state: "Mesa 07" })) 
						: navigate("/preparing", { state: "Mesa 07" })} 
						className={`${status("Mesa 07")}`}> Mesa 07 </button>
					
					<button onClick={e => mesero ? 
						(orderTable('Mesa 08').length !=0 ? navigate("/preparing", { state: "Mesa 08" }): navigate("/order", { state: "Mesa 08" })) 
						: navigate("/preparing", { state: "Mesa 08" })}
						className={`${status("Mesa 08")}`}> Mesa 08 </button>
					
					<button onClick={e => mesero ? 
						(orderTable('Mesa 09').length !=0 ? navigate("/preparing", { state: "Mesa 09" }): navigate("/order", { state: "Mesa 09" })) 
						: navigate("/preparing", { state: "Mesa 09" })}
						className={`${status("Mesa 09")}`}> Mesa 09 </button>
					
					<button onClick={e => mesero ? 
						(orderTable('Mesa 10').length !=0 ? navigate("/preparing", { state: "Mesa 10" }): navigate("/order", { state: "Mesa 10" })) 
						: navigate("/preparing", { state: "Mesa 10" })} 
						className={`${status("Mesa 10")}`}> Mesa 10 </button>
					
					<button onClick={e => mesero ? 
						(orderTable('Mesa 11').length !=0 ? navigate("/preparing", { state: "Mesa 11" }): navigate("/order", { state: "Mesa 11" })) 
						: navigate("/preparing", { state: "Mesa 11" })} 
						className={`${status("Mesa 11")}`}> Mesa 11 </button>
					
					<button onClick={e => mesero ? 
					(orderTable('Mesa 12').length !=0 ? navigate("/preparing", { state: "Mesa 12" }): navigate("/order", { state: "Mesa 12" })) 
					: navigate("/preparing", { state: "Mesa 12" })}
					className={`${status("Mesa 12")}`}> Mesa 12 </button>
				</div>
			</div>
		</div>
	)
}

export default Tables