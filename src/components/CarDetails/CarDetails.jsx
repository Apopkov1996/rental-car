import React from 'react';
import { Item } from './CarDetails.styled';

export const CarItem = ({ car }) => {
  const city = car.address.split(',')[1]?.trim() || 'Unknown City';
  const country = car.address.split(',')[2]?.trim() || 'Unknown City';

  return (
    <Item key={car.id}>
      <img src={car.img} alt={`Car ${car.make}`} />
      <p>{car.make}</p>
      <p>{car.model}</p>
      <p>{car.year}</p>
      <p>{car.rentalPrice}</p>
      <p>
        {city} <span>|</span> {country} <span>|</span> {car.rentalCompany}{' '}
        <span>|</span> {car.type} <span>|</span> {car.model} <span>|</span>{' '}
        {car.make} <span>|</span> {car.mileage} <span>|</span>{' '}
        {car.functionalities[0]}
      </p>
      <button>Learn more</button>
    </Item>
  );
};
