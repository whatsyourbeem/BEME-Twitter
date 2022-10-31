import React, { useState } from 'react';
import { StyleSheet, Modal, View, TouchableOpacity, Text, TextInput, Image } from 'react-native';

export const CreateTweetModal = (props) => {
  const [contents, setContents] = useState(''); //작성할 트윗 내용을 담을 변수

  const onCreateTweet = () => { //트윗 버튼 클릭 시 호출되는 함수에요
    props.onCreate(contents); //부모로부터 전달받은 onCreate 함수(props)를 호출합니다
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

        {/* 컨테이너 (가로방향,메뉴바) <View> */}
        <View style={styles.container_row_menubar}>
          {/* 아이템 <TouchableOpacity> */}
          <TouchableOpacity
            onPress={props.onClose} //버튼을 누르면 부모로부터 전달받은 onClose 함수(props)를 호출합니다
            style={{ padding:8, margin:10 }}
          >
            {/* 취소버튼 <Text> */}
            <Text style={{ color:'dimgray', fontSize:16 }}>
              취소
            </Text>
          </TouchableOpacity>

          {/* 아이템 <TouchableOpacity> */}
          <TouchableOpacity
            onPress={onCreateTweet}
            style={styles.confirm_button}
          >
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
              source={{uri: props.myProfile.profileImage}}
              style={{ width:40, height:40, borderRadius:40,}}
            />
          </View>

          {/* 아이템 <View> */}
          <View style={{ flexGrow:1, marginRight:10 }}>
            {/* 내용입력 <TextInput> */}
            <TextInput
              value={contents} //contents 변수 값을 표시합니다
              onChangeText={(text)=>{setContents(text)}}  //입력되는 값이 바뀌면, 그 값을 contents 변수에 대입합니다
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
