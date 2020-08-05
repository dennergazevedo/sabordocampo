/* eslint-disable no-restricted-globals */
import React from 'react';

// STYLED COMPONENTS
import { 
    Container,
    Button,
    ButtonMobile,
    Title,
} from './styles';

// ICONS
import{
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
} from 'react-icons/md';

// COMPONENTS
import Product from './Product.jsx';

function Slider() {
  return (
      <>
        <Title>Outros Produtos</Title>
        <Container>

            {
                screen.width > 730 && window.innerWidth > 730 ?
                <Button>
                    <MdKeyboardArrowLeft />
                </Button>
                :
                <ButtonMobile>
                    <MdKeyboardArrowUp />
                </ButtonMobile>
            }

            <Product />
            <Product />
            <Product />

            {
                screen.width > 730 && window.innerWidth > 730 ?
                <Button>
                    <MdKeyboardArrowRight />
                </Button>
                :
                <ButtonMobile>
                    <MdKeyboardArrowDown />
                </ButtonMobile>
            }
            
        </Container>
      </>
  );
}

export default Slider;