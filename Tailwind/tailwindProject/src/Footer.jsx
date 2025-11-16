function Footer() {
    return (
        <>
            <footer className="w-full bg-gray-900 text-white py-10 flex flex-col md:flex-row flex-wrap justify-between md:px-12 ">
                <div className="w-[80%] mx-auto sm:flex sm:flex-wrap sm:w-full sm:justify-between">
                    <div className="m-5">
                        <img className="w-40 " src={url} alt="" />
                        <p className="my-4">Email us : khudeavishkar18@gmail.com</p>
                        Copyright &copy; 2025-26 Avishkar Khude
                    </div>
                    <div className="m-5">
                        <h2 className="font-bold">PW Skills</h2>
                        <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                        <ul>
                            <li className="hover:underline"><a href="#">About Us</a></li>
                            <li className="hover:underline"><a href="#">FAQs</a></li>
                            <li className="hover:underline"><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="m-5">
                        <h2 className="font-bold">Products</h2>
                        <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                        <ul>
                            <li className="hover:underline"><a href="#">PW Skills Lab</a></li>
                            <li className="hover:underline"><a href="#">Job Portal</a></li>
                            <li className="hover:underline"><a href="#">Experience Portal</a></li>
                            <li className="hover:underline"><a href="#">Become an Affiliate</a></li>
                            <li className="hover:underline"><a href="#">Hall of Fame</a></li>
                        </ul>
                    </div>
                    <div className="m-5">
                        <h2 className="font-bold">Links</h2>
                        <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                        <ul>
                            <li className="hover:underline"><a href="#">PW Youtube</a></li>
                            <li className="hover:underline"><a href="#">Telegram Channel</a></li>
                            <li className="hover:underline"><a href="#">Careers</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;


const url = 'https://halloffame.pwskills.com/images/PWSkills-white.png';