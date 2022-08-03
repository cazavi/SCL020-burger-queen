import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Tables = () => {
	const navigate = useNavigate();
	return (
		<div className="w-full h-screen">
			<Navbar />
			<div className="h-full pt-28 font-Comfortaa">
				<h1 className="text-[#B9C48B] text-5xl pl-3.5 py-2.5 h-20 grid justify-items-center">Mesas</h1>
				<div className="grid grid-cols-4 grid-rows-3 gap-y-14 justify-items-center text-3xl text-[#3F4F00]">
					<button className="empty-table" type="button" onClick={e => navigate("/order")}> Mesa 01 </button>
					<button className="empty-table"> Mesa 02 </button>
					<button className="empty-table"> Mesa 03 </button>
					<button className="empty-table"> Mesa 04 </button>
					<button className="empty-table"> Mesa 05 </button>
					<button className="empty-table"> Mesa 06 </button>
					<button className="empty-table"> Mesa 07 </button>
					<button className="empty-table"> Mesa 08 </button>
					<button className="empty-table"> Mesa 09 </button>
					<button className="empty-table"> Mesa 10 </button>
					<button className="empty-table"> Mesa 11 </button>
					<button className="empty-table"> Mesa 12 </button>
				</div>
			</div>
		</div>
	)
}

export default Tables