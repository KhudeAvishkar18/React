function Card() {
    return (
        <>
            <div className="grid place-content-center h-screen border-2">
                <div>
                    <img className="h-50 w-50 rounded-xl" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User Image" />
                </div>
                <div className="">
                    <p className="text-blue-600 md:text-green-600 sm:text-red-600">Tailwind CSS</p>
                    {/* Here text-blue is by default, that is as Tailwind CSS is mobile first css, for smallest display size text will be blue i.e. default css */}
                    {/* After overriding css, For small display size and above text will be red */}
                    {/* And for medium display size and above text will be green */}
                    {/* That means by default we write css for mobile device (smallest display), if we want them for bigger display we can override css using sm:, md:, xl:, lg: etc */}
                    <p>By Hitesh Choudhary</p>

                    {/* Breakpoints in responsive css - sm, md, lg, xl, 2xl etc */}
                </div>
                <button className="border-2 mt-2 rounded-lg p-1.5 text-white bg-blue-500
                 hover:bg-white hover:text-black hover:cursor-pointer">Buy Now</button>
            </div>
        </>
    )
}

export default Card;