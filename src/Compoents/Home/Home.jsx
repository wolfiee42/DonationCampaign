import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";


const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Banner data={data}></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    data.map(datum => <Cards key={datum.id} datum={datum}></Cards>)
                }
            </div>
        </div>
    );
};

export default Home;