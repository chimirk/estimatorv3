import React, { useState } from 'react';
//
//
const EvaluatedCarForm = () => {
    const [car, setCar] = useState({
        make: '',
        model: '',
        price: '',
        trim: '',
        year: '',
        mileage: '',
        other: '',
    });

    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    return (
        <form className="vertical-form">
            <h3>Evaluated Car</h3>
            <input type="text" name="make" value={car.make} onChange={handleChange} placeholder="Make" />
            <input type="text" name="model" value={car.model} onChange={handleChange} placeholder="Model" />
            <input type="text" name="price" value={car.price} onChange={handleChange} placeholder="Price" />
            <input type="text" name="trim" value={car.trim} onChange={handleChange} placeholder="Trim" />
            <input type="text" name="year" value={car.year} onChange={handleChange} placeholder="Year" />
            <input type="text" name="mileage" value={car.mileage} onChange={handleChange} placeholder="Mileage" />
            <input type="text" name="other" value={car.other} onChange={handleChange} placeholder="Other" />
        </form>
    );
};

export default EvaluatedCarForm;