function Second() {

    return (
        <>
            
            <div className="flex items-center justify-center w-screen h-screen bg-black gap-y-20 flex-col">
                <div className="flex items-center justify-center flex-row w-4/5 gap-x-10">
                    <p className="text-white text-5xl font-bold">Why choose me?</p>
                </div>
                <div className="w-3/4 gap-x-8 flex items-center justify-center flex-row group">
                    <div className="transform transition-transform duration-300 hover:scale-110 group-hover:scale-90 flex flex-col bg-white w-1/5 font-bold text-center gap-y-3 rounded-2xl p-4">
                        <img src="Person.png" className="mx-auto"/>
                        <div>
                            <p className="text-3xl">7+</p>
                            <p className="text-2xl font-light">Clients Served</p>
                        </div>
                    </div>

                    <div className="transform transition-transform duration-300 hover:scale-110 group-hover:scale-90 flex flex-col bg-white w-1/5 font-bold text-center gap-y-3 rounded-2xl p-4">
                        <img src="Star.png" className="mx-auto"/>
                        <div>
                            <p className="text-3xl">5</p>
                            <p className="text-2xl font-light">Quality Service</p>
                        </div>
                    </div>

                    <div className="transform transition-transform duration-300 hover:scale-110 group-hover:scale-90 flex flex-col bg-white w-1/5 font-bold text-center gap-y-3 rounded-2xl p-4">
                        <img src="Clock.png" className="mx-auto"/>
                        <div>
                            <p className="text-3xl">3 days</p>
                            <p className="text-2xl font-light">Average Delivery Time</p>
                        </div>
                    </div>

                    <div className="transform transition-transform duration-300 hover:scale-110 group-hover:scale-90 flex flex-col bg-white w-1/5 font-bold text-center gap-y-3 rounded-2xl p-4">
                        <img src="Maintenance.png" className="mx-auto"/>
                        <div>
                            <p className="text-3xl">5</p>
                            <p className="text-2xl font-light">Major Projects</p>
                        </div>
                    </div>
                </div>

                <svg className="w-3/4 h-px bg-white"></svg>

                <div className="flex flex-col gap-y-5">
                    <text className="text-white text-2xl font-regular mx-auto">Technologies I have worked with</text>
                    <div>
                        <div className="animate-marquee whitespace-nowrap flex flex-row gap-x-20 mt-20">
                        <img src="Disnake.png" className="h-15 object-contain"/>
                        <img src="FastAPI.png" className="h-15 object-contain"/>
                        <img src="Python.png" className="h-15 object-contain"/>
                        <img src="Node.png" className="h-15 object-contain"/>
                        <img src="Pytorch.png" className="h-15 object-contain"/>
                        <img src="Sklearn.png" className="h-15 object-contain"/>
                        <img src="MongoDB.png" className="h-15 object-contain"/>
                        <img src="Disnake.png" className="h-15 object-contain"/>
                        <img src="FastAPI.png" className="h-15 object-contain"/>
                        <img src="Python.png" className="h-15 object-contain"/>
                        <img src="Node.png" className="h-15 object-contain"/>
                        <img src="Pytorch.png" className="h-15 object-contain"/>
                        <img src="Sklearn.png" className="h-15 object-contain"/>
                        <img src="MongoDB.png" className="h-15 object-contain"/>
                    </div>
                    </div>
                </div>

            </div>
            
        </>
    )

}

export default Second