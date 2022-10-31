import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

export const SplashScreen = () => {
  return (
    // 컨테이너 (세로방향) <View>
    <View style={styles.container}>

      {/* 아이템 <View> */}
      <View style={{ margin:10 }}>
        {/* 로고이미지 <Image> */}
        <Image source={require('./assets/logo_white.png')} style={styles.image_logo}/>
      </View>

      {/* 아이템 <View> */}
      <View style={{ margin:10 }}>
        {/* 로고글씨 <Text> */}
        <Text style={styles.text_logo}>
          BEME - TWITTER
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#1DA1F2',
  },
  image_logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  text_logo: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
})
