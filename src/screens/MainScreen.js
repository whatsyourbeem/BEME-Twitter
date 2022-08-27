import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { TopBar } from '../components/TopBar';
import { TweetFlatList } from '../components/TweetFlatList';
import { CreateTweetModal } from './CreateTweetModal';
import { SettingsModal } from './SettingsModal';

// React-Native의 기본 태그 설명!
// View: 모든 UI의 기본 단위에요.
// Text: 텍스트를 표시할 수 있어요.
// Image: 이미지는 표시할 수 있어요. (source 속성을 통해 이미지 입력)

export const MainScreen = () => {
  const [openCreateTweetModal, setOpenCreateTweetModal] = useState(false);
  const [openSettingsModal, setOpenSettingsModal] = useState(false);

  const onOpenCreateTweetModal = () => {
    setOpenCreateTweetModal(true);
  }
  const onCloseCreateTweetModal = () => {
    setOpenCreateTweetModal(false);
  }
  const onOpenSettingsModal = () => {
    setOpenSettingsModal(true);
  }
  const onCloseSettingsModal = () => {
    setOpenSettingsModal(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TopBar
          onPressCreateBtn={onOpenCreateTweetModal}
          onPressProfileBtn={onOpenSettingsModal}
        />
      </View>
      <View style={styles.tweet}>
        <TweetFlatList />
      </View>
      <CreateTweetModal visible={openCreateTweetModal} onClose={onCloseCreateTweetModal} />
      <SettingsModal visible={openSettingsModal} onClose={onCloseSettingsModal} />
    </View>
  );
};


// 디자인을 추가하고 싶을 땐 아래와 같이 사용해요. (우리가 보통 CSS라고 불리는 문법과 동일해요.)
// 사용할 수 있는 스타일 요소는 여기를 참고하면 돼요. https://reactnative.dev/docs/text-style-props
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  topbar: {
    display: 'flex',
    width: '100%',
  },
  tweet: {
    display: 'flex',
    width: '100%',
  },
  logoImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  logoText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  }
})