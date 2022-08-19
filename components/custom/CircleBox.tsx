import { Text, Box } from '@react-native-material/core';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: cadetblue;
`;
const BoxText = styled(Text)`
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  color: #fff;
`;

export const CircleBox: FC<ReactNode> = ({ children }) => {
  return (
    <StyledBox>
      <BoxText>{children}</BoxText>
    </StyledBox>
  );
};
