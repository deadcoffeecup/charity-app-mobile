import React from 'react';
import { Flex } from '@react-native-material/core';

const Pagination = () => {
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
