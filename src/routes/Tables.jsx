import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Tables = () => {
  return (
		<div className="w-full h-screen">
			<Navbar />
        <div className="h-full pt-28 font-Comfortaa">
          <h1 className="text-[#B9C48B] text-5xl pl-3.5 py-2.5 h-20 grid justify-items-center">Mesas</h1>
        	<div className="grid grid-cols-4 grid-rows-3 gap-y-14 justify-items-center text-3xl text-[#3F4F00]">
						<button className="bg-[#E0E2D4] w-56 h-36 rounded-3xl shadow-xl active:bg-[#9E2D29]"> Mesa 01 </button> 
						<button className="bg-[#E0E2D4] w-56 h-36 rounded-3xl shadow-xl active:bg-[#9E2D29]"> Mesa 02 </button> 
						<button className="bg-[#E0E2D4] w-56 h-36 rounded-3xl shadow-xl active:bg-[#9E2D29]"> Mesa 03 </button> 
						<button className="bg-[#E0E2D4] w-56 h-36 rounded-3xl shadow-xl active:bg-[#9E2D29]"> Mesa 04 </button> 
						<button className="bg-[#E0E2D4] w-56 h-36 rounded-3xl shadow-xl active:bg-[#9E2D29]"> Mesa 05 </button> 
						<button className="bg-[#E0E2D4] w-56 h-36 rounded-3xl shadow-xl active:bg-[#9E2D29]"> Mesa 06 </button> 
						<button className="bg-[#E0E2D4] w-56 h-36 rounded-3xl shadow-xl active:bg-[#9E2D29]"> Mesa 07 </button> 
						<button className="bg-[#E0E2D4] w-56 h-36 rounded-3xl shadow-xl active:bg-[#9E2D29]"> Mesa 08 </button> 
						<button className="bg-[#E0E2D4] w-56 h-36 rounded-3xl shadow-xl active:bg-[#9E2D29]"> Mesa 09 </button> 
						<button className="bg-[#E0E2D4] w-56 h-36 rounded-3xl shadow-xl active:bg-[#9E2D29]"> Mesa 10 </button> 
						<button className="bg-[#E0E2D4] w-56 h-36 rounded-3xl shadow-xl active:bg-[#9E2D29]"> Mesa 11 </button> 
						<button className="bg-[#E0E2D4] w-56 h-36 rounded-3xl shadow-xl active:bg-[#9E2D29]"> Mesa 12 </button> 
					</div>
        </div>
		</div>
  )
}

export default Tables