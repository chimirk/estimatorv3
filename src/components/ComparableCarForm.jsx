import React, { useState } from 'react';

const ComparableCarForm = ({onRealPriceChange}, {key}) => {
    const [car, setCar] = useState({
        make: '',
        model: '',
        price: '',
        trim: '',
        year: '',
        mileage: '',
        other: '',
    });
    const [, setRealPrice] = useState(0);
    const [, setEstimatedDifference] = useState(0);

    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        var price = parseFloat(car.price) || 0;
        var trim = parseFloat(car.trim) || 0;
        var year = parseFloat(car.year) || 0;
        var mileage = parseFloat(car.mileage) || 0;
        var other = parseFloat(car.other) || 0;
        var difference = trim + year + mileage + other;
        var realPrice = price + difference;
        setEstimatedDifference(difference);
        setRealPrice(realPrice)
        onRealPriceChange(realPrice)
    };

    return (
        <form className="vertical-form" onSubmit={handleSubmit}>
            <h3>Comparable {key}</h3>
            <input type="text" name="make" value={car.make} onChange={handleChange} placeholder="Make" />
            <input type="text" name="model" value={car.model} onChange={handleChange} placeholder="Model" />
            <input type="number" name="price" value={car.price} onChange={handleChange} placeholder="Price" />
            <input type="number" name="trim" value={car.trim} onChange={handleChange} placeholder="Trim" />
            <input type="number" name="year" value={car.year} onChange={handleChange} placeholder="Year" />
            <input type="number" name="mileage" value={car.mileage} onChange={handleChange} placeholder="Mileage" />
            <input type="number" name="other" value={car.other} onChange={handleChange} placeholder="Other" />
            <br/>
            <button className = "button" type="submit">Submit</button>
        </form>
    );
};

export default ComparableCarForm;