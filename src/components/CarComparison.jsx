import React, { useState } from 'react';
import ComparableCarForm from './ComparableCarForm';

const CarComparison = () => {
    const [prices, setPrices] = useState([0, 0, 0]);

    const handleRealPriceChange = (index, realPrice) => {
        const newPrices = [...prices];
        newPrices[index] = realPrice;
        setPrices(newPrices);
    };

    const calculateAveragePrice = () => {
        const total = prices.reduce((acc, price) => acc + price, 0);
        return total / prices.length;
    };

    return (
        <div>
            <div className="comparison-container">
                {[0, 1, 2].map(index => (
                    <ComparableCarForm
                        key={index}
                        onRealPriceChange={(realPrice) => handleRealPriceChange(index, realPrice)}
                    />
                ))}
            </div>
            <div className="average-price">
                <p>Average Price: {calculateAveragePrice()} CAD</p>
            </div>
        </div>
    );
};

export default CarComparison;
