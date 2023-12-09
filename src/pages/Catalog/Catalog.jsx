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

const Catalog = () => {
  const dispatch = useDispatch();
  const сarsList = useSelector(selectCarsList);
  const loader = useSelector(selectLoader);
  const error = useSelector(selectError);

  const [selectedBrand, setSelectedBrand] = useState('');

  const [page, setPage] = useState(1);

  const filteredCars = useMemo(() => {
    return сarsList.filter(car => {
      return !selectedBrand || car.make === selectedBrand;
    });
  }, [сarsList, selectedBrand]);

  useEffect(() => {
    dispatch(getCarsListThunk(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
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
        {page < 3 && (
          <Btn type="button" onClick={handleLoadMore}>
            Load more
          </Btn>
        )}
      </DivBtn>
    </Div>
  );
};

export default Catalog;
