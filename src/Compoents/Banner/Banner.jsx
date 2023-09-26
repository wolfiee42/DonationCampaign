const Banner = () => {
    return (
        <div>
            <div className="hero bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/B3tqKvm/Rectangle-4281.png)' }}>
                <div className="bg-white hero-overlay bg-opacity-95"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-5xl min-h-[200px] md:min-h-[300px] lg:min-h-[500px] flex flex-col justify-center items-center">
                        <h1 className="my-5 text-3xl md:text-5xl font-bold text-gray-700">I Grow By Helping People In Need</h1>
                        <div className="my-10">
                            <input className="p-2  md:w-80 border rounded-l-lg" type="text" placeholder="Search here.."/>
                            <button className="p-2  bg-red-500 rounded-r-lg text-white">Search</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;