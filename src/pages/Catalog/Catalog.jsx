import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsListThunk } from '../../redux/cars/operations';
import {
  selectCarsList,
  selectCurrentPage,
  selectError,
  selectLoader,
} from '../../redux/cars/selectors';
import { CarItem } from 'components/CarDetails/CarDetails';
import { CarList, Div } from './Catalog.styled';
import { FilterForm } from 'components/Filter/Filter';

const Catalog = () => {
  const dispatch = useDispatch();
  const сarsList = useSelector(selectCarsList);
  const loader = useSelector(selectLoader);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectCurrentPage);

  const [selectedBrand, setSelectedBrand] = useState('');

  const filteredCars = useMemo(() => {
    return сarsList.filter(car => {
      return !selectedBrand || car.make === selectedBrand;
    });
  }, [сarsList, selectedBrand]);

  useEffect(() => {
    dispatch(getCarsListThunk(currentPage));
  }, [dispatch, currentPage]);

  if (loader) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <Div>
      <FilterForm
        onFilter={({ brand }) => {
          setSelectedBrand(brand);
        }}
      />
      <CarList>
        {filteredCars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </CarList>
    </Div>
  );
};

export default Catalog;
