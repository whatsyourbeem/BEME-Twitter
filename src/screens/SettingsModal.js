import React, { useState } from 'react';
import { StyleSheet, Modal, View, TouchableOpacity, Text, Image, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux'
import { authenticate, setProfile } from '../redux/reducer/AuthReducer';

import { ProfileEditModal } from './ProfileEditModal';
import CLOSE_ICON from '../assets/close.png';
import PROFILE_ICON from '../assets/user.png';
import SIGNOUT_ICON from '../assets/logout.png';

export const SettingsModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const [openProfileEditModal, setOpenProfileEditModal] = useState(false);

  const onOpenProfileEditModal = () => {
    setOpenProfileEditModal(true);
  }
  const onCloseProfileEditModal = () => {
    setOpenProfileEditModal(false);
  }
  const onLogout = () => {
    dispatch(authenticate(false));
    dispatch(setProfile({}));
  }
  return(
    <Modal
      visible={visible}
      animationType={'fade'}//나타날 때, 사라질 때의 애니메이션
      onRequestClose={onClose}//Android 뒤로가기 버튼을 누르거나, iOS 쓸어내리기 제스처 수행 시 호출
      presentationStyle={'fullScreen'}//모달의 모양을 결정하는 iOS Only 옵션
    >
      <SafeAreaView style={styles.container_column}>
        <View style={styles.title_container_row}>
          <View style={{width:40}} />
          <View style={{width:80}}>
            <Text style={{fontSize:18, fontWeight:'bold', color:'black'}}>
              Settings
            </Text>
          </View>
          <TouchableOpacity onPress={onClose} style={{width:40, height:'100%', justifyContent:'center'}}>
            <Image source={CLOSE_ICON} style={styles.image_closeIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={onOpenProfileEditModal} style={styles.menuitem_container_row}>
          <Image source={PROFILE_ICON} style={styles.image_menu}/>
          <Text style={styles.text_menu}>
            프로필 수정
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogout} style={styles.menuitem_container_row}>
          <Image source={SIGNOUT_ICON} style={styles.image_menu}/>
          <Text style={styles.text_menu}>
            로그아웃
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <ProfileEditModal visible={openProfileEditModal} onClose={onCloseProfileEditModal} />
    </Modal>
  );
}

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
  image_closeIcon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',  
  },
  image_menu: {
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