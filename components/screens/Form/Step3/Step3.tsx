import { Button, Flex, Text, TextInput } from '@react-native-material/core';
import { Field, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {
  setTargetOrganisation,
  setVoivodship,
  setTargetGroup,
  prevStep,
  nextStep,
} from '../../../../app/form';
import { RootState } from '../../../../app/store';
import { targetGroupArr, voivodshipArr } from './consts';
import { StyledButton } from '../../../custom/NavButton';

export const Step3 = () => {
  const dispatch = useDispatch();

  const { targetGroup, targetOrganisation, voivodship } = useSelector(
    (state: RootState) => state.formValues
  );

  const handleCheck = (targetGroup: string) => {
    if (checkboxesValue.includes(targetGroup)) {
      let idx = checkboxesValue.indexOf(targetGroup);
      setCheckboxesValue((prev) => prev.filter((el, id) => el[id] !== el[idx]));
    } else {
      setCheckboxesValue((prev) => [...prev, targetGroup]);
    }
  };

  const handleIsChecked = (targetGroup: string) => {
    return checkboxesValue.includes(targetGroup);
  };

  const [error, setError] = useState<string>('');
  const [selectValue, setSelectValue] = useState(voivodship);
  const [checkboxesValue, setCheckboxesValue] = useState(targetGroup);

  useEffect(() => {
    dispatch(setTargetGroup({ value: checkboxesValue }));
    dispatch(setVoivodship({ value: selectValue }));
    setError('');
  }, [selectValue, checkboxesValue]);

  const validate = (mode: string) => {
    if (selectValue.length === 0) {
      setError((prev) => prev + `wybierz województwo \n`);
      if (checkboxesValue.length === 0) {
        setError((prev) => prev + `wybierz grupę której chcesz pomóc \n`);
      }
    } else {
      if (error.length === 0) {
        mode === 'next' ? dispatch(nextStep()) : dispatch(prevStep());
      }
    }
  };

  return (
    <>
      <Formik
        initialValues={{ targetOrganisation: targetOrganisation }}
        onSubmit={(values) => {
          dispatch(setTargetOrganisation({ value: values.targetOrganisation }));
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <RNPickerSelect
              placeholder={
                selectValue.length === 0
                  ? { label: 'Wybierz wojewódźtwo', value: '' }
                  : {
                      label: `Wybrano ${selectValue} `,
                      value: selectValue,
                    }
              }
              onValueChange={(value) => setSelectValue(value)}
              items={voivodshipArr}
            />
            <Text>Komu chcesz pomóc?</Text>
            {targetGroupArr.map((targetGroup) => (
              <BouncyCheckbox
                key={targetGroup}
                isChecked={handleIsChecked(targetGroup) as boolean | undefined}
                textStyle={{
                  textDecorationLine: 'none',
                }}
                text={targetGroup}
                onPress={() => {
                  handleCheck(targetGroup);
                }}
              />
            ))}

            <Text>Wpisz nazwę konkretnej organizacji (opcjonalnie)</Text>
            <Field
              onChangeText={handleChange('targetOrganisation')}
              value={values.targetOrganisation}
              onBlur={handleSubmit}
              as={TextInput}
            />
            {!!error.length && <Text style={{ color: 'red' }}>{error}</Text>}
            <Flex m={10} justify='center' direction='row'>
              <StyledButton
                title='Cofnij'
                onPress={() => {
                  validate('back');
                }}
              />
              <StyledButton
                title='Dalej'
                onPress={() => {
                  validate('next');
                }}
              />
            </Flex>
          </>
        )}
      </Formik>
    </>
  );
};
