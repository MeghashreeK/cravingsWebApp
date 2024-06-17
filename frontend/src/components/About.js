import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.png";
import { Link } from "react-router-dom";
import resimage from "../images/restaurantfood.jpg";
const About = () => {
    

    return (
        <div className="flex flex-col h-full min-h-screen">

            <div className="flex flex-col flex-grow px-5 justify-center items-center mt-2 ">
                <div className="flex gap-8">
                    <div className="flex flex-col gap-5 justify-center">
                        <h1 className="text-6xl font-Dancing font-bold text-orange-500">Anytime, Anywhere..</h1>
                        <p className=" text-[14px] sm:text-lg font-Montserrat">Welcome to 𝐂𝐫𝐚𝐯𝐢𝐧𝐠𝐬, where our journey began with a passion for revolutionizing the way people experience food. Established in 𝟐𝟎𝟎𝟐,
                            we set out with a clear mission: to bring 𝐜𝐨𝐧𝐯𝐞𝐧𝐢𝐞𝐧𝐜𝐞, 𝐪𝐮𝐚𝐥𝐢𝐭𝐲, and 𝐬𝐚𝐭𝐢𝐬𝐟𝐚𝐜𝐭𝐢𝐨𝐧 to every doorstep. Our commitment to excellence is
                            reflected in our stringent quality and safety standards, ensuring that every meal delivered meets the highest expectations.
                            At the heart of our service is a customer-centric approach, where we prioritize your needs, preferences, and convenience in every order.
                            With a diverse range of restaurant partners, we offer a culinary journey that celebrates the flavors of local and international cuisines.
                            Powered by cutting-edge technology and innovation, our platform provides seamless ordering experiences and personalized recommendations.
                        </p>
                        <p className="text-[14px] mb-5 sm:text-lg  font-Montserrat">Beyond business, we are dedicated to social responsibility, actively 𝐬𝐮𝐩𝐩𝐨𝐫𝐭𝐢𝐧𝐠 𝐥𝐨𝐜𝐚𝐥 𝐜𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐢𝐞𝐬 and 𝐩𝐫𝐨𝐦𝐨𝐭𝐢𝐧𝐠 𝐬𝐮𝐬𝐭𝐚𝐢𝐧𝐚𝐛𝐥𝐞 𝐩𝐫𝐚𝐜𝐭𝐢𝐜𝐞𝐬.
                            Our team is composed of industry experts and passionate individuals who drive our vision forward with creativity and dedication.
                            But don't just take our word for it, hear from our satisfied customers and restaurant partners who have experienced the Cravings difference firsthand.
                            We invite you to join us on this culinary adventure and discover why we're more than just a food delivery app, we're a partner in creating memorable dining experiences and we're always here to serve you.
                        </p>
                    </div>
                    <img className="w-4/12 border-8 border-orange-500 rounded-[50%] hidden sm:block md:hidden xl:block" src={resimage} alt="food image" />

                </div>
            </div>

            <div className="flex bg-black h-32 justify-center items-center sm:h-16">
                <div className="flex gap-5 sm:gap-8">
                    <Link to="https://www.linkedin.com/in/meghashree-kunder-017166288/"><img className="w-8 h-8" src={linkedin} /></Link>
                    <Link to="https://github.com/MeghashreeK"><img className="w-8 h-8" src={github} /></Link>
                </div>
            </div>


        </div>

    );
}

export default About;



