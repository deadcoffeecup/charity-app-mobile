import React from 'react';
import { useSelector } from 'react-redux';

import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Summary } from './Summary';
import { RootState } from '../../../app/store';
import { View } from 'react-native';
import Main from '../Main';

export default function () {
  const { stepNumber } = useSelector((state: RootState) => state.formValues);

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
  return <>{renderStep(stepNumber)}</>;
}
