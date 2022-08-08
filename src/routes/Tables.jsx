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
					<button className="empty-table" type="button" name="Mesa01" onClick={e => navigate("/order", {state:{id:1,name:'Mesa 01'}})}> Mesa 01 </button>
					<button className="empty-table" type="button" name="Mesa02" onClick={e => navigate("/order", {state:{id:2,name:'Mesa 02'}})}> Mesa 02 </button>
					<button className="empty-table" type="button" name="Mesa03" onClick={e => navigate("/order", {state:{id:3,name:'Mesa 03'}})}> Mesa 03 </button>
					<button className="empty-table" type="button" name="Mesa04" onClick={e => navigate("/order", {state:{id:4,name:'Mesa 04'}})}> Mesa 04 </button>
					<button className="empty-table" type="button" name="Mesa05" onClick={e => navigate("/order", {state:{id:5,name:'Mesa 05'}})}> Mesa 05 </button>
					<button className="empty-table" type="button" name="Mesa06" onClick={e => navigate("/order", {state:{id:6,name:'Mesa 06'}})}> Mesa 06 </button>
					<button className="empty-table" type="button" name="Mesa07" onClick={e => navigate("/order", {state:{id:7,name:'Mesa 07'}})}> Mesa 07 </button>
					<button className="empty-table" type="button" name="Mesa08" onClick={e => navigate("/order", {state:{id:8,name:'Mesa 08'}})}> Mesa 08 </button>
					<button className="empty-table" type="button" name="Mesa09" onClick={e => navigate("/order", {state:{id:9,name:'Mesa 09'}})}> Mesa 09 </button>
					<button className="empty-table" type="button" name="Mesa11" onClick={e => navigate("/order", {state:{id:10,name:'Mesa 10'}})}> Mesa 10 </button>
					<button className="empty-table" type="button" name="Mesa11" onClick={e => navigate("/order", {state:{id:11,name:'Mesa 11'}})}> Mesa 11 </button>
					<button className="empty-table" type="button" name="Mesa12" onClick={e => navigate("/order", {state:{id:12,name:'Mesa 12'}})}> Mesa 12 </button>
				</div>
			</div>
		</div>
	)
}

export default Tables