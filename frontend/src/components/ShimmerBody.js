const ShimmerBody = () => {

    return (

        <div className="flex flex-col sm:gap-12 justify-center">
            {/* mobile screen */}
            <div className="md:hidden flex justify-center mt-10 px-20 sm:space-x-3  m-4 md:flex-wrap md:gap-4">

                <div className="flex flex-col items-center space-x-4 sm:flex-row sm:justify-center">
                    <input type="text" className="bg-[#E5E2E0] mb-3 w-64 p-2 sm:w-80 rounded-sm sm:h-8 sm:mb-0" />
                    <div className="flex gap-2">
                    <button className="bg-[#E5E2E0] flex rounded-lg justify-center items-center w-14 px-10 h-8"></button>
                    <button className="bg-[#E5E2E0] text-[#E5E2E0] flex rounded-lg justify-center items-center px-10 h-8"></button>
                    </div>
                </div>

            </div>

            {/* bigscreen */}
            <div className="hidden md:flex justify-center mt-10 px-20 sm:space-x-3  m-4 md:flex-wrap md:gap-4">

                <div className="flex flex-wrap justify-between flex-col items-center space-x-4 sm:flex-row sm:justify-center">
                    <input type="text" className="bg-[#E5E2E0] mb-3 w-64 p-2 sm:w-80 rounded-sm sm:h-8 sm:mb-0" />
                    <button className="bg-[#E5E2E0] flex rounded-lg justify-center items-center w-14 px-10 h-8"></button>
                    <div className="flex gap-2 mt-2 lg1:mt-0">
                    <button className="bg-[#E5E2E0] text-[#E5E2E0] flex rounded-lg justify-center items-center px-10 h-8">Top Rated Restaurants</button>
                    <button className="bg-[#E5E2E0] text-[#E5E2E0] flex rounded-lg justify-center items-center px-10 h-8">Price Ascend</button>
                    <button className="bg-[#E5E2E0] text-[#E5E2E0] flex rounded-lg justify-center items-center px-10 h-8">Price Descend</button>
                    </div>
                </div>

            </div>

            <div className="flex flex-wrap justify-center gap-5 px-2 sm:gap-5 w-50 md:px-5 md:gap-7">
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
                <div className="bg-[#E5E2E0] flex rounded-xl justify-center items-center w-60 px-10 h-56"></div>
            </div>
        </div>
    );
};
export default ShimmerBody;