function First() {

    return (
        <>
            
            <div id="firstvideo" className='w-full h-1/4 flex items-center justify-between overflow-hidden overflow-x-hidden bg-linear-to-b from-10% to-90% from-transparent to-black'>
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="FirstVideo.mp4" type="video/mp4" />
                </video>
                
                <div className='flex items-center justify-center h-screen w-screen z-10'>
                    <div className="w-2/5 h-full flex items-center justify-center flex-col gap-y-5">
                        <p className="text-7xl text-white tracking-wider">AtomicPotassium</p>
                        <p className="text-lg text-white text-light text-center tracking-wider">Chatbot Developer, UI/UX Designer, Fullstack Web Developer, Machine <br />Learning Engineer</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default First