import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, FlatList, ActivityIndicator } from 'react-native';

import { TopBar } from '../components/TopBar';
import { TweetItem } from '../components/TweetItem';
import { readTweet } from '../functions/TweetFunctions';
import { CreateTweetModal } from './CreateTweetModal';
import { SettingsModal } from './SettingsModal';

export const MainScreen = () => {
  const [openCreateTweetModal, setOpenCreateTweetModal] = useState(false);
  const [openSettingsModal, setOpenSettingsModal] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    onInitialLoad();
  }, []);

  const onInitialLoad = async () => {
    setInitialLoading(true);
    const response = await readTweet();
    setTweets(response.tweet);
    setInitialLoading(false);
  }
  const onRefresh = async () => {
    setRefreshing(true);
    const response = await readTweet();
    setTweets(response.tweet);
    setRefreshing(false);
  }
  
  const renderItem = ({item}) => (
    <TweetItem tweet={item} />
  )

  const onOpenCreateTweetModal = () => {
    setOpenCreateTweetModal(true);
  }
  const onCloseCreateTweetModal = () => {
    setOpenCreateTweetModal(false);
    onRefresh();
  }
  const onOpenSettingsModal = () => {
    setOpenSettingsModal(true);
  }
  const onCloseSettingsModal = () => {
    setOpenSettingsModal(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <TopBar
          onPressCreateBtn={onOpenCreateTweetModal}
          onPressProfileBtn={onOpenSettingsModal}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={tweets}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          numColumns={1}
          refreshing={refreshing}
          onRefresh={onRefresh}
          ListFooterComponent={(initialLoading) && <ActivityIndicator />}
          style={styles.flatlist}
        />
      </View>
      <CreateTweetModal visible={openCreateTweetModal} onClose={onCloseCreateTweetModal} />
      <SettingsModal visible={openSettingsModal} onClose={onCloseSettingsModal} />
    </SafeAreaView>
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
  },
  flatlist: {
    width: '100%',
  }
})