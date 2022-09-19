import React from 'react';

import { StyleSheet, Modal, View, TouchableOpacity, Text, TextInput, Image } from 'react-native';

export const CreateTweetModal = () => {
  return (
    // 모달 <Modal>
    <Modal visible={true} animationType={'slide'} presentationStyle={'pageSheet'}>

      {/* 컨테이너 (세로방향) <View> */}
      <View style={styles.container_column}>

        {/* 컨테이너 (가로방향,메뉴바) <View> */}
        <View style={styles.container_row_menubar}>
          {/* 아이템 <TouchableOpacity> */}
          <TouchableOpacity style={{ padding:8, margin:10 }}>
            {/* 취소버튼 <Text> */}
            <Text style={{ color:'dimgray', fontSize:16 }}>
              취소
            </Text>
          </TouchableOpacity>

          {/* 아이템 <TouchableOpacity> */}
          <TouchableOpacity style={styles.confirm_button}>
            {/* 트윗버튼 <Text> */}
            <Text style={{ color:'white', fontWeight:'bold', fontSize:16 }}>
              트윗
            </Text>
          </TouchableOpacity>
        </View>
        

        {/* 컨테이너 (가로방향,작성영역) <View> */}
        <View style={styles.container_row_editarea}>
          {/* 아이템 <View> */}
          <View style={{ marginLeft:20, marginRight:20 }}>
            {/* 아바타이미지 <Image> */}
            <Image
              source={{uri:'https://firebasestorage.googleapis.com/v0/b/beme-twitter.appspot.com/o/profile-images%2FThumbnail64.jpg?alt=media&token=be4000fe-822e-4a6f-8ceb-a5b31da1ca9a'}}
              style={{ width:40, height:40, borderRadius:40,}}
            />
          </View>

          {/* 아이템 <View> */}
          <View style={{ flexGrow:1, marginRight:10 }}>
            {/* 내용입력 <TextInput> */}
            <TextInput
              multiline={true}
              textAlignVertical='top'
              placeholder='무슨 일이 일어나고 있나요?'
              style={styles.textInput}
            />
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
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
  },
  container_row_menubar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    width: '100%',
    height: 60,
  },
  container_row_editarea: {
    flexDirection: 'row',
    flexGrow: 1,
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
  textInput: {
    height: '100%',
    fontSize: 15,
    lineHeight: 20,
  }
})
