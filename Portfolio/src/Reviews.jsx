import { motion } from "framer-motion"



function Works() {

    const works = [
        {
            "Title": "AutoPilot System",
            "Description": "An autopilot system for my game.",
            "Image": "https://placehold.co/600x300",
            "Href": "www.google.com",
            "Tags": ["React", "Tailwind", "CSS"]
        },
        {
            "Title": "AutoPilot System",
            "Description": "An autopilot system for my game.",
            "Image": "https://placehold.co/600x300",
            "Href": "www.google.com",
            "Tags": ["React", "Tailwind", "CSS"]
        },
        {
            "Title": "AutoPilot System",
            "Description": "An autopilot system for my game.",
            "Image": "https://placehold.co/600x300",
            "Href": "www.google.com",
            "Tags": ["React", "Tailwind", "CSS"]
        },
        {
            "Title": "AutoPilot System",
            "Description": "An autopilot system for my game.",
            "Image": "https://placehold.co/600x300",
            "Href": "www.google.com",
            "Tags": ["React", "Tailwind", "CSS"]
        }
    ]

    

    return (
        <>
            <div className="w-screen h-screen flex flex-col justify-center items-center bg-black text-white">
                <motion.div>
                    <motion.p whileInView={{
                        y: [250, 0],
                        fontSize: ["50px", "75px"],
                        transition: { times: [0, 1], duration: 1, delay: 1.5, ease: "easeInOut" }
                        
                    }} viewport={{once: true}} className="text-center tracking-wider text-linear-to-b from-[#2A2A2A] from-[40%] via-[#2A2A2A] via-[60%] to-[#383838]">Portfolio</motion.p>
                    <motion.p 
                        whileInView={{
                            y: [250, 0],
                            fontSize: ["17px", "25px"],
                            transition: { times: [0, 1], duration: 1, delay: 1.5, ease: "easeInOut" }
                        }}
                        viewport={{once: true}}
                        className="text-center text-linear-to-b from-[#2A2A2A] from-[40%] via-[#2A2A2A] via-[60%] to-[#383838]"
                    >I've sharpened my skills by doing several challenging projects in the past few years</motion.p>
                </motion.div>

                <motion.div className="w-3/4 mt-20 grid grid-cols-3 gap-10 opacity-0" whileInView={{
                        opacity: [0, 1],
                        transition: { times: [0, 1], duration: 1, delay: 4, ease: "easeInOut" }
                    }} viewport={{once: true}}>
                    {works.map((work) => (
                        <a href={work.Href} target="_blank">
                            <motion.div className="max-w-sm rounded overflow-hidden shadow-lg bg-linear-to-b from-[#2A2A2A] from-40% via-[#2A2A2A] via-60% to-[#383838] text-text hover:scale-105 transition-transform duration-300 cursor-pointer border-2 border-white">
                                <img className="w-full" src={work.Image} alt={work.Title} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{work.Title}</div>
                                    <p className="text-gray-400 text-base">{work.Description}</p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    {work["Tags"]?.map((tag) => (
                                        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </a>
                    ))}
                </motion.div>
            </div>
            
        </>
    )

}

export default Works