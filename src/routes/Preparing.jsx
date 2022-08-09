import Navbar from "../components/Navbar";

const Preparing = () => {

    const handleGetOrder = () => {
        let headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        axios
        .get('https://apiburgerqueenv1.herokuapp.com/orders', { headers })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => console.log(err.response.data));;
    }

    return (
        <div className="w-full h-screen">
            <Navbar />
            <div className="h-full pt-32 font-Comfortaa grid grid-cols-2">
                <div className="flex flex-col items-center">
                    <div className="bg-green w-96 h-5/6 flex rounded-md shadow-3xl">
                        <h1>pedido</h1>
                    </div>
                    <div className="bg-[#B6CE55] flex my-4 h-16 w-5/6 items-end rounded-md">
                        <h1>cliente</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-evenly">
                    <button className="bg-[#F0983A] text-green-dark w-72 h-28 rounded-3xl shadow-full">Preparando</button>
                    <button className="bg-[#E6553C] text-green-dark w-72 h-28 rounded-3xl shadow-full">Cancelado</button>
                    <button className="bg-[#E0E2D4] text-green-dark w-72 h-28 rounded-3xl shadow-full">Listo</button>
                </div>
            </div>
        </div>
    )
}

export default Preparing