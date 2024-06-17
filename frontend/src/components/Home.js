import delivery from "../images/delivery-cravings.png";
import {Link} from "react-router-dom";




const Home = () => {
    return (
        <div className="flex justify-center items-center flex-wrap p-5 sm:px-36 sm:justify-between md:justify-center mt-12 md:mt-16 xl1:justify-between">
         
            <div className="flex flex-col justify-center items-center gap-7 sm:gap-10">

                <div className="flex flex-col justify-center text-center items-center">
                    <h1 className="font-bold font-Dancing text-[80px] sm:text-[150px] text-orange-500 ">Cravings</h1>
                    <h1 className="font-Montserrat text-[20px] sm:text-[40px] text-orange-500">Khao Jee Bharke!</h1>
                    <h1 className="font-Montserrat italic text-orange-500 text-[13px] sm:text-[20px]">Delivering your desired food right to your doorstep.</h1>
                </div>
                <div>
                    <Link to="/restaurants"><button className="border-2 font-Montserrat border-orange-400 text-orange-500 py-1 w-70 px-10 rounded-lg justify-center items-center hover:bg-orange-500 hover:text-white" >Find Your Favorite Food!</button></Link>
                </div>
            </div>


            <div>
                <img src={delivery} className="sm:pr-11 pt-5"/>
            </div>


        </div>
    )
}
export default Home;



