import { useRef } from "react";

export default function Navbar() {

    return (
        <>
            <div className="z-6 sticky top-0 w-full h-[70px] bg-[#8D0A0A] rounded-lg">
                <div className="w-4/5 h-full mx-auto my-auto flex flex-row items-center lg:justify-between">
                    <a href="#">
                        <img src="Logo.png" className="h-full my-auto" />
                    </a>
                </div>
            </div>
        </>
    );
}