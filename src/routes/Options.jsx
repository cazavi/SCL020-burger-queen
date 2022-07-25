// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Options = () => {
return(
    <div className="w-screen h-screen flex content-center items-center flex-col">
					<Navbar />
      <div className="w-screen h-screen justify-around items-center flex text-center font-Comfortaa">
          <button className="w-80 h-32 bg-green rounded-full text-5xl shadow-2xl" type="button">Cocina</button>
					<button className="w-80 h-32 bg-green rounded-full text-5xl shadow-2xl" type="button">Mesas</button>
      </div>
    </div>
  );
	};

export default Options;