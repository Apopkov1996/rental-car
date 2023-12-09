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
import { Btn, CarList, Div, DivBtn } from './Catalog.styled';
import { FilterForm } from 'components/Filter/Filter';
import { loadMoreCarsSuccess } from '../../redux/cars/slice';

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

  console.log(filteredCars);
  // console.log(CarList);

  const handleLoadMore = () => {
    dispatch(getCarsListThunk(currentPage + 1))
      .then(newCars => {
        dispatch(loadMoreCarsSuccess(newCars));
      })
      .catch(error => {});
  };

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
      <DivBtn>
        <Btn onClick={handleLoadMore}>Load more</Btn>
      </DivBtn>
    </Div>
  );
};

export default Catalog;
