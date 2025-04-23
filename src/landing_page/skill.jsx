export default function Skill() {
    let skill_list = [
        ["React.js", "I expertise in React.js... It’s something I use in my front-end, especially for both short & long projects!", "react.png", "https://react.dev/"],
        ["Supabase", "I expertise in Supabase... It’s something I use in my back-end, especially for long projects!", "supabase.png", "https://supabase.com/"],
        ["MongoDB", "I expertise in MongoDB... It’s something I use in my back-end, especially for short projects!", "mongodb.png", "http://mongodb.com/"],
        ["Postgresql", "I expertise in postgres... It’s something I use in my back-end, especially for long projects!", "postgres.png", "https://www.postgresql.org/"],
        ["Python", "I expertise in python... It’s something I use in my back-end and automation!", "python.png", "https://www.python.org/"]
    ];

    return (
        <>
            <img src="S_icon.png" className="w-[80px]" />
            <p className="text-7xl text-center text-white poppins-bold mt-8">
                My Skills
            </p>
            <p className="text-2xl text-white poppins-regular mt-12 mx-auto text-center">
                I have worked with several tools to enhance the quality of my projects!
            </p>

            <div className="flex flex-col gap-y-16 mt-14 mb-[7.5rem]">
                {skill_list.map(([title, description, image, URL], index) => (
                    <a href={URL} target="_blank" className="w-2/4 mx-auto">
                        <div key={index} className="w-full bg-[#2F2F2F] rounded-[63px] flex flex-row gap-6 mx-auto hover:scale-110 transition delay-10 duration-200 ease-in-out">
                            <img src={image} className="w-2/4 rounded-l-[63px]" />
                            <div>
                                <p className="text-2xl text-white poppins-semibold mt-12">{title}</p>
                                <p className="text-lg text-white poppins-regular mt-4">{description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}
