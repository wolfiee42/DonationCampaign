import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../utilities/utilities";
import StoredData from "../StoredData/StoredData";

const Donation = () => {
    const data = useLoaderData()
    const [storedData, setStoredData] = useState([]);
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        const storeditems = getStoredData();
        const donatedcard = data.filter(datum => storeditems.includes(datum.id));
        setStoredData(donatedcard)
    }, [data])

    return (
        <div>
            <div className="grid grid-cols-2 gap-5">
                {
                    storedData.slice(0, dataLength).map(dataStored => <StoredData key={dataStored.id} dataStored={dataStored}></StoredData>)
                }
            </div>
            <div className={`flex justify-center items-center ${dataLength === storedData.length ? 'hidden' : ''}`}>
                <button onClick={() => setDataLength(storedData.length)} className="btn btn-accent ">See all</button>
            </div>
        </div>
    );
};

export default Donation;