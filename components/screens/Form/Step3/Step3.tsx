import { Box, Flex, Text, TextInput } from '@react-native-material/core';
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
import { StyledButton } from '../../../custom/Buttons/NavButton';
import { PickerIcon } from '../../../custom/Icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';

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
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
        mode === 'next' &&
          navigation.navigate('Step2' as keyof RootStackParamList);
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
          <Box mh={10} mv={10}>
            <RNPickerSelect
              Icon={PickerIcon}
              style={{
                inputIOS: { fontSize: 20 },
                inputAndroid: { fontSize: 20 },
                placeholder: { color: '#3339' },
              }}
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
            <Box mv={20}>
              <Text>Komu chcesz pomóc?</Text>
              {targetGroupArr.map((targetGroup) => (
                <BouncyCheckbox
                  key={targetGroup}
                  isChecked={
                    handleIsChecked(targetGroup) as boolean | undefined
                  }
                  textStyle={{
                    textDecorationLine: 'none',
                  }}
                  text={targetGroup}
                  onPress={() => {
                    handleCheck(targetGroup);
                  }}
                />
              ))}
            </Box>
            <Text>Wpisz nazwę konkretnej organizacji (opcjonalnie)</Text>
            <Field
              color={'cadetblue'}
              onChangeText={handleChange('targetOrganisation')}
              value={values.targetOrganisation}
              onBlur={handleSubmit}
              as={TextInput}
            />
            {!!error.length && <Text style={{ color: 'red' }}>{error}</Text>}
            <Flex w={'80%'} m={30} justify='center' direction='row'>
              <StyledButton
                title='Cofnij'
                onPress={() => {
                  navigation.navigate('Step2' as keyof RootStackParamList);
                }}
              />
              <StyledButton
                title='Dalej'
                onPress={() => {
                  validate('next');
                }}
              />
            </Flex>
          </Box>
        )}
      </Formik>
    </>
  );
};
