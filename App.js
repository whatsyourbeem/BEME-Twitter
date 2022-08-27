import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { SplashScreen } from './src/screens/SplashScreen';
import { MainScreen } from './src/screens/MainScreen';
import { AuthScreen } from './src/screens/AuthScreen';

// React-Native의 기본 태그 설명!
// SafeAreaView: iOS에서, 화면이 노치 영역까지 침범하지 않도록 감싸주는 역할을 해요.
// View: 모든 UI의 기본 단위에요.
// Text: 텍스트를 표시할 수 있어요.
// Image: 이미지는 표시할 수 있어요. (source 속성을 통해 이미지 입력)

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{setShowSplashScreen(false)}, 1500);
  },[]);

  const onSignIn = () => {
    setIsAuthenticated(true);
  }

  return (
    <SafeAreaView>
      {
        showSplashScreen ?
          <SplashScreen />
          :
          isAuthenticated ?
            <MainScreen />
            :
            <AuthScreen onSignIn={onSignIn} />
      }
    </SafeAreaView>
  );
};


export default App;
