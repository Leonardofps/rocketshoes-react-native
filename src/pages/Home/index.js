import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import {
  ProductList,
  Image,
  ProductDetail,
  ProductPrice,
  AddButton,
  ShoppingCart,
  AddText,
  AmountText,
} from './styles';

class Home extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  renderProduct = ({ item }) => {
    const { amount } = this.props;
    return (
      <ProductList key={item.id}>
        <Image source={{ uri: item.image }} />
        <ProductDetail>{item.title}</ProductDetail>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddButton onPress={() => this.handleAddProduct(item.id)}>
          <ShoppingCart>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <AmountText>{amount[item.id] || 0}</AmountText>
          </ShoppingCart>
          <AddText> Adicionar </AddText>
        </AddButton>
      </ProductList>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <FlatList
        horizontal
        data={products}
        extraData={this.props}
        keyExtractor={product => String(product.id)}
        renderItem={this.renderProduct}
      />
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
