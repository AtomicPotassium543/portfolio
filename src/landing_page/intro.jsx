export default function Intro() {
  return (
      <>
          <div className="items-center bg-gradient-to-b from-[#373737] to-[#0A0A0A] pt-5 pb-32 w-full">
            <div className="w-1/2 h-1/3 mx-auto">
              <p className="bold text-6xl text-white poppins-semibold text-center mt-[3rem]">Welcome to my portfolio!</p>
              <div className="bg-[#202020] rounded-[100px] mt-[5rem] p-10 flex flex-col border-4 hover:scale-110 transition delay-10 duration-200 ease-in-out">
                <img src="card_pic.png" className="w-[400px] h-[400px] mx-auto mb-6" />
                <p className="text-4xl poppins-semibold text-white mb-6 text-center">Atomic Potassium</p>
                <p className="text-2xl poppins-regular text-white text-center">
                  Hello there! I am Atomic Potassium (I go by At Pot), and I'm a <span className="poppins-semibold">full-stack web developer</span> and a <span className="poppins-semibold">discord bot developer</span>! I have 2 years worth of experience in programming and I code for fun!
                </p>
              </div>

            </div>
          </div>
      </>
  )
}
