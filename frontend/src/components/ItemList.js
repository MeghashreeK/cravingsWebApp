import { useState, useEffect } from "react";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import veg from "../images/veg.png";
import nonveg from "../images/nonveg.png";

const ItemList = ({ items}) => {
    const [itemState, setItemState] = useState([])
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    useEffect(() => {
        const filteredItems = items.map(cartItem => {
            const filterCount = cartItems.find(item => item.card.info.id === cartItem.card.info.id && item.count);
            // console.log(filterCount);

            if (filterCount) {
                return filterCount;
            }
            return cartItem;

        });
        setItemState(filteredItems);

    }, [])


    const handleAddItem = (item) => {

        const index = itemState.findIndex(innerData => innerData.card.info.id === item.card.info.id);

        if (index !== -1) {
            const updatedItems = [...itemState];
            if (!updatedItems[index].count) {
                updatedItems[index] = { ...updatedItems[index], count: 1 };
            } else {
                updatedItems[index] = { ...updatedItems[index], count: updatedItems[index].count + 1 };
            }
            setItemState(updatedItems);
            dispatch(addItem(updatedItems[index]))
        }


    }

    const subQuantity = (item) => {
        const index = itemState.findIndex(innerData => innerData.card.info.id === item.card.info.id);

        if (index !== -1) {
            const updatedItems = [...itemState];
            if (updatedItems[index].count > 1) {
                updatedItems[index] = { ...updatedItems[index], count: updatedItems[index].count - 1 };

            } else {
                updatedItems[index] = { ...updatedItems[index] };
                delete updatedItems[index].count;
            }
            setItemState(updatedItems);
            dispatch(removeItem(updatedItems[index]))
        }
    }
   
    return (
        <div>
            { itemState.map((item,index) => <div data-testid="foodItems" key={item.card.info.id}>
                <div className={`flex gap-10 pl-4 pr-4 mb-8 ${index === itemState.length - 1 ? '' : 'border-b-2'}`}>
                    <div className="flex flex-col items-start w-9/12 gap-1 mb-8">
                        <span>{item.card.info.itemAttribute.vegClassifier === "VEG" ? <img className="h-5 w-5" src={veg} alt="veg" /> : <img className="h-5 w-5" src={nonveg} alt="veg" />}</span>
                        <span>{item.card.info.name}</span>
                        <span> ₹{((item.card.info.price || item.card.info.defaultPrice) / 100)}</span>
                        <p className="text-gray-400 text-left mb-2">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 flex flex-col items-center" >
                        <img className="object-cover h-28 w-36 rounded-lg" src={CDN_URL + item.card.info.imageId} />
                        {!item.count && (<button className="border px-3 sm:px-5 rounded-lg bg-orange-400 " onClick={() => { handleAddItem(item) }}>Add+</button>)}

                        {item.count &&
                            (<div className="border border-orange-400 px-2 rounded-lg">
                                <button className="px-5" onClick={() => subQuantity(item)}>-</button>
                                {item.count}
                                <button className="px-5" onClick={() => handleAddItem(item)}>+</button>
                            </div>)}

                    </div>
                </div>
            </div>)}
         
        </div>

    );
}
export default ItemList;


