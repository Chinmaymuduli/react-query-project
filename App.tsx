/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import PrivateRoutes from './src/routes/PrivateRoutes';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <PrivateRoutes />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
