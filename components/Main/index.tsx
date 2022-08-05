import { Text } from '@react-native-material/core';
import { Formik } from 'formik';
import React, { FC, ReactNode, useRef, useState } from 'react';

import { ScrollView } from 'react-native';
import { Footer } from './Footer';
import { WelcomeBanner } from './WelcomeBanner';
import { Instructions } from './Instructions';
import { WhoWeHelp } from './WhoWeHelp';

export default function () {
  return (
    <ScrollView>
      <WelcomeBanner />
      <WhoWeHelp />
      <Instructions />
      <Footer />
    </ScrollView>
  );
}
