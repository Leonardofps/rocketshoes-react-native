import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const ProductOrder = styled.View``;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const DeleteProduct = styled.TouchableOpacity`
  padding: 6px;
`;

export const AmountTools = styled.View`
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  padding: 8px;
  border-radius: 4px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 5px;
  min-width: 50px;
`;

export const TotalItem = styled.Text`
  font-size: 16px;
  font-weight: bold;
  flex: 1;
  text-align: right;
`;

export const ShowTotal = styled.View`
  margin-top: 30px;
`;

export const Total = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #9c9c9c;
  font-size: 20px;
  margin-top: 5px;
`;

export const TotalOrder = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 30px;
`;

export const FinishButton = styled(RectButton)`
  background: #7159c1;
  border-radius: 4px;
  padding: 12px;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const EmptyContainer = styled.View`
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
