import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const handleChange = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
		.post("https://apiburgerqueenv1.herokuapp.com/auth", {
			email: user.email, 
			password: user.password, 
		})
		.then((response) => {
			console.log(response.data);
			localStorage.setItem("token", response.data.token);
			localStorage.setItem("role", response.data.data.role.description);
			localStorage.setItem("email", response.data.data.email);
			response = navigate("/options"); 
		})

		.catch((err) => console.log(err));
	};
	return(
			<div className="bg-[url('./IMGS/BACKGROUND.jpg')] bg-cover w-full h-[820px] flex items-center flex-col font-Comfortaa">
					<picture className="my-16">
							<img alt='Logo' src='./IMGS/nonna queen.png'/>
					</picture>
					<div className='bg-green backdrop-blur-xl bg-opacity-70 max-w-md drop-shadow-lg rounded-xl px-10 pt-10 pb-10 text-center inline-block'>
							<form 
									onSubmit={handleSubmit}
							>
									<label htmlFor="email">Usuario</label>
									<input 
											className='bg-green-light rounded text-center block border-green-dark'
											type='email'
											name='email'
											id='email'
											placeholder='usuario'
											onChange={handleChange}
									></input>
									<label htmlFor="password">Contraseña</label>
									<input 
											className='bg-green-light rounded text-center block border-green-dark'
											id='password'
											type='password'
											name='password'
											placeholder='contraseña'
											onChange={handleChange}
											></input>
									<button className='bg-[#529A6B]  ml-auto mr-auto rounded-full block shadow-md mt-4 w-40 h-10 text-[#ffffff] text-bold border-green-dark border-2' type='submit'>Acceder</button>
							</form>
					</div>
			</div>
	);
}

export default Login