import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';

import { TweetItem } from './TweetItem';
import { Tweets } from '../mocks/Data';

// React-Native의 기본 태그 설명!
// View: 모든 UI의 기본 단위에요.
// Text: 텍스트를 표시할 수 있어요.
// Image: 이미지는 표시할 수 있어요. (source 속성을 통해 이미지 입력)

export const TweetFlatList = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    onInitialLoad();
  }, []);

  const onInitialLoad = async () => {
    setInitialLoading(true);
    setTimeout(()=>{
      setInitialLoading(false)
      setTweets(Tweets);
    }, 1000);  
  }
  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(()=>{setRefreshing(false)}, 1500);  
  }
  
  const renderItem = ({item}) => (
    <TweetItem tweet={item} />
  )

  return (
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
  },
  flatlist: {
    width: '100%',
  }
})