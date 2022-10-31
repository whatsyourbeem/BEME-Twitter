import React, { useState } from 'react';
import { StyleSheet, Modal, View, TouchableOpacity, Text, TextInput } from 'react-native';

export const SignInModal = (props) => {
  const [email, setEmail] = useState(''); //이메일 문자열을 담을 변수
  const [password, setPassword] = useState(''); //비밀번호 문자열을 담을 변수

  const onSignIn = async () => {
    props.onSignIn(email, password); //부모(AuthScreen)로부터 전달받은 onSignIn 함수(props)를 호출합니다
  }

  return (
    // 모달 <Modal>
    <Modal
      visible={props.visible} //부모(AuthScreen)로부터 전달받은 visible 값(props)을 대입합니다
      animationType={'slide'}
      presentationStyle={'pageSheet'}
    >

      {/* 컨테이너 (세로방향) <View> */}
      <View style={styles.container_column}>

        {/* 컨테이너 (가로방향) <View> */}
        <View style={styles.container_row_menubar}>
          {/* 아이템 <TouchableOpacity> */}
          <TouchableOpacity
            onPress={props.onClose} //버튼을 누르면 부모(AuthScreen)로부터 전달받은 onClose 함수(props)를 호출합니다
            style={{ padding:8, marginLeft:10 }}
          >
            {/* 취소버튼 <Text> */}
            <Text style={{ color:'dimgray', fontSize:16 }}>
              취소
            </Text>
          </TouchableOpacity>

          {/* 아이템 <View> */}
          <View>
            {/* 로그인 <Text> */}
            <Text style={{ fontSize:16, fontWeight:'bold' }}>
                로그인
            </Text>
          </View>

          {/* 아이템 <TouchableOpacity> */}
          <TouchableOpacity
            onPress={onSignIn} //버튼을 누르면 onSignIn 함수를 호출합니다
            style={styles.confirm_button}
          >
            {/* 확인버튼 <Text> */}
            <Text style={{ color:'white', fontWeight:'bold', fontSize:16 }}>
              확인
            </Text>
          </TouchableOpacity>
        </View>


        {/* 컨테이너 (세로방향) <View> */}
        <View style={styles.container_column}>

          {/* 컨테이너 (가로방향) <View> */}
          <View style={styles.container_row}>
            {/* 아이템 <View> */}
            <View style={{ width:50, marginLeft:20, marginRight:20 }}>
              {/* 이메일 <Text> */}
              <Text style={{ color:'black', textAlign:'right' }}>
                이메일
              </Text>
            </View>

            {/* 아이템 <View> */}
            <View style={{ flexGrow:1 }}>
              {/* 입력창 <TextInput> */}
              <TextInput
                value={email} //email 변수 값을 표시합니다
                onChangeText={(text)=>{setEmail(text)}} //입력되는 값이 바뀌면, 그 값을 email 변수에 대입합니다
                placeholder='이메일을 입력하세요.'
                keyboardType='email-address'
              />
            </View>
          </View>

          {/* 컨테이너 (가로방향) <View> */}
          <View style={styles.container_row}>
            {/* 아이템 <View> */}
            <View style={{ width:50, marginLeft:20, marginRight:20 }}>
              {/* 비밀번호 <Text> */}
              <Text style={{ color:'black', textAlign:'right' }}>
                비밀번호
              </Text>
            </View>

            {/* 아이템 <View> */}
            <View style={{ flexGrow:1 }}>
              {/* 입력창 <TextInput> */}
              <TextInput
                value={password} //password 변수 값을 표시합니다
                onChangeText={(text)=>{setPassword(text)}} //입력되는 값이 바뀌면, 그 값을 password 변수에 대입합니다
                placeholder='비밀번호를 입력하세요.'
                secureTextEntry={true}
              />
            </View>
          </View>
        </View>
        
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container_column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  container_row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
  },
  container_row_menubar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    width: '100%',
    height: 60,
  },
  confirm_button: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    margin:10,
    borderRadius:20,
    backgroundColor:'#1DA1F2'
  },
})
