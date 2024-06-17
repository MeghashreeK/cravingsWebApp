import { useEffect } from "react";
import { MENU_URL } from "../utils/constants";
import { useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo,setresInfo]=useState(null);
    const [errorElement,setErrorElement]=useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        // console.log(json);
        setresInfo(json.data);
        }
        catch(error){
            console.error("Failed to fetch data:", error);
            setErrorElement(true);
        }
    }
    return { resInfo, errorElement };


}
export default useRestaurantMenu;


