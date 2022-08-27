import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import LOGO from '../assets/logo_white.png'
import EMAIL_ICON from '../assets/email.png'

// React-Native의 기본 태그 설명!
// View: 모든 UI의 기본 단위에요.
// Text: 텍스트를 표시할 수 있어요.
// Image: 이미지는 표시할 수 있어요. (source 속성을 통해 이미지 입력)

export const AuthScreen = ({ onSignIn }) => {
  return (
    <View style={styles.container}>
      <View style={{margin:10}}>
        <Image source={LOGO} style={styles.image_logo}/>
      </View>
      <View style={{margin:10}}>
        <Text style={styles.text_logo}>
          BEME - TWITTER
        </Text>
      </View>
      <TouchableOpacity onPress={onSignIn} style={styles.signin_btn}>
        <Image source={EMAIL_ICON} style={styles.image_signinbutton}/>
        <Text style={styles.text_signinbutton}>
          이메일로 로그인하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};


// 디자인을 추가하고 싶을 땐 아래와 같이 사용해요. (우리가 보통 CSS라고 불리는 문법과 동일해요.)
// 사용할 수 있는 스타일 요소는 여기를 참고하면 돼요. https://reactnative.dev/docs/text-style-props
const styles = StyleSheet.create({
  container: {
    display: 'flex',
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
  signin_btn: {
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
  text_signinbutton: {
    color: 'black',
    fontSize: 15,
    marginLeft: 20,
  }
})