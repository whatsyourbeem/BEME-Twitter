import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { SplashScreen } from './src/SplashScreen';
import { MainScreen } from './src/MainScreen';
import { AuthScreen } from './src/AuthScreen';

export const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true); //SplashScreen 표출 여부를 위한 변수에요
  const [isAuthenticated, setIsAuthenticated] = useState(false); //로그인이 되었는지 구분하기 위한 변수에요
  const [user, setUser] = useState({ //유저 정보를 담는 변수에요. 초기값으로는 user 데이터의 형태만 만들어두었어요.
    id: '',
    nickname: '',
    username: '',
    profileImage: ''
  });

  useEffect(
    ()=>{
      setTimeout(
        ()=>{
          setShowSplashScreen(false)
        },
        2000
      );
    },
    []
  );

  const onAuthenticated = (user) => { //로그인/회원가입 성공 시 수행될 함수에요
    setIsAuthenticated(true); //로그인 여부를 true로 변경해요
    setUser(user); //나의 유저 정보를 업데이트해요
  }
  const onLogout = () => { // 로그아웃 시 수행될 함수에요
    setIsAuthenticated(false); //로그인 여부를 false로 변경해요
    setUser({ // 유저 정보를 초기화해요
      id: '',
      nickname: '',
      username: '',
      profileImage: ''
    });
  }

  const getScreen = () => {
    if(showSplashScreen===true){
      return(
        <SplashScreen />
      )
    } else{
      if(isAuthenticated===true){ //만약 로그인 상태라면
        return( //MainScreen을 표출해요
          <MainScreen myProfile={user} onAuthenticate={onAuthenticated} onLogout={onLogout} />
        )
      } else{ //만약 로그인 상태가 아니라면
        return( //AuthScreen을 표출해요
          <AuthScreen onAuthenticate={onAuthenticated} />
        )
      }
      
    }
  }

  return (
    <View>
      {getScreen()}
    </View>
    
  );
};

export default App;