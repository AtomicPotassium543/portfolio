import type { number } from "framer-motion";
import { useEffect, useState } from "react"


function Navbar() {
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const [bgcolor, setbgcolor] = useState('transparent');
    const [textcolor, settextcolor] = useState('white');
    const [imgsrc, setimgsrc] = useState('LogoWhite.png');

    const [enlarge, setenlarge] = useState("scale-90");

    const [ScrollNumber, setScrollNumber] = useState(0);

    const handleScroll = () => {
        setScrollNumber(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (ScrollNumber > 400) {
            setimgsrc('LogoBlack.png');
            setenlarge('scale-100');
            sleep(1000).then(() => {});
            setbgcolor('white');
            settextcolor('black');
        } else {
            setbgcolor('transparent');
            settextcolor('white');
            sleep(1000).then(() => {});
            setimgsrc('LogoWhite.png');
            setenlarge('scale-90');
        }
    }, [ScrollNumber]);

    return (
        <>
            <div className={`w-full bg-${bgcolor} px-20 flex justify-between fixed top-0 z-50 transform transition-all duration-500 ease-in-out ${enlarge}`}>
                <div className='px-5 py-6 float-left'>
                    <div className='hover:cursor-pointer'>
                        <img src={imgsrc}/>
                    </div>
                </div>
                <div className={`px-5 py-6 float-right flex flex-row gap-x-20 text-${textcolor} font-regular text-2xl`}>
                    <div className='hover:cursor-pointer mx-5 tracking-widest'>
                        <p>Portfolio</p>
                    </div>
                    <div className='hover:cursor-pointer mx-5 tracking-widest'>
                        <p>Reviews</p>
                    </div>
                    <div className='hover:cursor-pointer mx-5 tracking-widest'>
                        <p>Contact me</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Navbar