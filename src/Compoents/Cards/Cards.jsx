import PropTypes from 'prop-types';

const Cards = ({ datum }) => {
    const { picture, title, category, category_bg, text_and_button_bg, card_bg } = datum;
    console.log(card_bg);

    return (
        <div className="max-w-[85%] mx-auto my-5 ">
            <div className={`card card-compact w-72 shadow-xl bg-[${card_bg}]`}>
                <img src={picture} alt="" />
                <div className={`card-body text-[${text_and_button_bg}]`}>
                    <h2 className={`p-1 bg-[${category_bg}] w-14 rounded-lg font-semibold text-center`} >{category}</h2>
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    datum: PropTypes.object,
}

export default Cards;