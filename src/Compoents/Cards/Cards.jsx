const Cards = ({ datum }) => {
    const { picture, title, category, category_bg, text_and_button_bg, card_bg } = datum
    console.log(datum);
    return (
        <div className="max-w-[85%] mx-auto my-5">
            <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <img src={picture} alt="" />
                <div className="card-body">
                    <h2>{category}</h2>
                    <h2 className="card-title">{title}</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default Cards;