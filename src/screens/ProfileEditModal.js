import React, { useState } from 'react';
import { StyleSheet, Modal, View, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setProfile } from '../redux/reducer/AuthReducer';

import { updateUser } from '../functions/AuthFunctions';

export const ProfileEditModal = ({ visible, onClose }) => {
  const profile = useSelector((state) => state.auth.profile);
  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState(profile.profileImage);
  const [nickname, setNickname] = useState(profile.nickname);
  const [username, setUsername] = useState(profile.username);

  const onConfirm = async () => {
    const response = await updateUser(profile.id, username, nickname);
    if(response.success){
      dispatch(setProfile(response.user));
      onClose();
      console.log(response.user)
    }
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
          <View>
            <Text style={{ fontSize:16, fontWeight:'bold' }}>
                프로필 수정
            </Text>
          </View>
          <TouchableOpacity onPress={onConfirm} style={styles.confirm_btn}>
            <Text style={{ color:'white', fontWeight:'bold', fontSize:16, marginLeft:4, marginRight:4 }}>
              확인
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.container_column}>
          <TouchableOpacity style={{ alignSelf:'center' }}>
            <Image source={{uri:profileImage}} style={styles.image_ProfilePic} />
          </TouchableOpacity>
          <View style={styles.container_row}>
            <View style={{width:60, marginLeft:20, marginRight:20}}>
              <Text style={{textAlign:'right'}}>
                대화명
              </Text>
            </View>
            <View style={{flexGrow:1}}>
              <TextInput
                placeholder='트위터 대화명을 입력하세요.'
                textAlignVertical='top'
                value={username}
                onChangeText={(text)=>{setUsername(text)}}
              />
            </View>
          </View>
          <View style={styles.hr} />

          <View style={styles.container_row}>
            <View style={{width:60, marginLeft:20, marginRight:20}}>
              <Text style={{textAlign:'right'}}>
                이름
              </Text>
            </View>
            <View style={{flexGrow:1}}>
              <TextInput
                placeholder='이름을 입력하세요.'
                textAlignVertical='top'
                value={nickname}
                onChangeText={(text)=>{setNickname(text)}}
              />
            </View>
          </View>
          <View style={styles.hr} />

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container_column: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  container_row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    backgroundColor:'skyblue'
  },
  hr: {
    borderBottomWidth: 0.4,
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
  },
  image_ProfilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
  }
})