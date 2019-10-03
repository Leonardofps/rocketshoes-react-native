import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  ProductOrder,
  Product,
  ProductInfo,
  Image,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  DeleteProduct,
  AmountTools,
  ProductControlButton,
  ProductAmount,
  TotalItem,
  ShowTotal,
  Total,
  TotalOrder,
  FinishButton,
  TextButton,
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart.length ? (
        <>
          <ScrollView>
            <ProductOrder>
              {cart.map(product => (
                <Product key={product.id}>
                  <ProductInfo>
                    <Image source={{ uri: product.image }} />
                    <ProductDetails>
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductPrice>{product.priceFormatted}</ProductPrice>
                    </ProductDetails>
                    <DeleteProduct onPress={() => removeFromCart(product.id)}>
                      <Icon name="delete-forever" color="#7159c1" size={32} />
                    </DeleteProduct>
                  </ProductInfo>
                  <AmountTools>
                    <ProductControlButton onPress={() => decrement(product)}>
                      <Icon
                        name="remove-circle-outline"
                        color="#7159c1"
                        size={20}
                      />
                    </ProductControlButton>
                    <ProductAmount value={String(product.amount)} />
                    <ProductControlButton onPress={() => increment(product)}>
                      <Icon
                        name="add-circle-outline"
                        color="#7159c1"
                        size={20}
                      />
                    </ProductControlButton>
                    <TotalItem> {product.subtotal} </TotalItem>
                  </AmountTools>
                </Product>
              ))}
            </ProductOrder>
            <ShowTotal>
              <Total>TOTAL</Total>
              <TotalOrder>{total}</TotalOrder>
              <FinishButton>
                <TextButton>FINALIZAR PEDIDO</TextButton>
              </FinishButton>
            </ShowTotal>
          </ScrollView>
        </>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),

  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
