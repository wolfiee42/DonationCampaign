import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../utilities/utilities";

const Statistics = () => {
    const totalDonationableCards = useLoaderData()
    const [donated, setDonated] = useState([])
    useEffect(() => {
        const storedData = getStoredData();
        const stored = totalDonationableCards.filter(datum => storedData.includes(datum.id))
        setDonated(stored.length);
    }, [totalDonationableCards])

    const doonated = (donated / totalDonationableCards.length) * 100;
    const remaining = 100 - doonated;
    console.log(doonated);
    console.log(remaining);

    const data = [
        ["Contribution", "In Number"],
        ["Total Donations", remaining],
        ["Your Donation", doonated],
    ]

    const options = {
        title: "Your contribution in  Stat"
    }


    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
};

export default Statistics;