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

    const data = [
        ["Contribution", "In Number"],
        ["Total Donations", totalDonationableCards.length],
        ["Your Donation", donated],
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