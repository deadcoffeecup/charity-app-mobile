import React, { ReactNode, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Flex, Text } from '@react-native-material/core';
import { IconComponentProvider, Icon } from '@react-native-material/core';

import { RootState } from '../../../../app/store';
import Main from '../../Main';
import { Footer } from '../../Main/Footer';
import { setStep } from '../../../../app/form';
import { ScrollView } from 'react-native-gesture-handler';

export const FormWrapper: FC<ReactNode> = ({ children }) => {
  const { stepNumber } = useSelector((state: RootState) => state.formValues);
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Text>
        Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM Wystarczą 4 proste
        kroki
      </Text>
      {children}
      <Footer />
    </ScrollView>
  );
};
