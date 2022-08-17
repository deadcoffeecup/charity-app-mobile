import React from 'react';
import { ScrollView } from 'react-native';

import { Footer } from './Footer';
import { WelcomeBanner } from './WelcomeBanner';
import { Instructions } from './Instructions';
import { WhoWeHelp } from './WhoWeHelp';
import { useAuth } from '../../../context/AuthContext';
import { Stats } from './Stats';
import { OpenFormBanner } from './OpenFormBanner';

export default function () {
  const { currentUser } = useAuth();

  return (
    <ScrollView>
      {!!currentUser ? <Stats /> : <WelcomeBanner />}
      <WhoWeHelp />
      <Instructions />
      {!!currentUser && <OpenFormBanner />}
      <Footer />
    </ScrollView>
  );
}
