import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {

    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(false);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba",
                    description: "Calming scent used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Refreshing aroma used in teas.",
                    cost: "$12"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent used in cooking.",
                    cost: "$15"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothing gel used for skin care.",
                    cost: "$14"
                },
                {
                    name: "Chamomile",
                    image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Promotes relaxation and sleep.",
                    cost: "$15"
                },
                {
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Relieves digestive issues.",
                    cost: "$13"
                }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px'
    };

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px'
    };

    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none'
    };

    return (
        <div>

            <div className="navbar" style={styleObj}>

                <div className="luxury">

                    <img
                        src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
                        alt=""
                        width="50"
                    />

                    <a href="/" onClick={handleHomeClick} style={styleA}>
                        Paradise Nursery
                    </a>

                </div>

                <div style={styleObjUl}>

                    <div>
                        <a href="#" style={styleA}>Plants</a>
                    </div>

                    <div>
                        <a href="#" onClick={handleCartClick} style={styleA}>🛒</a>
                    </div>

                </div>

            </div>

            {!showCart ? (

<div className="product-grid">

{plantsArray.map((category, index) => (
    <div key={index}>

        <h2>{category.category}</h2>

        <div className="plants-container">

            {category.plants.map((plant, plantIndex) => (
                <div className="plant-card" key={plantIndex}>

                    <img src={plant.image} alt={plant.name} />

                    <h3>{plant.name}</h3>

                    <p>{plant.description}</p>

                    <p>{plant.cost}</p>

                    <button onClick={() => handleAddToCart(plant)}>
                        Add to Cart
                    </button>

                </div>
            ))}

        </div>

    </div>
))}

</div>

            ) : (

                <CartItem onContinueShopping={handleContinueShopping} />

            )}

        </div>
    );
}

export default ProductList;
    

