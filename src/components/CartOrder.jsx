import React, { useContext } from "react";
import { AppContext } from "./Provider";
import { RiDeleteBin2Fill } from "react-icons/ri"

function CartOrder({ menu }) {
    const context = useContext(AppContext);
    const cartProduct = context.cart;
    const deleteButton = context.deleteItem;
    

    const totalPrice = () => {
        let PriceTotal = 0;
        cartProduct.map((item) => {
            PriceTotal += (item.qty * item.price)
        })
        return PriceTotal;
    }
    const totalProduct = () => {
        return cartProduct.reduce((previous, current) => previous + current.qty, 0)
    }

    return (
        <>
            <div className="h-[32rem] overflow-y-auto">
                {cartProduct.map((item, index) => (
                    <div key={index} className="flex w-56 mt-1.5 ">
                        <button> <RiDeleteBin2Fill className="ml-2" color="#E6553C" size={40} onClick={() => deleteButton(item)} /></button>
                        <p className="w-14 ml-4 flex ">{item.product}</p>
                        <p className="w-10 ml-20 flex ">{item.qty}</p>
                        <p className="w-10 ml-20 flex font-extrabold">{item.totalPrice}</p>
                    </div>
                ))}
            </div>
            <hr />
            <div className="flex items-end justify-around mt-[auto] mb-2">
                <p className="">Total:</p>
                <p className="">{totalProduct()}</p>
                <p className={localStorage.role == "mesero"? "flex":"invisible"}>${totalPrice()}</p>
            </div>
        </>
    )
}
export default CartOrder