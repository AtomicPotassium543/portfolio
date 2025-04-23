export default function TOS() {

    let rules_list = [
        ["Be cooperative!", "For a good experience for the both parties, I would request that you be cooperate and be respectful to my needs. Not following this term might lead to an immediate cancellation.", "loudspeak.png"],
        ["Be clear of what you want!", "For a good experience for the both parties, I would request that you plan out what type of product (and the features) you want from me. I will help you plan out what you need, however you must have a plan! Not following this term will lead to an immediate cancellation!", "checklist.png"],
        ["I am a minor!", "If you are an adult, I have no problem with serving you, however if you have a problem with me being a minor (I’m 15) then I would request you to not hire me!", "minor.png"],
        ["I DO NOT WORK FOR FREE!", "I usually don’t work for anyone for free. If I find your project interesting, I might take up what you have to offer, however, I have my right to drop out of the project whenever I want!", "Nofree.png"]

    ]

    return (
        <>
            <img src="TOS_icon.png" className="w-[80px]" />
            <p className="text-7xl text-white poppins-bold mt-8 mx-auto text-center">
                My Terms and Conditions
            </p>
            <p className="text-2xl text-white poppins-regular mt-12 mx-auto text-center">
                I would love to work for you! However, I have a few terms which you will have to agree on.
            </p>
            <div className="flex flex-col gap-y-16 mt-14 mb-[7.5rem]">
                {rules_list.map(([title, description, image], index) => (
                    <div key={index} className="w-2/4 bg-[#2F2F2F] rounded-[63px] flex flex-row gap-6 mx-auto border-4">
                        <img src={image} className="w-1/4 rounded-l-[63px] border-4" />
                        <div className="my-[2/3]">
                            <p className="text-2xl text-white poppins-semibold mt-12">{title}</p>
                            <p className="text-lg text-white poppins-regular mt-4 p-2">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
