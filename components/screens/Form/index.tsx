import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Flex, Text } from '@react-native-material/core';

import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Summary } from './Summary';
import { RootState } from '../../../app/store';
import Main from '../Main';
import { Footer } from '../Main/Footer';

export default function () {
  const { stepNumber } = useSelector((state: RootState) => state.formValues);

  const pagination = () => {
    const paginationArr = [];
    for (let index: number = 1; index < 6; index++) {
      paginationArr.push(
        <Button
          style={
            index === stepNumber
              ? { backgroundColor: 'blue' }
              : index > stepNumber
              ? { backgroundColor: 'gray' }
              : { backgroundColor: 'green' }
          }
          title={index === 5 ? '$' : index.toString()}
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
    <>
      <Text>
        Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM Wystarczą 4 proste
        kroki
      </Text>
      {pagination()}
      {renderStep(stepNumber)}
      <Footer />
    </>
  );
}
