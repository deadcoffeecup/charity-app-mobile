import React from 'react';
import { Button, Flex } from '@react-native-material/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setStep } from '../../app/form';

export const Pagination = () => {
  const { stepNumber } = useSelector((state: RootState) => state.formValues);
  const dispatch = useDispatch();
  const paginationArr = [] as JSX.Element[];
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
