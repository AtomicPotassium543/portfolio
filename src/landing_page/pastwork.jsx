export default function About() {
    let experience_list = [
        ["Server Management Bot", "A discord bot integrated for handling my commissions server.", "./server_management.png", "https://github.com/AtomicPotassium/server-management"],
        ["Reputation Bot", "A discord bot integrated for reputating a user.", "./reputation-bot.png", "https://github.com/AtomicPotassium/reputation-bot"]

    ]
    
    return (
        <>
            <img src="B_icon.png" className="w-[80px]"/>
            <p className="text-7xl text-center text-white poppins-bold mt-8">
                My Projects
            </p>
            <p className="text-2xl text-center text-white poppins-regular mt-12 poppins-regular">I have worked on a few projects on my own for fun!</p>
            <div className="w-4/5 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-10 gap-y-10 gap-x-10 poppins-regular mb-[10rem]">
                {experience_list.map(([title, desc, image, link], _) => (
                    <a href={link} target="_blank">
                        <div className="border-4 rounded-lg p-5 hover:scale-110 transition delay-10 duration-200 ease-in-out">
                            <img src={image}/>
                            <p className="text-center text-white text-3xl mt-7">
                                {title}
                            </p>
                            <p className="text-center text-gray-500 text-1xl mt-3">
                                {desc}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
  }