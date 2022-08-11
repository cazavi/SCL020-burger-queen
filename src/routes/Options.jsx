import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Options = () => {
  const navigate = useNavigate();

return(
    <div className="w-screen h-screen flex content-center items-center flex-col">
					<Navbar />
      <div className="w-screen h-screen justify-around items-center flex text-center font-Comfortaa">
          <button className="w-80 h-32 bg-green rounded-full text-5xl shadow-full active:bg-[#9E2D29]" type="button" w>Administrar usuarios</button>
					<button className="w-80 h-32 bg-green rounded-full text-5xl shadow-full active:bg-[#9E2D29]" type="button" onClick={e => navigate("/tables")}>Ver pedidos</button>
      </div>
    </div>
  );
	};

export default Options;