import styled from 'styled-components';

export const DivF = styled.div`
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  color: #8a8a89;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

export const Btn = styled.button`
  display: block;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  width: 136px;
  height: 48px;

  color: #fff;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
`;

export const FormFilter = styled.form`
  display: flex;
  gap: 18px;
  align-items: flex-end;
  justify-content: center;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormSelect = styled.select`
  display: flex;
  padding: 14px 160px 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  outline: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const FormSelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: black;
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%)
    rotate(${props => (props.isOpen ? '180deg' : '0deg')});
  transition: transform 0.3s ease;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: rgba(138, 138, 137, 1);
  font-family: 'Manrope';
  padding-left: 5px;
  margin-bottom: 8px;
`;
