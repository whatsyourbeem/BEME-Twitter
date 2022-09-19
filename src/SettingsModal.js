import React from 'react';

import { StyleSheet, Modal, View, TouchableOpacity, Text, Image } from 'react-native';
import CLOSE_ICON from './assets/close.png';
import PROFILE_ICON from './assets/user.png';
import SIGNOUT_ICON from './assets/logout.png';

export const SettingsModal = () => {
  return (
    // 모달 <Modal>
    <Modal visible={true} animationType={'slide'} presentationStyle={'pageSheet'}>

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
          <TouchableOpacity style={{ width:40 }}>
            {/* 닫기버튼 <Image> */}
            <Image source={CLOSE_ICON} style={{ width:14, height:14, resizeMode:'contain' }} />
          </TouchableOpacity>
        </View>

        {/* 컨테이너 (세로방향) <View> */}
        <View style={styles.container_column}>

          {/* 컨테이너 (가로방향) <TouchableOpacity> */}
          <TouchableOpacity style={styles.menuitem_container_row}>
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
          <TouchableOpacity style={styles.menuitem_container_row}>
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
