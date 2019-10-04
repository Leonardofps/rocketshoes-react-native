import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import {
  Container,
  ProductList,
  Image,
  ProductDetail,
  ProductPrice,
  AddButton,
  ShoppingCart,
  AddText,
  AmountText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    getProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <ProductList key={item.id}>
        <Image source={{ uri: item.image }} />
        <ProductDetail>{item.title}</ProductDetail>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddButton onPress={() => handleAddProduct(item.id)}>
          <ShoppingCart>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <AmountText>{amount[item.id] || 0}</AmountText>
          </ShoppingCart>
          <AddText> Adicionar </AddText>
        </AddButton>
      </ProductList>
    );
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        extraData={amount}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </Container>
  );
}

Home.propTypes = {
  item: PropTypes.object,
};
