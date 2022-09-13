import React, { useState } from 'react';
import { StyleSheet, Modal, View, TouchableOpacity, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { useSelector } from 'react-redux'

import { createTweet } from '../functions/TweetFunctions';

export const CreateTweetModal = ({ visible, onClose }) => {
  const profile = useSelector((state) => state.auth.profile);
  const [contents, setContents] = useState('');

  const onCreateTweet = async () => {
    await createTweet(profile.id, contents);
    onClose();
  }

  return(
    <Modal
      visible={visible}
      animationType={'slide'}//나타날 때, 사라질 때의 애니메이션
      onRequestClose={onClose}//Android 뒤로가기 버튼을 누르거나, iOS 쓸어내리기 제스처 수행 시 호출
      presentationStyle={'pageSheet'}//모달의 모양을 결정하는 iOS Only 옵션
    >
      <View style={styles.container_column}>
        <View style={styles.btnmenu_container_row}>
          <TouchableOpacity onPress={onClose} style={{ padding:8, margin:10 }}>
            <Text style={{ color:'dimgray', fontSize:16 }}>
              취소
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onCreateTweet} style={styles.tweet_btn}>
            <Text style={{ color:'white', fontWeight:'bold', fontSize:16, marginLeft:4, marginRight:4 }}>
              트윗
            </Text>
          </TouchableOpacity>
        </View>
        
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={60} style={{flexGrow:1, display:'flex', flexDirection:'row', marginRight:20}}>
          <View style={{marginLeft:20, marginRight:20}}>
            <Image source={{uri:profile.profileImage}} style={{ width:40, height:40, borderRadius:40,}} />
          </View>
          <View style={{flexGrow:1}}>
            <TextInput
              multiline={true}
              placeholder='무슨 일이 일어나고 있나요?'
              textAlignVertical='top'
              style={styles.textInput}
              onChangeText={(text)=>{setContents(text)}}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container_column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  btnmenu_container_row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexShrink: 0,
    width: '100%',
    height: 60,
  },
  item: {
    display: 'flex',
  },
  tweet_btn: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    margin:10,
    marginLeft:'auto',
    borderRadius:20,
    backgroundColor:'#1DA1F2'
  },
  textInput: {
    height: '100%',
    fontSize: 15,
    lineHeight: 20,
  }
})