import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('')

	const navigate = useNavigate()
	const login = (user, password) =>{
			if(user === 'admin' && password === '123456')
			navigate('/options')
			else alert('login incorrecto');
	}
	return(
			<div className="bg-[url('./IMGS/BACKGROUND.jpg')] bg-cover w-full h-[820px] flex items-center flex-col font-Comfortaa">
					<picture className="my-16">
							<img alt='Logo' src='./IMGS/nonnaQueen.png'/>
					</picture>
					<div className='bg-green backdrop-blur-xl bg-opacity-70 max-w-md drop-shadow-lg rounded-xl px-10 pt-10 pb-10 text-center inline-block'>
							<form 
									onSubmit={ev =>{
											ev.preventDefault();
											login(user, password);
									
									}}
							>
									<label>Usuario</label>
									<input 
											className='bg-green-light rounded text-center block border-green-dark'
											type='text'
											name='user'
											placeholder='usuario'
											value={user}
											onChange={ev => setUser(ev.target.value)}
									></input>
									<label>Contraseña</label>
									<input 
											className='bg-green-light rounded text-center block border-green-dark'
											type='password'
											name='password'
											placeholder='contraseña'
											value={password}
											onChange={ev => setPassword(ev.target.value)}
											></input>
									<button className='bg-[#529A6B]  ml-auto mr-auto rounded-full block shadow-md mt-4 w-40 h-10 text-[#ffffff] text-bold border-green-dark border-2' type='submit'>Acceder</button>
							</form>
					</div>
			</div>
	);
}

export default Login