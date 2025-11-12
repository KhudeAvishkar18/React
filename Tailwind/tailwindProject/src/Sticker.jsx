function Sticker() {
    return (
        <>
            <div className='bg-slate-900 grid place-content-center h-screen'>
                {/* <h1 className='text-blue-800 font-bold text-3xl m-4'>Hello World</h1> */}
                <div className="p-6 max-w-sm bg-white rounded-xl shadow-lg flex items-center space-x-4">
                    <div>
                        <img className="h-12 w-12" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" alt="User Image" />
                    </div>
                    <div>
                        <div className="text-2xl font-medium text-black">
                            <p>Tailwind CSS</p>
                            <p className="text-slate-800 text-base">By Hitesh Choudhary</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sticker;