import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerBody from "./ShimmerBody";
import { Link } from "react-router-dom";
import { withPromotedLabel } from "./RestaurantCard";
import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.png";
import ErrorAPI from "./ErrorAPI";
import NoResultFound from "./NoResultFound";



const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [errorElement, setErrorElement] = useState(false);
    const [searchResult,setSearchResult]=useState(false);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => { fetchData() }, [])

    const fetchData = async () => {
        try {
            // const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const data = await fetch("https://cravingsproxyserver.onrender.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            // const data = await fetch("http://localhost:8080/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            setSearchResult(false);
            setlistOfRestaurant(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfilteredRestaurant(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch (error) {
            console.error("Failed to fetch data:", error);
            setErrorElement(true);
        }
    };

    const [filterOptions, setFilterOptions] = useState(false);
    const handleEventFilter = () => {
        setFilterOptions(!filterOptions);
    }

    const handleSearchEvent=()=>{
        const filteredRestaurants = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        if (filteredRestaurants.length > 0) {
            setfilteredRestaurant(filteredRestaurants);
            setSearchResult(false);
        } else {
            console.log("No results found");
            setSearchResult(true);
        }
        
    } 

    if (errorElement) {
        return <ErrorAPI />;
    }

    return listOfRestaurant.length === 0 ? <ShimmerBody /> : (

        <div className="flex flex-col min-h-screen sm:gap-12">
            <div className="flex justify-center mt-10 px-20 sm:space-x-3  m-4 md:flex-wrap md:gap-4">

                <div className="flex flex-col items-center space-x-4 sm:flex-row sm:justify-center">
                    {/* input */}
                    <input type="text" data-testid="inputBox" className="border-2 border-orange-500 mb-3 w-64 p-2 sm:w-80 rounded-lg sm:h-8 sm:mb-0" placeholder="Craving something? Search here!" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }} />
                    <div className="flex gap-2">
                        {/* search */} 
                        <button className="bg-orange-500 text-black flex rounded-lg justify-center items-center w-14 px-10 h-8" onClick={() => handleSearchEvent()}>search</button>

                        <div className={` md:hidden flex flex-col  items-center ${filterOptions ? 'border-2 border-orange-400 rounded-lg px-3 py-3' : ''}`} onClick={() => { handleEventFilter() }}>
                            <button className={`flex items-center justify-center ${filterOptions ? '' : 'border-2 border-orange-400  rounded-lg  w-14 px-10 h-8'}`}>
                                filters
                            </button>

                            {filterOptions && (<div className="flex flex-col gap-2">
                                <button className=" bg-orange-400 rounded-lg px-2" onClick={
                                    () => {
                                        let filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
                                        setfilteredRestaurant(filteredList);
                                    }}>Top Rated</button>
                                <button className=" bg-orange-400 rounded-lg px-2" onClick={
                                    () => {
                                        let sortedList = [...filteredRestaurant]
                                        sortedList.sort(
                                            (a, b) => Number(a.info.costForTwo.substr(1, 4)) - Number(b.info.costForTwo.substr(1, 4))
                                        );
                                        setfilteredRestaurant(sortedList);
                                    }}>Price Ascend</button>
                                <button className=" bg-orange-400 rounded-lg px-2" onClick={
                                    () => {
                                        let sortedList = [...filteredRestaurant]
                                        sortedList.sort(
                                            (a, b) => Number(b.info.costForTwo.substr(1, 4)) - Number(a.info.costForTwo.substr(1, 4))
                                        );
                                        setfilteredRestaurant(sortedList);
                                    }}>Price Descend</button>
                            </div>)}

                        </div>
                    </div>
                </div>
                <div className="hidden md:flex gap-2">
                    {/* topratedbutton */}
                    <button className=" hidden sm:bg-orange-500 sm:flex sm:text-black  sm:w-70 sm:px-10 sm:rounded-lg sm:justify-center sm:items-center" onClick={
                        () => {
                            let filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
                            setfilteredRestaurant(filteredList);
                        }}>Top Rated Restaurants
                    </button>

                    {/* Price Ascend button */}
                    <button className=" hidden sm:bg-orange-500 sm:flex sm:text-black   sm:w-70 sm:px-10 sm:rounded-lg sm:justify-center sm:items-center" onClick={
                        () => {
                            let sortedList = [...filteredRestaurant]
                            sortedList.sort(
                                (a, b) => Number(a.info.costForTwo.substr(1, 4)) - Number(b.info.costForTwo.substr(1, 4))
                            );
                            setfilteredRestaurant(sortedList);
                        }}>Price Ascend
                    </button>

                    {/* Price Descend Button */}
                    <button className=" hidden sm:bg-orange-500 sm:flex sm:text-black  sm:w-70 sm:px-10 sm:rounded-lg sm:justify-center sm:items-center" onClick={
                        () => {
                            let sortedList = [...filteredRestaurant]
                            sortedList.sort(
                                (a, b) => Number(b.info.costForTwo.substr(1, 4)) - Number(a.info.costForTwo.substr(1, 4))
                            );
                            setfilteredRestaurant(sortedList);
                        }}>Price Descend
                    </button>
                </div>

            </div>

            {searchResult && <NoResultFound/>}
            {(!searchResult) && <div className="flex flex-wrap justify-center gap-5 px-2 sm:gap-5 w-50 md:px-5 md:gap-7">
                {filteredRestaurant.map(restaurant => <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                    {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
                </Link>)}
            </div>}

            {/* Footer */}
            <div className="flex bg-black h-32 justify-center items-center mt-auto sm:h-16">
                <div className="flex gap-5 sm:gap-8">
                    <Link to="https://www.linkedin.com/in/meghashree-kunder-017166288/"><img className="w-8 h-8" src={linkedin} /></Link>
                    <Link to="https://github.com/MeghashreeK"><img className="w-8 h-8" src={github} /></Link>
                </div>
            </div>
        </div>
    );
};
export default Body;


