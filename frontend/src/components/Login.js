import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.png";
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <div className="flex flex-col h-full min-h-screen">

            <div className="flex flex-col flex-grow px-5 justify-center items-center mt-2 ">
                <div className="flex gap-8 text-center">
                    <div className="flex flex-col gap-5 justify-center">

                        <h1 className="font-bold font-Dancing text-[30px] sm:text-[50px] text-orange-500 ">Welcome Back</h1>

                        <div className="flex flex-col gap-5 items-center justify-center">
                            <input className="border-2 border-orange-500 rounded-xl sm:w-96 w-full placeholder:p-2 py-[5px]" placeholder="Your email" />
                            <input className="border-2 border-orange-500 rounded-xl sm:w-96 w-full placeholder:p-2 py-[5px]" placeholder="Your password" />
                            <button className="bg-orange-500 rounded-xl sm:w-96 w-full text-white py-[5px] hover:bg-orange-400">Login</button>
                            <div className="flex gap-1">
                                <h1 className="text-gray-400">Do not have an account?</h1>
                                <h1 className="text-gray-400 hover:text-orange-500 cursor-pointer"> Create one</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex bg-black h-32 justify-center items-center sm:h-16">
                <div className="flex gap-5 sm:gap-8">
                    <Link to="https://www.linkedin.com/in/meghashree-kunder-017166288/"><img className="w-8 h-8" src={linkedin} /></Link>
                    <Link to="https://github.com/MeghashreeK"><img className="w-8 h-8" src={github} /></Link>
                </div>
            </div>


        </div>

    )
}
export default Login;




