import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

// React-Native의 기본 태그 설명!
// View: 모든 UI의 기본 단위에요.
// Text: 텍스트를 표시할 수 있어요.
// Image: 이미지는 표시할 수 있어요. (source 속성을 통해 이미지 입력)

export const TweetItem = ({tweet}) => {

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image source={{uri:tweet.author.picture}} style={styles.image_ProfilePic} />
      </View>
      <View style={styles.container_column}>
        <View style={styles.container_row}>
          <View style={styles.item}>
            <Text style={styles.text_nickname}>
              {tweet.author.nickname}
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text_id}>
              {`@${tweet.author.id} - `}
            </Text>
          </View>
        </View>
        <View style={styles.item}>
          <Text>{tweet.contents}</Text>
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
    width: '90%',
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
  image_ProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  text_nickname: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  text_id: {
    color: 'gray',
    fontSize: 12,
    marginLeft: 6,
  },
})