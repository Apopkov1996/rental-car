import { CarItem } from '../../components/CarDetails/CarDetails';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favourites/selectors';
import { CarList, Div } from 'pages/Catalog/Catalog.styled';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Div>
      <CarList>
        {favorites.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </CarList>
    </Div>
  );
};

export default Favorites;
