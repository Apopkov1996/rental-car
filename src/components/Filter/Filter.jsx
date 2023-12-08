import React, { useState } from 'react';
import { Btn, DivF, FormFilter, SelectContainer, Text } from './Filter.styled';
// import svg from '../../img/Sprite.svg';
import Select from 'react-select';

const options = [
  { value: '', label: 'All Brands' },
  { value: 'Buick', label: 'Buick' },
  { value: 'Volvo', label: 'Volvo' },
  { value: 'HUMMER', label: 'HUMMER' },
  { value: 'Subaru', label: 'Subaru' },
  { value: 'Mitsubishi', label: 'Mitsubishi' },
  { value: 'Nissan', label: 'Nissan' },
  { value: 'Lincoln', label: 'Lincoln' },
  { value: 'GMC', label: 'GMC' },
  { value: 'Hyundai', label: 'Hyundai' },
  { value: 'MINI', label: 'MINI' },
  { value: 'Bentley', label: 'Bentley' },
  { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
  { value: 'Aston Martin', label: 'Aston Martin' },
  { value: 'Pontiac', label: 'Pontiac' },
  { value: 'Lamborghini', label: 'Lamborghini' },
  { value: 'Audi', label: 'Audi' },
  { value: 'BMW', label: 'BMW' },
  { value: 'Chevrolet', label: 'Chevrolet' },
  { value: 'Chrysler', label: 'Chrysler' },
  { value: 'Kia', label: 'Kia' },
  { value: 'Land', label: 'Land' },
];
export const FilterForm = ({ makes, onFilter }) => {
  const [selectedBrand, setSelectedBrand] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onFilter({
      brand: selectedBrand,
    });
  };
  return (
    <DivF>
      <FormFilter onSubmit={handleSubmit}>
        <SelectContainer>
          <Text>Car brand</Text>
          <Select
            placeholder="Enter the text"
            value={options.find(option => option.value === selectedBrand)}
            onChange={selectedOption => setSelectedBrand(selectedOption.value)}
            options={options}
            styles={{
              control: styles => ({
                ...styles,
                width: '224px',
                height: '48px',
                borderColor: 'rgba(18, 20, 23, 0.2)',
                border: 'none',
                borderRadius: '14px',
                padding: '8px',
                fontSize: '16px',
                fontFamily: 'Manrope',
                backgroundColor: 'rgba(247, 247, 251, 1)',
                appearance: 'none',
              }),
              option: (styles, { isFocused }) => {
                return {
                  ...styles,
                  color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
                  fontFamily: 'Manrope',
                };
              },

              placeholder: styles => ({
                ...styles,
                color: 'rgba(18, 20, 23, 1)',
              }),
            }}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
        </SelectContainer>

        <Btn type="submit">Search</Btn>
      </FormFilter>
    </DivF>
  );
};
