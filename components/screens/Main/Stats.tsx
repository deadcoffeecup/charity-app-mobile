import { Button, Flex, Text } from '@react-native-material/core';
import React, { FC, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../../../firebaseConfig';

export const Stats: FC<any> = ({ navigation }) => {
  const [numberOfPackages, setNumberOfPackages] = useState(0);
  const sub = async () => {
    const querySnapshot = await getDocs(collection(db, 'packageOrders'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setNumberOfPackages((prev) => prev + 1);
      // console.warn(doc.id, ' => ', doc.data());
    });
  };
  useEffect(() => {
    sub();
  }, []);

  return (
    <Flex direction='row'>
      <Button
        title='Oddaj rzeczy'
        onPress={() => navigation.navigate('Form')}
      />
      <Text>Stats:{numberOfPackages}</Text>
    </Flex>
  );
};
