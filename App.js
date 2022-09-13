import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux'

import { SplashScreen } from './src/screens/SplashScreen';
import { MainScreen } from './src/screens/MainScreen';
import { AuthScreen } from './src/screens/AuthScreen';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{setShowSplashScreen(false)}, 1500);
  },[]);

  return (
    <View>
      {
        showSplashScreen ?
          <SplashScreen />
          :
          isAuthenticated ?
            <MainScreen />
            :
            <AuthScreen />
      }
    </View>
  );
};


export default App;
