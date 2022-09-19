import React from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export const AuthScreen = () => {
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
      <TouchableOpacity style={styles.signin_container}>
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
      <TouchableOpacity style={styles.signup_container}>
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
