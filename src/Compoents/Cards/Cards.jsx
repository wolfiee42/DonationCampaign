import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cards = ({ datum }) => {
    const { id, picture, title, category, category_bg, text_and_button_bg, card_bg } = datum;
    console.log(card_bg);

    const cardColor = {
        backgroundColor: card_bg
    }
    const categoryColor = {
        backgroundColor: category_bg
    }
    const textcolor = {
        color: text_and_button_bg
    }

    return (
        <div className="max-w-[85%] mx-auto my-5 ">
            <Link to={`/donationdetails/${id}`}>
                <div style={cardColor} className="card card-compact w-72 shadow-xl">
                    <img src={picture} alt="" />
                    <div style={textcolor} className="card-body">
                        <h2 style={categoryColor} className="p-1 w-[30%] rounded-lg font-semibold text-center" >{category}</h2>
                        <h2 className="card-title">{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Cards.propTypes = {
    datum: PropTypes.object,
}

export default Cards;