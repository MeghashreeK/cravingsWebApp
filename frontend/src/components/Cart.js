import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import veg from "../images/veg.png";
import nonveg from "../images/nonveg.png";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.png";
import info from "../images/information.png";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleAddItem = (item) => {

        const index = cartItems.findIndex(innerData => innerData.card.info.id === item.card.info.id);

        if (index !== -1) {
            dispatch(addItem(cartItems[index]))
        }


    }


    const subQuantity = (item) => {
        const index = cartItems.findIndex(innerData => innerData.card.info.id === item.card.info.id);

        if (index !== -1) {
            dispatch(removeItem(cartItems[index]))
        }
    }

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += (item.card.info.price || item.card.info.defaultPrice) * item.count;
        });
        return totalPrice / 100; 
    }

    // console.log(cartItems.length);

    return (
        <div className="flex flex-col justify-center  items-center mt-5 min-h-screen ">
            <div className="flex justify-center w-full px-2 sm:px-0 sm:w-6/12 flex-grow">
                {cartItems.length === 0 ? (
                    <div className="flex flex-col justify-center items-center gap-5">
                        <img className="sm:w-6/12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Cart Empty" />
                        <div className="flex text-center"><p className="font-Montserrat italic text-black">Looks like your cart is on a diet! Let's feed it with some delicious delights!</p></div>
                        <Link to="/restaurants"><button className="border-2 font-Montserrat border-orange-400 text-orange-600 sm:h-8 w-70 px-10 rounded-lg justify-center items-center hover:bg-orange-600 hover:text-white" >Add Your Favourite Food!</button></Link>
                    </div>) : (
                    <div>
                        {cartItems.map((item) =>
                            <div data-testid="foodItems" key={item.card.info.id}>
                                <div className="flex gap-10 pl-4 pr-4 mb-8 border-b-2">
                                    <div className="flex flex-col items-start w-9/12 gap-1">
                                        <span>{item.card.info.itemAttribute.vegClassifier === "VEG" ? <img className="h-5 w-5" src={veg} alt="veg" /> : <img className="h-5 w-5" src={nonveg} alt="veg" />}</span>
                                        <span>{item.card.info.name}</span>
                                        <span> ₹{((item.card.info.price || item.card.info.defaultPrice) / 100)}</span>
                                        <p className="text-gray-400 text-left mb-2">{item.card.info.description}</p>
                                    </div>
                                    <div className="w-3/12 flex flex-col items-center" >
                                        <img className="object-cover h-28 w-36 rounded-lg" src={CDN_URL + item.card.info.imageId} />
                                        {!item.count && (<button className="border px-3 sm:px-5 rounded-lg bg-orange-400 " onClick={() => { handleAddItem(item) }}>Add+</button>)}

                                        {item.count &&
                                            (<div className="border border-orange-400 px-2 rounded-lg text-center flex">
                                                <button className="px-5" onClick={() => subQuantity(item)}>-</button>
                                                {item.count} 
                                                <button className="px-5" onClick={() => handleAddItem(item)}>+</button>
                                            </div>)}

                                    </div>
                                </div>
                            </div>)}
                        <div className="flex flex-col gap-3 px-4">
                            <h1 className="">Bill Details:</h1>
                            <div className="flex justify-between">
                                <span>Item Total</span>
                                <span>₹{calculateTotalPrice()}</span>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-1 justify-center items-center">
                                    <h1>Delivery Fee</h1>
                                    <img className="w-4 h-4" src={info} alt="info" />
                                </div>
                                <h1>₹40</h1>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-1 justify-center items-center">
                                    <h1>Platform Fee</h1>
                                    <img className="w-4 h-4" src={info} alt="info" />
                                </div>
                                <div className="flex">
                                    <h1>₹</h1>
                                    <h1 className="line-through text-gray-400 mr-1">5.00</h1>
                                    <h1>4</h1>
                                </div>
                            </div>
                            <div className="flex justify-between border-b-4">
                                <div className="flex justify-center items-center mb-2 gap-1">
                                    <h1>GST & Restaurant Charges</h1>
                                </div>
                                <h1>₹42</h1>
                            </div>
                            <div className="flex justify-between">
                                <span>Total</span>
                                <span>₹{calculateTotalPrice() + 40 + 4 + 42}</span>
                            </div>
                            <div className="flex gap-5">
                                <Link to="/login"><button className="bg-orange-500 px-2 rounded-lg hover:bg-orange-400 mb-5">Pay Now</button></Link>
                                <button className="bg-orange-500 px-2 rounded-lg hover:bg-orange-400 mb-5" onClick={handleClearCart}>Clear Cart</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex bg-black h-32 justify-center items-center sm:h-16 w-full">
                <div className="flex gap-5 sm:gap-8">
                    <Link to="https://www.linkedin.com/in/meghashree-kunder-017166288/"><img className="w-8 h-8" src={linkedin} /></Link>
                    <Link to="https://github.com/MeghashreeK"><img className="w-8 h-8" src={github} /></Link>
                </div>
            </div>
        </div>
    );
}
export default Cart;
