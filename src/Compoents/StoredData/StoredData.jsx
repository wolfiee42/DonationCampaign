import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StoredData = ({ dataStored }) => {
    console.log(dataStored);

    const {id,  picture, category, title, price, category_bg, card_bg, text_and_button_bg } = dataStored;

    const bg = {
        backgroundColor: card_bg,
    }
    const textColor = {
        color: text_and_button_bg
    }
    const catrgoryColor = {
        backgroundColor: category_bg
    }
    const btclr = {
        backgroundColor: text_and_button_bg
    }
    return (
        <div style={bg} className='max-w-[85%] mx-auto my-5 flex justify-center items-center gap-4 rounded-lg'>
            <div>
                <img className='w-full' src={picture} alt="" />
            </div>
            <div style={textColor} className='mx-10'>
                <h2 style={catrgoryColor} className='p-1 w-[50%] rounded-lg text-sm font-semibold text-center'>{category}</h2>
                <h2 className='text-black font-semibold text-xl'>{title}</h2>
                <p className='font-semibold my-1'>{price}</p>
                <Link to={`/donationdetails/${id}`}>
                    <div className=''>
                        <button style={btclr} className='py-2 px-4 rounded font-semibold text-white duration-200	'>View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

StoredData.propTypes = {
    dataStored: PropTypes.object,
}

export default StoredData;