import React, { useState } from 'react';
import { StyleSheet, Modal, View, TouchableOpacity, Text, Image } from 'react-native';
import axios from 'axios';

import CLOSE_ICON from './assets/close.png';
import PROFILE_ICON from './assets/user.png';
import SIGNOUT_ICON from './assets/logout.png';

import { ProfileEditModal } from './ProfileEditModal'

export const SettingsModal = (props) => {
  const [openProfileEditModal, setOpenProfileEditModal] = useState(false); //ProfileEditModal을 열고 닫기 위한 변수에요

  const onOpenProfileEditModal = () => { //프로필버튼을 누르면 호출되는 함수에요
    setOpenProfileEditModal(true); //ProfileEditModal을 열고 닫기 위한 변수를 True로 업데이트해요
  }
  const onCloseProfileEditModal = () => { //ProfileEditModal을 닫고 싶을 떄 호출되는 함수에요
    setOpenProfileEditModal(false); //ProfileEditModal을 열고 닫기 위한 변수를 False로 업데이트해요
  }
  const onUpdateProfile = async (nickname, username) => { //프로필 업데이트 시 호출되는 함수에요
    setOpenProfileEditModal(false); //우선 ProfileEditModal을 닫아요

    const response = await axios.patch( //API 요청을 전송합니다
      'https://asia-northeast1-beme-twitter.cloudfunctions.net/updateUser',
      {
        id: props.myProfile.id,
        data: {
          nickname: nickname,
          username: username
        }
      }
    );

    if(response.data.success===true){ //만약 API 응답 중 "success"가 true라면(성공)
      props.onUpdateProfile(response.data.user); //부모로부터 전달받은 onUpdateProfile 함수(props)를 호출합니다
    } else{ //만약 API 응답 중 "success"가 true가 아니라면(실패)
      setOpenProfileEditModal(true); //ProfileEditModal을 다시 엽니다
    }
    
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
        <View style={styles.title_container_row}>
          {/* 아이템 (빈 아이템) <View> */}
          <View style={{ width:40 }} />
          {/* 아이템 <View> */}
          <View style={{ width:80 }}>
            {/* Settings <Text> */}
            <Text style={{ fontSize:18, fontWeight:'bold', color:'black' }}>
              Settings
            </Text>
          </View>
          {/* 아이템 <TouchableOpacity> */}
          <TouchableOpacity
            onPress={props.onClose} //버튼을 누르면 부모로부터 전달받은 onClose 함수(props)를 호출합니다
            style={{ padding:8, margin:10 }}
          >
            {/* 닫기버튼 <Image> */}
            <Image source={CLOSE_ICON} style={{ width:14, height:14, resizeMode:'contain' }} />
          </TouchableOpacity>
        </View>

        {/* 컨테이너 (세로방향) <View> */}
        <View style={styles.container_column}>

          {/* 컨테이너 (가로방향) <TouchableOpacity> */}
          <TouchableOpacity
            onPress={onOpenProfileEditModal}
            style={styles.menuitem_container_row}
          >
            {/* 아이템 <View> */}
            <View>
              {/* 프로필 아이콘 <Image> */}
              <Image source={PROFILE_ICON} style={styles.icon_menu}/>
            </View>
            {/* 아이템 <View> */}
            <View>
              {/* 프로필 수정 <Text> */}
              <Text style={styles.text_menu}>
                프로필 수정
              </Text>
            </View>
          </TouchableOpacity>

          {/* 컨테이너 (가로방향) <TouchableOpacity> */}
          <TouchableOpacity
            onPress={props.onLogout} //버튼을 누르면 부모로부터 전달받은 onLogout 함수(props)를 호출합니다
            style={styles.menuitem_container_row}
          >
            {/* 아이템 <View> */}
            <View>
              {/* 로그아웃 아이콘 <Image> */}
              <Image source={SIGNOUT_ICON} style={styles.icon_menu}/>
            </View>
            {/* 아이템 <View> */}
            <View>
              {/* 로그아웃 <Text> */}
              <Text style={styles.text_menu}>
                로그아웃
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ProfileEditModal visible={openProfileEditModal} onClose={onCloseProfileEditModal} onUpdateProfile={onUpdateProfile} myProfile={props.myProfile} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container_column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title_container_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    width: '100%',
    height: 60,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
  },
  menuitem_container_row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexShrink: 0,
    width: '90%',
    padding: 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
  },
  icon_menu: {
    width: 20,
    height: 20,
    resizeMode: 'contain',  
  },
  text_menu: {
    fontSize: 16,
    color: 'black',
    marginLeft: 20,
  }
})
