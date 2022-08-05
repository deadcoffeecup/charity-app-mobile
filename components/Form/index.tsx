import { Text } from '@react-native-material/core';
import { Formik } from 'formik';
import React, { FC, ReactNode, useRef, useState } from 'react';

import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';

import { initialState as initialValues } from '../../app/form';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

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
      default:
        break;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      {...renderStep(stepNumber)}
    ></Formik>
  );
}
