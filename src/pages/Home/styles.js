import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View``;

export const ProductList = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const Image = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductDetail = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddButton = styled(RectButton)`
  background: #7159c1;
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  margin-top: auto;
`;

export const ShoppingCart = styled.View`
  align-items: center;
  flex-direction: row;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const AddText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const AmountText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 5px;
  font-size: 15px;
`;
