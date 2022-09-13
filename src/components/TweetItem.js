import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import HEART_DISABLED from '../assets/heart_disabled.png';
import HEART_ENABLED from '../assets/heart_enabled.png';

export const TweetItem = ({tweet}) => {
  const [isLikedTweet, setIsLikedTweet] = useState(false);

  const onPressLikeBtn = () => {
    setIsLikedTweet(!isLikedTweet);
  }
  const convertTime = (timestamp) => {
    const time = new Date(timestamp*1000);
    return `${time.getFullYear()}.${time.getMonth()+1}.${time.getDate()}`
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image source={{uri:tweet.user.profileImage}} style={{ width:50, height:50, borderRadius:50,}} />
      </View>
      <View style={styles.container_column}>
        <View style={styles.container_row}>
          <View style={styles.item}>
            <Text style={{ color:'black', fontSize:15, fontWeight:'bold' }}>
              {tweet.user.nickname}
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text_sub}>
              {`@${tweet.user.username}`}
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text_sub}>
              -
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text_sub}>
              {convertTime(tweet.createdAt._seconds)}
            </Text>
          </View>
        </View>
        <View style={{ marginTop:4, marginBottom:4 }}>
          <Text>{tweet.contents}</Text>
        </View>
        <View style={styles.container_row}>
          <TouchableOpacity onPress={onPressLikeBtn} style={styles.button}>
            <Image source={isLikedTweet ? HEART_ENABLED : HEART_DISABLED} style={{ width:12, height:12, resizeMode:'contain',}} />
          </TouchableOpacity>
          <View style={styles.item}>
            <Text style={{ fontSize:12, marginLeft:4, color:isLikedTweet?'red':'black' }}>
              {tweet.likedUser.length}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};


// 디자인을 추가하고 싶을 땐 아래와 같이 사용해요. (우리가 보통 CSS라고 불리는 문법과 동일해요.)
// 사용할 수 있는 스타일 요소는 여기를 참고하면 돼요. https://reactnative.dev/docs/text-style-props
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 15,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.2,
  },
  container_column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    marginLeft: 10,
  },
  container_row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  item: {
    display: 'flex',
  },
  button: {
    display: 'flex',
    padding: 4,
  },
  text_sub: {
    color: 'gray',
    fontSize: 13,
    marginLeft: 6,
  }
})