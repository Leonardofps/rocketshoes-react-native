import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Container, Logo, Basket, BasketCount, ButtonHome } from './styles';

function Header({ navigation, cartSize }) {
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

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
