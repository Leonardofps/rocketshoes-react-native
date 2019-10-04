import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { Container, Logo, Basket, BasketCount, ButtonHome } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <ButtonHome onPress={() => navigation.navigate('Home')}>
        <Logo />
      </ButtonHome>
      <Basket onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <BasketCount> {cartSize} </BasketCount>
      </Basket>
    </Container>
  );
}
