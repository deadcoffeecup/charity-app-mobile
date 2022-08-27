import { Dispatch, SetStateAction } from 'react';

export const handleCheck = (
  item: string,
  values: string[],
  setValues: Dispatch<SetStateAction<string[]>>
) => {
  if (values.includes(item)) {
    let idx = values.indexOf(item);
    setValues((prev) => prev.filter((el, id) => el[id] !== el[idx]));
  } else {
    setValues((prev) => [...prev, item]);
  }
};

export const handleInitialValue = (item: string, values: string[]) => {
  return values.includes(item);
};
