import React, { useState } from 'react';

export const FilterForm = ({ onFilter }) => {
  const [brand, setBrand] = useState('');
  const [rentalPrice, setRentalPrice] = useState(10);
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onFilter({ brand, rentalPrice, mileageFrom, mileageTo });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Car brand
        <select value={brand} onChange={e => setBrand(e.target.value)}>
          <option value="">All Brands</option>
          <option value="Brand2">Buick</option>
          <option value="Brand3">Volvo</option>
          <option value="Brand4">HUMMER</option>
          <option value="Brand5">Subaru</option>
          <option value="Brand6">Mitsubishi</option>
          <option value="Brand7">Nissan</option>
          <option value="Brand8">Lincoln</option>
          <option value="Brand9">GMC</option>
          <option value="Brand10">Hyundai</option>
          <option value="Brand11">MINI</option>
          <option value="Brand12">Bentley</option>
          <option value="Brand13">Mercedes-Benz</option>
          <option value="Brand14">Aston Martin</option>
          <option value="Brand15">Pontiac</option>
          <option value="Brand16">Lamborghini</option>
          <option value="Brand17">Audi</option>
          <option value="Brand18">BMW</option>
          <option value="Brand19">Chevrolet</option>
          <option value="Brand20">Mercedes-Benz</option>
          <option value="Brand21">Chrysler</option>
          <option value="Brand22">Kia</option>
          <option value="Brand23">Land</option>
        </select>
      </label>

      <label>
        Price/ 1 hour
        <select
          value={rentalPrice}
          onChange={e => setRentalPrice(Number(e.target.value))}
        >
          {/* Выпадающий список с ценами за день */}
          {[...Array(15).keys()].map(step => (
            <option key={step} value={10 + step * 10}>
              ${10 + step * 10}
            </option>
          ))}
        </select>
      </label>

      <label>
        Сar mileage / km
        <input
          type="number"
          placeholder="From"
          value={mileageFrom}
          onChange={e => setMileageFrom(e.target.value)}
        />
        <input
          type="number"
          placeholder="To"
          value={mileageTo}
          onChange={e => setMileageTo(e.target.value)}
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};
