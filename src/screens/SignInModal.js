import React, { useState } from 'react';
import { StyleSheet, Modal, View, TouchableOpacity, Text, TextInput } from 'react-native';

export const SignInModal = ({ visible, onSignIn, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <Modal
      visible={visible}
      animationType={'slide'}//나타날 때, 사라질 때의 애니메이션
      onRequestClose={onClose}//Android 뒤로가기 버튼을 누르거나, iOS 쓸어내리기 제스처 수행 시 호출
      presentationStyle={'pageSheet'}//모달의 모양을 결정하는 iOS Only 옵션
    >
      <View style={styles.container_column}>
        <View style={styles.btnmenu_container_row}>
          <TouchableOpacity
            onPress={onClose}
            style={{
              padding:8,
              margin:10
            }}
          >
            <Text style={{ color:'dimgray', fontSize:16 }}>
              취소
            </Text>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize:16,
                fontWeight:'bold',
              }}
            >
                로그인
            </Text>
          </View>
          <TouchableOpacity
            onPress={()=>{onSignIn(email,password)}}
            style={styles.confirm_btn}
          >
            <Text
              style={{
                color:'white',
                fontWeight:'bold',
                fontSize:16,
                marginLeft:4,
                marginRight:4
              }}
            >
              확인
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.container_column}>
          <View style={styles.container_row}>
            <View style={{width:60, marginLeft:20, marginRight:20}}>
              <Text style={{textAlign:'right'}}>
                이메일
              </Text>
            </View>
            <View style={{flexGrow:1}}>
              <TextInput
                placeholder='이메일을 입력하세요.'
                textAlignVertical='top'
                keyboardType='email-address'
                value={email}
                onChangeText={(text)=>{setEmail(text)}}
              />
            </View>
          </View>

          <View style={styles.hr} />

          <View style={styles.container_row}>
            <View style={{width:60, marginLeft:20, marginRight:20}}>
              <Text style={{textAlign:'right'}}>
                비밀번호
              </Text>
            </View>
            <View style={{flexGrow:1}}>
              <TextInput
                placeholder='비밀번호를 입력하세요.'
                textAlignVertical='top'
                secureTextEntry={true}
                value={password}
                onChangeText={(text)=>{setPassword(text)}}
              />
            </View>
          </View>
        </View>

        <View style={styles.hr} />
        
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container_column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
  },
  container_row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  btnmenu_container_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    width: '100%',
    height: 60,
  },
  item: {
    display: 'flex',
  },
  hr: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    marginLeft: 20,
    marginRight: 20,
  },
  confirm_btn: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    margin:10,
    borderRadius:20,
    backgroundColor:'#1DA1F2'
  },
  textInput: {
    height: '100%',
    fontSize: 15,
    lineHeight: 20,
  }
})