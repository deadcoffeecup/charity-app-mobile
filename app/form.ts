import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type FormValuesType = {
  stepNumber: number;
  stuff: string[] | undefined;
  numberOfBags: number;
  voivodship: string;
  targetGroup: string[];
  targetOrganisation?: string;
  adress: adressType;
  dateOfReceipt: dateOfReceiptType;
};
interface dateOfReceiptType {
  date: Date | undefined;
  time: Date | undefined;
  notesForCourier?: string;
}
interface adressType {
  street: string;
  city: string;
  zipCode: string;
  telephoneNumber: number | undefined;
}

export const initialState: FormValuesType = {
  stepNumber: 1,
  stuff: [],
  numberOfBags: 0,
  voivodship: '',
  targetGroup: [],
  adress: {
    street: '',
    city: '',
    zipCode: '',
    telephoneNumber: undefined,
  },
  dateOfReceipt: {
    date: undefined,
    time: undefined,
  },
};

export const formSlice = createSlice({
  name: 'formValues',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.stepNumber += 1;
    },
    prevStep: (state) => {
      state.stepNumber -= 1;
    },
    setStuff: (state, action: PayloadAction<{ value: string[] }>) => {
      state.stuff = action.payload.value;
    },
    setNumberOfBags: (state, action: PayloadAction<{ value: number }>) => {
      state.numberOfBags = action.payload.value;
    },
    setVoivodship: (state, action: PayloadAction<{ value: string }>) => {
      state.voivodship = action.payload.value;
    },
    setTargetGroup: (state, action: PayloadAction<{ value: string[] }>) => {
      state.targetGroup = action.payload.value;
    },
    setTargetOrganisation: (
      state,
      action: PayloadAction<{ value: string }>
    ) => {
      state.targetOrganisation = action.payload.value;
    },
    setAdress: (state, action: PayloadAction<{ value: adressType }>) => {
      state.adress = action.payload.value;
    },
    setDateOfReceipt: (
      state,
      action: PayloadAction<{ value: dateOfReceiptType }>
    ) => {
      state.dateOfReceipt = action.payload.value;
    },
  },
});

export const {
  nextStep,
  prevStep,
  setStuff,
  setNumberOfBags,
  setVoivodship,
  setTargetGroup,
} = formSlice.actions;

export const selectForm = (state: RootState) => state.formValues;

export default formSlice.reducer;
