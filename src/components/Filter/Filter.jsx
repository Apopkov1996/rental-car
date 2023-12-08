import React, { useState } from 'react';
import {
  Btn,
  DivF,
  FormFilter,
  FormLabel,
  FormSelect,
  FormSelectContainer,
  Icon,
  Text,
} from './Filter.styled';
import svg from '../../img/Sprite.svg';

export const FilterForm = ({ onFilter }) => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    onFilter({
      brand: selectedBrand,
    });
  };
  return (
    <DivF>
      <FormFilter onSubmit={handleSubmit}>
        <FormLabel>
          <Text>Car brand</Text>

          <FormSelectContainer>
            <FormSelect
              value={selectedBrand}
              onChange={e => setSelectedBrand(e.target.value)}
              isOpen={isOpen}
              onBlur={() => setIsOpen(false)}
            >
              <option value="">All Brands</option>
              <option value="Buick">Buick</option>
              <option value="Volvo">Volvo</option>
              <option value="HUMMER">HUMMER</option>
              <option value="Subaru">Subaru</option>
              <option value="Mitsubishi">Mitsubishi</option>
              <option value="Nissan">Nissan</option>
              <option value="Lincoln">Lincoln</option>
              <option value="GMC">GMC</option>
              <option value="Hyundai">Hyundai</option>
              <option value="MINI">MINI</option>
              <option value="Bentley">Bentley</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Aston Martin">Aston Martin</option>
              <option value="Pontiac">Pontiac</option>
              <option value="Lamborghini">Lamborghini</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Chrysler">Chrysler</option>
              <option value="Kia">Kia</option>
              <option value="Land">Land</option>
            </FormSelect>
            <Icon width={16} height={16}>
              <use href={svg + '#icon-chevron-down'}></use>
            </Icon>
          </FormSelectContainer>
        </FormLabel>

        <Btn type="submit">Search</Btn>
      </FormFilter>
    </DivF>
  );
};
