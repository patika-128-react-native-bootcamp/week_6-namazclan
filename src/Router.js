import React from 'react';
import Navigation from './Navigation/Navigation';
import Provider from "./context/provider"

export default function App() {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
}
