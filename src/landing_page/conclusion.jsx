export default function Conclusion() {
    return (
        <>
            <img src="B_icon.png" className="w-[80px]"/>
            <p className="text-7xl text-white poppins-bold mt-8">
                My Contact
            </p>
            <p className="text-2xl text-white poppins-regular mt-12 poppins-regular">Now that we have the important stuff out of the way... Lets talk!</p>
            <div className="w-1/5 flex flex-row-2 gap-x-[7rem] mt-[7.5rem] poppins-regular mb-[10rem] ">
                <a href="https://discord.gg/Xu5SgrsM8Z" target="_blank">
                    <button className="border-4 min-h-3/5 min-w-3/5 rounded-[999px] border-[#8D0A0A] mx-auto hover:bg-[#FFFFFF] hover:scale-125 transition delay-10 duration-200 ease-in-out">
                        <img src="discord.png" className="p-4"/>
                    </button>
                </a>
                <button className="border-4 min-h-3/5 min-w-3/5 rounded-[999px] border-[#8D0A0A] mx-auto hover:bg-[#FFFFFF] hover:scale-125 transition delay-10 duration-200 ease-in-out">
                    <img src="youtube.png" className="p-4"/>
                </button>
            </div>
        </>
    )
  }