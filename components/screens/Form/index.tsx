import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Flex, Text } from '@react-native-material/core';
import { IconComponentProvider, Icon } from '@react-native-material/core';

import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Summary } from './Summary';
import { RootState } from '../../../app/store';
import Main from '../Main';
import { Footer } from '../Main/Footer';
import { setStep } from '../../../app/form';
import { ScrollView } from 'react-native-gesture-handler';

export default function () {
  const { stepNumber } = useSelector((state: RootState) => state.formValues);
  const dispatch = useDispatch();
  const pagination = () => {
    const paginationArr = [];
    for (let index: number = 1; index < 6; index++) {
      paginationArr.push(
        <Button
          key={index}
          style={
            index === stepNumber
              ? { backgroundColor: 'cadetblue' }
              : index > stepNumber
              ? { backgroundColor: 'lightgray' }
              : { backgroundColor: '#5f9ea095' }
          }
          title={index === 5 ? '$' : index.toString()}
          disabled={index > stepNumber ? true : false}
          onPress={() => dispatch(setStep(index))}
        />
      );
    }
    return (
      <Flex justify='center' direction='row'>
        {paginationArr.map((el) => el)}
      </Flex>
    );
  };

  const renderStep = (step: number) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Summary />;
      default:
        return <Main />;
    }
  };
  return (
    <ScrollView>
      <Text>
        Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM Wystarczą 4 proste
        kroki
      </Text>
      {pagination()}
      {renderStep(stepNumber)}
      <Footer />
    </ScrollView>
  );
}
