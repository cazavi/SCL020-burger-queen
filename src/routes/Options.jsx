import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const Options = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }

    axios
      .get('https://apiburgerqueenv1.herokuapp.com/', { headers })
      .then((response)=> {
        console.log(response.data)
      })
      .catch((error)=> {
        console.log(error)
      })

  }, [])


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