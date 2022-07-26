import Navbar from "../components/Navbar";

const Order = () => {
    return (
        <div className="w-full h-screen">
            <Navbar />
            <div className="h-full pt-28 font-Comfortaa grid grid-cols-2">
                <div  className="flex flex-col items-center">
                    <div>
                        <h1>posible boton mesa</h1>
                    </div>
                    <div className="flex my-4">
                        <button className="bg-[#B1B5A5] text-[#9E2D29] w-28 h-14 rounded-3xl mx-4 shadow-full">Enviar</button>
                        <button className="bg-[#B1B5A5] text-[#9E2D29] w-28 h-14 rounded-3xl mx-4 shadow-full">Cancelar</button>
                        <button className="bg-[#B1B5A5] text-[#9E2D29] w-28 h-14 rounded-3xl mx-4 shadow-full">Cancelar</button>
                    </div>
                    <div className="bg-[#F9D67E] flex w-11/12 h-4/6">
                        <h1>menu</h1>
                    </div>
                    <div className="bg-[#B6CE55] flex my-4 h-16 w-5/6 items-end rounded-md">
                        <h1>cliente</h1>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="bg-green w-96 h-5/6 flex rounded-md shadow-3xl">
                        <h1>pedido</h1>
                    </div>
                    <div className="flex my-4 h-16 items-end"> 
                        <button className="bg-[#D9BA3F] text-green-dark w-28 h-14 rounded-3xl mx-4 shadow-full">Enviar</button>
                        <button className="bg-[#E6553C] text-[#FFFFFF] w-28 h-14 rounded-3xl mx-4 shadow-full">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;