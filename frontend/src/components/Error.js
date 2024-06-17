import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
          <div className='flex justify-center items-center h-screen p-2'>
          <div className='flex flex-col justify-center text-center border-2 p-5 rounded-lg border-orange-500 w-full'>
          <p className='font-Montserrat'>Oops! Something went wrong.</p>
          <p>404: page not found</p>
          </div>
      </div>
    )
}
export default Error;