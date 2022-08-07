import React from 'react';
import { ScrollView } from 'react-native';

import { Footer } from './Footer';
import { WelcomeBanner } from './WelcomeBanner';
import { Instructions } from './Instructions';
import { WhoWeHelp } from './WhoWeHelp';
import { useAuth } from '../../../context/AuthContext';
import { Stats } from './Stats';
import { OpenFormBanner } from './OpenFormBanner';

export default function ({ navigation }: any) {
  const { currentUser } = useAuth();

  return (
    <ScrollView>
      {!!currentUser ? (
        <Stats navigation={navigation} />
      ) : (
        <WelcomeBanner navigation={navigation} />
      )}
      <WhoWeHelp />
      <Instructions />
      {!!currentUser && <OpenFormBanner navigation={navigation} />}
      <Footer navigation={navigation} />
    </ScrollView>
  );
}
