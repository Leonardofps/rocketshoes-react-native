import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ProductList = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 250px;
  height: 335px;
`;

export const AddButton = styled(RectButton)`
  background: #7159c1;
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
`;

export const ShoppingCart = styled.View`
  align-items: center;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const AddText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin: 0px 4px 0px 40px;
`;

export const AmountText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 5px;
  font-size: 15px;
`;

export const Image = styled.Image`
  height: 200px;
  width: 200px;
  align-self: center;
`;
export const ProductDetail = styled.Text`
  color: #000;
  font-size: 15px;
  text-align: left;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  padding: 5px;
`;
