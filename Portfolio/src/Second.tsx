import { useState, useEffect } from "react";

function Second() {
    const [data, setData] = useState<{
            record: {
                Data: {
                    "Top": string,
                    "Bottom": string,
                    "Image": string
                }[];
            };
        } | null>(null);
        
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://api.jsonbin.io/v3/b/6961064943b1c97be924652b', {
                method: 'GET',
                headers: {
                    'Content-X-Master-Key': '$2a$10$nNNE2z/A9.DiNDV/dBXoeucuzSRImXSEQsw9jXrOYB8WOgwPsqdb.',
                    'X-Access-Key': '$2a$10$UH3NfwUcvTPzZJN.UsYtPOVaYSBBkE91toFkf20KuWmmueynnrzrO'
                }
            });
        
            const json = await res.json();
            setData(json);
        }
        fetchData();
    }, []);
    
    const stats = data?.record?.Data ?? [];

    return (
        <>
            
            <div className="flex items-center justify-center w-screen h-screen bg-black gap-y-20 flex-col">
                <div className="flex items-center justify-center flex-row w-4/5 gap-x-10">
                    <p className="text-white text-5xl font-bold">Why choose me?</p>
                </div>
                <div className="w-3/4 gap-x-8 flex items-center justify-center flex-row group">

                    {stats.map((stat) => (
                        <div className="transform transition-transform duration-300 hover:scale-110 group-hover:scale-90 flex flex-col bg-white w-1/5 font-bold text-center gap-y-3 rounded-2xl p-4">
                            <img src={stat.Image} className="mx-auto"/>
                            <div>
                                <p className="text-3xl">{stat.Top}</p>
                                <p className="text-2xl font-light">{stat.Bottom}</p>
                            </div>
                        </div>
                    ))}
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