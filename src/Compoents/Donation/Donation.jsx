import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../utilities/utilities";
import StoredData from "../StoredData/StoredData";

const Donation = () => {
    const data = useLoaderData()
    const [storedData, setStoredData] = useState([])
    useEffect(() => {
        const storeditems = getStoredData();
        const donatedcard = data.filter(datum => storeditems.includes(datum.id));
        setStoredData(donatedcard)
    }, [data])

    return (
        <div className="grid grid-cols-2 gap-5">
            {
                storedData.map(dataStored => <StoredData key={dataStored.id} dataStored={dataStored}></StoredData>)
            }
        </div>
    );
};

export default Donation;