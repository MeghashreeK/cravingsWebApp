import ItemList from "./ItemList";
import downarrow from "../images/down-arrow.png";
import uparrow from "../images/up-arrow.png";


const RestaurantCategory = ({ data, showItems, setShowIndex, showIndex, arrowData}) => {

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div className="flex justify-center mt-2 sm:mt-0 cursor-pointer">
            <div className="w-full border-2 sm:w-6/12 sm:m-5 ">

                <div className="flex justify-between py-5" onClick={handleClick}>
                    <span className="px-3 font-bold">{data.title} ({data.itemCards.length})</span>
                    <span className="px-3">
                        {showItems ? <img src={uparrow} /> : <img src={downarrow} />}
                    </span>
                </div>
                {showItems && <ItemList items={data.itemCards} index={showIndex}/>}

            </div>
        </div>

    );
}
export default RestaurantCategory;