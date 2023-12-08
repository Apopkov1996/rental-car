import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Close from '../../img/close.svg';
import Button from 'components/Button/Button';
import {
  Wrapper,
  CloseIcon,
  IconX,
  Wrap,
  Image,
  TextWrap,
  Title,
  Span,
  List,
  Item,
  Description,
  Info,
  ConditionItem,
  ConditionList,
  ConditionSpan,
} from './Modal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 541,
  maxHeight: 830,
  bgcolor: 'background.paper',
  borderRadius: 6,
  boxShadow: 24,
};

export default function BasicModal({ open, onClose, car }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Wrapper>
            <CloseIcon onClick={onClose}>
              <IconX src={Close} alt="Close button" />
            </CloseIcon>
            <Image src={car.img} alt={car.make} width="461" height="248" />
            <Wrap>
              <TextWrap>
                <Title>
                  {car.make} <Span>{car.model}, </Span>
                  {car.year}
                </Title>
              </TextWrap>
              <List>
                <Item>{car.address.split(',')[1]}</Item>
                <Item>{car.address.split(',')[2]}</Item>
                <Item>Id:{car.id} </Item>
                <Item>Year: {car.year}</Item>
                <Item>Type: {car.type}</Item>
              </List>
              <List>
                <Item>Fuel Consumption: {car.fuelConsumption}</Item>
                <Item>Engine Size: {car.engineSize}</Item>
              </List>
              <Description>{car.description}</Description>
              <Info>Accessories and functionalities:</Info>
              <List>
                {car.accessories.map(item => (
                  <Item key={item}>{item}</Item>
                ))}
              </List>
              <List>
                {car.functionalities.map(item => (
                  <Item key={item}>{item}</Item>
                ))}
              </List>
              <Info>Rental Conditions:</Info>
              <ConditionList>
                <ConditionItem>
                  Minimum age:{' '}
                  <ConditionSpan>
                    {new Date().getFullYear() - car.year}
                  </ConditionSpan>
                </ConditionItem>
                <ConditionItem>
                  {car.rentalConditions.split('\n')[1]}
                </ConditionItem>
                <ConditionItem>
                  {car.rentalConditions.split('\n')[2]}
                </ConditionItem>
                <ConditionItem>
                  Mileage: <ConditionSpan>{car.mileage}</ConditionSpan>
                </ConditionItem>
                <ConditionItem>
                  Price: <ConditionSpan>{car.rentalPrice}</ConditionSpan>
                </ConditionItem>
              </ConditionList>
            </Wrap>
            <Button
              text="Rental car"
              width="168px"
              onClick={() => {
                window.location.href = 'tel:+380730000000';
              }}
            />
          </Wrapper>
        </Box>
      </Modal>
    </div>
  );
}
