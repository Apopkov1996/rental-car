import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;

  flex-shrink: 0;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: contain;
`;

export const Div = styled.div`
  display: flex;
  color: #121417;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const DivImg = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpT = styled.span`
  color: #3470ff;
`;
export const DivCar = styled.div`
  display: flex;
  margin-right: auto;
  gap: 3px;
`;

export const TextDesc = styled.p`
  display: flex;
  width: 270px;

  flex-wrap: wrap;
  margin-bottom: auto;

  align-items: flex-start;
  gap: 4px;
  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

export const Btn = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;

  color: #fff;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  &:hover {
    background-color: #0b44cd;
  }
`;

export const BtnSvg = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const SvgF = styled.svg`
  fill: none;
  stroke: white;
  stroke-opacity: 0.8;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;

  &.active {
    fill: #3470ff; /* ваш цвет для активного состояния */
  }
`;
