import styled from 'styled-components/native';
import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const ButtonHome = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const Basket = styled.TouchableOpacity`
  flex: 1;
  height: 24px;
  width: 24px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const BasketCount = styled.Text`
  position: absolute;
  font-size: 12px;
  text-align: center;
  background: #7159c1;
  padding: 2px;
  border-radius: 9px;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  color: #fff;
  overflow: hidden;
`;
