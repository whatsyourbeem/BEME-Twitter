import React, { useState } from 'react';
import { StyleSheet, Modal, View, TouchableOpacity, Text, TextInput, Image } from 'react-native';

export const ProfileEditModal = (props) => {
  const [nickname, setNickname] = useState(props.myProfile.nickname);
  const [username, setUsername] = useState(props.myProfile.username);

  const onUpdateProfile = () => {
    props.onUpdateProfile(nickname, username);
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
            style={{ padding:8, marginLeft:10 }}
          >
            {/* 취소버튼 <Text> */}
            <Text style={{ color:'dimgray', fontSize:16 }}>
              취소
            </Text>
          </TouchableOpacity>

          {/* 아이템 <View> */}
          <View>
            {/* 프로필 수정 <Text> */}
            <Text style={{ fontSize:16, fontWeight:'bold' }}>
                프로필 수정
            </Text>
          </View>

          {/* 아이템 <TouchableOpacity> */}
          <TouchableOpacity
            onPress={onUpdateProfile}
            style={styles.confirm_button}
          >
            {/* 확인버튼 <Text> */}
            <Text style={{ color:'white', fontWeight:'bold', fontSize:16 }}>
              확인
            </Text>
          </TouchableOpacity>
        </View>
        
        {/* 컨테이너 (세로방향,내용) <View> */}
        <View style={styles.container_column}>
          {/* 아이템 <TouchableOpacity> */}
          <TouchableOpacity>
            {/* 아바타이미지 <Image> */}
            <Image
              source={{uri: props.myProfile.profileImage}}
              style={styles.image_ProfilePic}
            />
          </TouchableOpacity>

          {/* 컨테이너 (가로방향) <View> */}
          <View style={styles.container_row}>
            {/* 아이템 <View> */}
            <View style={{width:50, marginLeft:20, marginRight:20}}>
              {/* 대화명 <Text> */}
              <Text style={{ color:'black', textAlign:'right' }}>
                대화명
              </Text>
            </View>
            {/* 아이템 <View> */}
            <View style={{flexGrow:1}}>
              {/* 입력창 <TextInput> */}
              <TextInput
                value={nickname}
                onChangeText={(text)=>{setNickname(text)}}
                placeholder='트위터 대화명을 입력하세요.'
              />
            </View>
          </View>

          {/* 컨테이너 (가로방향) <View> */}
          <View style={styles.container_row}>
            {/* 아이템 <View> */}
            <View style={{width:50, marginLeft:20, marginRight:20}}>
              {/* 이름 <Text> */}
              <Text style={{ color:'black', textAlign:'right' }}>
                이름
              </Text>
            </View>
            {/* 아이템 <View> */}
            <View style={{flexGrow:1}}>
              {/* 입력창 <TextInput> */}
              <TextInput
                value={username}
                onChangeText={(text)=>{setUsername(text)}}
                placeholder='이름을 입력하세요.'
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
    justifyContent: 'center',
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
  item: {
    display: 'flex',
    backgroundColor:'skyblue'
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
  image_ProfilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
  }
})
