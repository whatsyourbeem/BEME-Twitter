import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import LOGO from '../assets/logo_color.png';
import TEXT_LOGO from '../assets/logo_text.png';
import CREATE_LOGO from '../assets/add.png';
import SETTING_LOGO from '../assets/setting.png';

import { MyProfile } from '../mocks/Data';

// React-Native의 기본 태그 설명!
// View: 모든 UI의 기본 단위에요.
// Text: 텍스트를 표시할 수 있어요.
// Image: 이미지는 표시할 수 있어요. (source 속성을 통해 이미지 입력)

export const TopBar = () => {
  return (
    <View style={styles.container_TopBar}>
      <View style={styles.item_Logo}>
        <Image source={LOGO} style={styles.image_Logo} />
      </View>
      <View style={styles.item_TextLogo}>
        <Image source={TEXT_LOGO} style={styles.image_TextLogo} />
      </View>
      <TouchableOpacity style={styles.touchable_CreateBtn}>
        <Image source={CREATE_LOGO} style={styles.image_ButtonIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable_SettingBtn}>
        <Image source={SETTING_LOGO} style={styles.image_ButtonIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable_ProfileBtn}>
        <Image source={{uri:MyProfile.picture}} style={styles.image_ProfilePic} />
      </TouchableOpacity>
    </View>
  );
};


// 디자인을 추가하고 싶을 땐 아래와 같이 사용해요. (우리가 보통 CSS라고 불리는 문법과 동일해요.)
// 사용할 수 있는 스타일 요소는 여기를 참고하면 돼요. https://reactnative.dev/docs/text-style-props
const styles = StyleSheet.create({
  container_TopBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 52,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
  },
  item_Logo: {
    display: 'flex',
    marginLeft: 20,
  },
  item_TextLogo: {
    display: 'flex',
    marginLeft: 10,
  },
  touchable_CreateBtn: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 8,
  },
  touchable_SettingBtn: {
    display: 'flex',
    marginLeft: 8,
    marginRight: 8,
  },
  touchable_ProfileBtn: {
    display: 'flex',
    marginLeft: 8,
    marginRight: 20,
  },
  image_Logo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  image_TextLogo: {
    width: 80,
    height: 52,
    resizeMode: 'contain',
  },
  image_ButtonIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  image_ProfilePic: {
    width: 32,
    height: 32,
    borderRadius: 32,
  }
})