import React, { ReactNode, FC } from 'react';

import { Text } from '@react-native-material/core';
import { Footer } from '../screens/Main/Footer';
import { ScrollView } from 'react-native-gesture-handler';
import { Pagination } from './Pagination';

export const FormWrapper: FC<ReactNode> = ({ children }) => {
  return (
    <ScrollView>
      <Text>
        Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM Wystarczą 4 proste
        kroki
      </Text>
      <Pagination />
      {children}
      <Footer />
    </ScrollView>
  );
};
