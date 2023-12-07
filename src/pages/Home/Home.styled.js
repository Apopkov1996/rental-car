import styled from 'styled-components';
import backgroundImage from '../../img/backimg.jpeg';
import { Link } from 'react-router-dom';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgroundImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Text = styled.p`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  width: 650 px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
`;

export const Span = styled.span`
  color: red;
  font-weight: bold;
`;

export const Button = styled(Link)`
  display: flex;
  width: 140px;
  height: 2px;
  padding: 30px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #0b44cd;
  }
`;
