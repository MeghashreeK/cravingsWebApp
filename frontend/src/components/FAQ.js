import downarrow from "../images/down-arrow.png";
import { useEffect, useState } from "react";
import uparrow from "../images/up-arrow.png";
import ShimmerFAQ from "./ShimmerFAQ";
import ErrorAPI from "./ErrorAPI";

const FAQ = () => {
    const [answer, setAnswer] = useState(false);
    const [indexOfBox, setIndexOfBox] = useState([0]);
    const [errorElement,setErrorElement]=useState(false);

    const showAnswer = (index) => {
        setAnswer(!answer);
        setIndexOfBox(index);
    }

    const [faqData, setFaqData] = useState([]);

    useEffect(() => { fetchFaqData() }, []);

    const fetchFaqData = async () => {
        try{
        const data = await fetch("https://cravingsproxyserver.onrender.com/https://www.swiggy.com/dapi/support/issues/faq?");
        const json = await data.json();
        // console.log(json);
        setFaqData(json.data.issues.data);
        }
        catch(error){
            console.error("Failed to fetch data:", error);
            setErrorElement(true);
        }
    }

    if (errorElement) {
        return <ErrorAPI />;
    }

    return faqData.length===0 ? <ShimmerFAQ/> : (
        <div className="flex flex-col p-5 h-screen">
            <div className="flex flex-col gap-5 ">
                {faqData.slice(3,-1).map((data, index) => <div key={data.id} className={`flex flex-col ${index!==faqData.length - 4 ? 'border-b-2 border-b-gray-200' : ''} px-3 py-6`} onClick={() => showAnswer(index)}>

                    <div className="flex justify-between w-full font-Montserrat font-medium">
                        <h1>{data.title.replace(/Swiggy/gi, 'Cravings')}</h1>
                        {indexOfBox==index && answer === true ? <img className="h-4" src={uparrow} alt="uparrow" /> : <img className="h-4" src={downarrow} alt="downarrow" />}
                    </div>
                    <div className="flex py-1 text-gray-400">
                        {
                           indexOfBox==index && answer && <p>{data.description.replace(/Swiggy/gi, 'Cravings')}</p>
                        }
                    </div>

                </div>)}
            </div>
        </div>
    );
}
export default FAQ;

