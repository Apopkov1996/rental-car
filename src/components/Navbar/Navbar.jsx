import React from 'react';
import { DivHeader, HeaderLink } from './Navbar.styled';

export const Navbar = () => {
  return (
    <DivHeader>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/catalog">Catalog</HeaderLink>
      <HeaderLink to="/favorites">Favorites</HeaderLink>
    </DivHeader>
  );
};
