function Second() {

    return (
        <>
            
            <div className="w-screen h-[50vh] flex flex-row justify-center align-middle mx-auto bg-white text-black text-3xl">
                <div className="w-1/3 h-1/2 px-5 py-6 space-y-3 flex flex-col mx-auto my-auto">
                    <p className="text-lg text-gray-500 font-light">Email me on Gmail if you wish to get in touch</p>
                    <p className="text-1xl text-black font-light tracking-wider">potassiumatomic@gmail.com</p>
                </div>
                <div className="w-1/3 h-1/2 px-5 py-6 flex flex-col space-y-4 mx-full my-auto gap-y-8">
                    <a href="na" className="cursor-pointer" target="_blank">
                        <p className="text-1xl text-black font-light flex flex-row gap-5"><span><img src="./Discord.png" className="w-8 h-8"/></span>Discord Server</p>
                    </a>
                    <a href="https://x.com/AtomicPota55215" className="cursor-pointer" target="_blank">
                        <p className="text-1xl text-black font-light flex flex-row gap-5"><span><img src="./X.png" className="w-8 h-8"/></span>X</p>
                    </a>
                    <a href="https://www.fiverr.com/s/6YpNmGr" className="cursor-pointer" target="_blank">
                        <p className="text-1xl text-black font-light flex flex-row gap-5"><span><img src="./Fiverr.png" className="w-8 h-8"/></span>Fiverr</p>
                    </a>
                </div>
            </div>
        </>
    )

}

export default Second
