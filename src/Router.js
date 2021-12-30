import React from 'react';
import Navigation from './Navigation/Navigation';
import Provider from './context/provider';
import i18n from './languages/i18n';

export default function App() {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
}
