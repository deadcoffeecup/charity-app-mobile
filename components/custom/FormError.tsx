import React, { FC } from 'react';
import { Text } from '@react-native-material/core';
import styled from 'styled-components';

const StyledFormError = styled(Text)`
  color: #f55;
`;
interface ErrorType {
  error: string;
}

export const FormError: FC<ErrorType> = ({ error }) => {
  return <StyledFormError>{error}</StyledFormError>;
};
