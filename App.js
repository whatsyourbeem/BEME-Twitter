import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { SplashScreen } from './src/screens/SplashScreen';
import { MainScreen } from './src/screens/MainScreen';

// React-Native의 기본 태그 설명!
// SafeAreaView: iOS에서, 화면이 노치 영역까지 침범하지 않도록 감싸주는 역할을 해요.
// View: 모든 UI의 기본 단위에요.
// Text: 텍스트를 표시할 수 있어요.
// Image: 이미지는 표시할 수 있어요. (source 속성을 통해 이미지 입력)

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{setShowSplashScreen(false)}, 1500);
  },[]);

  return (
    <SafeAreaView>
      {
        showSplashScreen ?
          <SplashScreen />
          :
          <MainScreen />
      }      
    </SafeAreaView>
  );
};


export default App;

// 디자인을 추가하고 싶을 땐 아래와 같이 사용해요. (우리가 보통 CSS라고 불리는 문법과 동일해요.)
// 사용할 수 있는 스타일 요소는 여기를 참고하면 돼요. https://reactnative.dev/docs/text-style-props
const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#1DA1F2',
  },
  flexItem: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 10,
  },
  logoImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  logoText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
})