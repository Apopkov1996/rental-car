import React, { useState } from 'react';
import {
  Btn,
  Div,
  DivCar,
  DivImg,
  Item,
  SpT,
  TextDesc,
} from './CarDetails.styled';
import BasicModal from 'components/Modal/Modal';

export const CarItem = ({ car }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const city = car.address.split(',')[1]?.trim() || 'Unknown City';
  const country = car.address.split(',')[2]?.trim() || 'Unknown City';

  return (
    <Item key={car.id}>
      <DivImg>
        <img src={car.img} alt={`Car ${car.make}`} width={401} height={270} />
      </DivImg>

      <Div>
        <DivCar>
          <p>{car.make} </p> <SpT>{car.model}, </SpT>
          <p>{car.year}</p>
        </DivCar>

        <p>{car.rentalPrice}</p>
      </Div>

      <TextDesc>
        {city} <span>|</span> {country} <span>|</span> {car.rentalCompany}{' '}
        <span>|</span> {car.type} <span>|</span> {car.model} <span>|</span>{' '}
        {car.make} <span>|</span> {car.mileage} <span>|</span>{' '}
        {car.functionalities[0]}
      </TextDesc>
      <Btn onClick={handleOpen}>Learn more</Btn>
      {open && <BasicModal open={open} onClose={handleClose} car={car} />}
    </Item>
  );
};
