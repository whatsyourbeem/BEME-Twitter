import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

import { SignInModal } from './SignInModal';
import { SignUpModal } from './SignUpModal';

export const AuthScreen = (props) => {
  const [openSignInModal, setOpenSignInModal] = useState(false); //SignInModal 을 열고 닫기 위한 변수에요
  const [openSignUpModal, setOpenSignUpModal] = useState(false); //SignUpModal 을 열고 닫기 위한 변수에요

  const onOpenSignInModal = () => { //로그인 버튼을 누르면 호출되는 함수에요
    setOpenSignInModal(true);
  }
  const onCloseSignInModal = () => {
    setOpenSignInModal(false);
  }
  const onOpenSignUpModal = () => { //회원가입 버튼을 누르면 호출되는 함수에요
    setOpenSignUpModal(true);
  }
  const onCloseSignUpModal = () => {
    setOpenSignUpModal(false);
  }

  const onSignIn = async (email, password) => { //로그인 확인 시 호출될 함수에요
    setOpenSignInModal(false); //우선 SignInModal을 닫습니다

    const response = await axios.post( //API 요청을 전송합니다
      'https://asia-northeast1-beme-twitter.cloudfunctions.net/login',
      {
        id: email,
        password: password
      }
    );

    if(response.data.success===true){ //만약 API 응답 중 "success"가 true라면(성공)
      props.onAuthenticate(response.data.user); //부모(App.js)로부터 전달받은 onAuthenticated 함수(props)를 호출합니다
    } else{ //만약 API 응답 중 "success"가 true가 아니라면(실패)
      setOpenSignInModal(true); //SignInModal을 다시 엽니다
    }
  }

  const onSignUp = async (email, password, nickname, username) => { //회원가입 확인 시 호출될 함수에요
    setOpenSignUpModal(false); //우선 SignUpModal을 닫습니다

    const response = await axios.post( //API 요청을 전송합니다
      'https://asia-northeast1-beme-twitter.cloudfunctions.net/createUser',
      {
        id: email,
        password: password,
        nickname: nickname,
        username: username
      }
    );

    if(response.data.success===true){ //만약 API 응답 중 "success"가 true라면(성공)
      props.onAuthenticate(response.data.user); //부모(App.js)로부터 전달받은 onAuthenticated 함수(props)를 호출합니다
    } else{ //만약 API 응답 중 "success"가 true가 아니라면(실패)
      setOpenSignUpModal(true); //SignUpModal을 다시 엽니다
    }
  }

  return (
    // 컨테이너 (세로방향) <View>
    <View style={styles.container}>
      
      {/* 아이템 <View> */}
      <View style={{ margin:10 }}>
        {/* 로고이미지 <Image> */}
        <Image source={require('./assets/logo_white.png')} style={styles.image_logo}/>
      </View>

      {/* 아이템 <View> */}
      <View style={{ margin:10 }}>
        {/* 로고텍스트 <Text> */}
        <Text style={styles.text_logo}>
          BEME - TWITTER
        </Text>
      </View>


      {/* 컨테이너 (가로방향) <TouchableOpacity> */}
      <TouchableOpacity
        onPress={onOpenSignInModal}
        style={styles.signin_container}
      >
        {/* 아이템 <View> */}
        <View>
          {/* 이메일아이콘 <Image> */}
          <Image source={require('./assets/email.png')} style={styles.image_signinbutton} />
        </View>

        {/* 아이템 <View> */}
        <View style={{ marginLeft:20 }}>
          {/* '이메일로 로그인하기' 글씨 <Text> */}
          <Text style={{ color:'black', fontSize:15 }}>
            이메일로 로그인하기
          </Text>
        </View>
      </TouchableOpacity>


      {/* 컨테이너 (가로방향) <TouchableOpacity> */}
      <TouchableOpacity
        onPress={onOpenSignUpModal}
        style={styles.signup_container}
      >
        {/* 아이템 <View> */}
        <View>
          {/* "처음이신가요?" 글씨 <Text> */}
          <Text style={{ color:'white' }}>
            처음이신가요?
          </Text>
        </View>

        {/* 아이템 <View> */}
        <View style={{ marginLeft:10 }}>
          {/* 회원가입버튼 <Text> */}
          <Text style={styles.text_signupbutton}>
            회원가입
          </Text>
        </View>
      </TouchableOpacity>

      <SignInModal visible={openSignInModal} onSignIn={onSignIn} onClose={onCloseSignInModal} />
      <SignUpModal visible={openSignUpModal} onSignUp={onSignUp} onClose={onCloseSignUpModal} />
    </View>
  );
};


// 디자인을 추가하고 싶을 땐 아래와 같이 사용해요. (우리가 보통 CSS라고 불리는 문법과 동일해요.)
// 사용할 수 있는 스타일 요소는 여기를 참고하면 돼요. https://reactnative.dev/docs/text-style-props
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#1DA1F2',
  },
  image_logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  text_logo: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  signin_container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 150,
    borderColor: 'gray',
    borderWidth: 1,
  },
  image_signinbutton: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  signup_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  text_signupbutton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
})
