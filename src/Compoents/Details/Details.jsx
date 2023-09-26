import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import { saveItems } from "../../utilities/utilities";

const Details = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const isActice = data.find(datum => datum.id === idInt);
    console.log(isActice);
    const { picture, title, description, price, text_and_button_bg } = isActice;

    const btnBGColor = {
        backgroundColor: text_and_button_bg
    }
    const handleBtn = () => {
        saveItems(idInt);
        Swal.fire(
            'Congratulations!',
            ' You have Successfully Donated.',
            'success'
        )
    }
    return (
        <div className="max-w-[85%] mx-auto my-10">
            <div className="relative hero">
                <img className="w-2/3 mx-auto rounded-lg" src={picture} alt="" />
                <Link>
                    <div className=" bg-slate-700 hero-overlay bg-opacity-95">
                        <button style={btnBGColor} onClick={handleBtn} className="py-2 px-4 rounded font-semibold text-white absolute bottom-7 left-60">Donate {price}</button>
                    </div>
                </Link>
            </div>
            <div className="w-2/3 mx-auto">
                <h2 className="my-5 text-3xl font-bold">{title}</h2>
                <p className="text-gray-600 mb-10">{description}</p>
            </div>
        </div>
    );
};

export default Details;