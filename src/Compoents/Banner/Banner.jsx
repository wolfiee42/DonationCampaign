import { useRef, useState } from "react";

const Banner = ({ data }) => {
    const categories = data.map(datum => datum.category)
    console.log(categories);

    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null);
    const handleForm = e => {
        e.preventDefault();
        setInputValue(inputRef.current.value);
    }
    console.log(inputValue);


    return (
        <div>
            <div className="hero bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/B3tqKvm/Rectangle-4281.png)' }}>
                <div className="bg-white hero-overlay bg-opacity-95"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-5xl min-h-[200px] md:min-h-[300px] lg:min-h-[500px] flex flex-col justify-center items-center">
                        <h1 className="my-5 text-3xl md:text-5xl font-bold text-gray-700">I Grow By Helping People In Need</h1>
                        <form onSubmit={handleForm} className="my-10">
                            <input ref={inputRef} className="p-2  md:w-80 border rounded-l-lg text-black" type="text" placeholder="Search here.." />
                            <input className="p-2  bg-red-500 rounded-r-lg text-white hover:cursor-pointer" type="submit" value="Search" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;