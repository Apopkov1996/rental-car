import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DivHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  gap: 100px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  z-index: 1000;
  background-color: rgb(243, 243, 242);
`;

export const HeaderLink = styled(NavLink)`
  font-size: 28px;
  text-decoration: none;
  color: black;
  padding: 20px 0;

  &:hover {
    color: blue;
  }

  &.active {
    color: darkgray;
  }
`;
