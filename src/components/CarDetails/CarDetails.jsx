import React, { useState } from 'react';
import {
  Btn,
  BtnSvg,
  Div,
  DivCar,
  DivImg,
  Item,
  SpT,
  SvgF,
  TextDesc,
} from './CarDetails.styled';
import BasicModal from 'components/Modal/Modal';
import svg from '../../img/Sprite.svg';

export const CarItem = ({ car }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isActive, setIsActive] = useState(false);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const city = car.address.split(',')[1]?.trim() || 'Unknown City';
  const country = car.address.split(',')[2]?.trim() || 'Unknown City';

  return (
    <Item key={car.id}>
      <BtnSvg onClick={handleToggleActive}>
        <SvgF className={isActive ? 'active' : ''} width="18" height="18">
          <use href={svg + '#icon-normal'}></use>
        </SvgF>
      </BtnSvg>
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
