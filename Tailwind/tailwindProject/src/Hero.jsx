function Hero(){
    return(
        <>
            {/* <h2>Hero Section</h2> */}

            <header className="w-full h-auto">
                <img className="w-full hidden md:block" src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt="FirstImage" />
                <img className="w-full md:hidden" src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg" alt="SecondImage" />
            </header>
        </>
    )
}

export default Hero;