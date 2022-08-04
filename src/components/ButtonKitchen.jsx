
function ButtonKitchen() {
    return (
        <div className="font-Comfortaa grid grid-cols-2 gap-8 my-8">
            <button className="bg-[#F0983A] rounded-full h-28 w-56 shadow-full">
                <h2>Preparando</h2>
            </button>
            <button className="bg-[#E6553C] rounded-full h-28 w-56 shadow-full">
                <h2>Cancelado</h2>
            </button>
            <button className="bg-[#8FEB95] rounded-full h-28 w-56 shadow-full">
                <h2>Listo</h2>
            </button>
        </div>
    )
}
export default ButtonKitchen