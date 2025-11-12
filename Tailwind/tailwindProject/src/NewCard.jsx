function NewCard() {
    return (
        <>
            <div className="max-w-sm md:max-w-2xl border-2 mx-auto mt-24 rounded-xl overflow-hidden">
                <div className="md:flex">
                    <div className="">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://images.pexels.com/photos/34312520/pexels-photo-34312520.jpeg" alt="User Image" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wider text-sm text-indigo-800 font-bold">Hotel Bhagyashree</div>
                        <a href="#" className="block mt-2 text-lg font-medium hover:text-blue-500">Tailwind CSS is very easy once you understand the <span className="bg-yellow-500 p-[4px] rounded-lg">power</span> of it.</a>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </div>
                </div>
            </div>
        </>
    )
}

// tracking-wider will increase space bet chars of text
// Properties written with md: prefix will only executed when display is more than medium display size
// By default all the css will be working when display size is small i.e. mobile size display
// p-[4px] here inside square brackets we can write any variable which contains exact value of that css property.

export default NewCard;