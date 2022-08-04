import { Field } from 'formik';
import React from 'react';

export const Step2 = () => {
  return (
    <Field as='select' name='color'>
      <option value='red'>Red</option>
      <option value='green'>Green</option>
      <option value='blue'>Blue</option>
    </Field>
  );
};
