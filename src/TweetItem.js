import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

import HEART_DISABLED from '../assets/heart_disabled.png';
import HEART_ENABLED from '../assets/heart_enabled.png';

export const TweetItem = (props) => {
  const [tweet, setTweet] = useState(props.tweet); //props로 전달받은 트윗 게시물 한개의 정보

  const addTweetLike = async () => { // 좋아요+1 함수
    const response = await axios.post( // API 요청을 보내요
      'https://asia-northeast1-beme-twitter.cloudfunctions.net/addTweetLike',
      {
        tweet: tweet.id,
        clickedUser: props.myProfile.id
      }
    );
    if(response.data.success===true){ // 만약 success 값이 true이면 (성공)
      setTweet(response.data.tweet); // 트윗 정보를 새로 온 응답 데이터로 업데이트해요
    }
  }

  const removeTweetLike = async () => { // 좋아요-1 함수
    const response = await axios.post( // API 요청을 보내요
      'https://asia-northeast1-beme-twitter.cloudfunctions.net/removeTweetLike',
      {
        tweet: tweet.id,
        clickedUser: props.myProfile.id
      }
    );
    if(response.data.success===true){ // 만약 success 값이 true이면 (성공)
        setTweet(response.data.tweet); // 트윗 정보를 새로 온 응답 데이터로 업데이트해요
      }
  }
  
  const convertTime = (timestamp) => { // 시간 형식 변환 함수 (timestamp -> 문자열)
    const time = new Date(timestamp*1000); //timestamp 형식을 변환해요
    const year = time.getFullYear(); //연도를 추출해요
    const month = time.getMonth()+1; //월을 추출해요
    const date = time.getDate(); //날짜를 추출해요
    const timeString = '-' + year + '.' + month + '.' + date //원하는 문자열로 만들어요
    return timeString;
  }

  const getHeartButton = () => { //하트 버튼 색을 결정하기 위해, 이 트윗이 내가 좋아요를 누른 트윗인지 확인해야해요
    if(tweet.likedUser.includes(props.myProfile.id)){ //트윗의 likedUser라는 배열 안에 나의 ID가 있다면(좋아요를 누른 사람중에 내가 있다면)
      return( //빨간색 하트 버튼을 출력해요
        <TouchableOpacity
          onPress={removeTweetLike} //클릭하면 좋아요를 취소해요
          style={{ padding:4 }}
        >
          <Image
            source={HEART_ENABLED}
            style={{ width:12, height:12, resizeMode:'contain' }}
          />
        </TouchableOpacity>
      )
    } else{ //트윗의 likedUser라는 배열 안에 나의 ID가 없다면(좋아요를 누른 사람중에 내가 없다면)
      return( //까만색 하트 버튼을 출력해요
        <TouchableOpacity
          onPress={addTweetLike} //클릭하면 좋아요를 추가해요
          style={{ padding:4 }}
        >
          <Image
            source={HEART_DISABLED}
            style={{ width:12, height:12, resizeMode:'contain' }}
          />
        </TouchableOpacity>
      )
    }
  }

  return(
    <View style={styles.container_row_tweets}>
      {/* 아이템 <View> */}
      <View style={{ marginLeft:10, marginRight:10 }}>
        {/* 아바타이미지 <Image> */}
        <Image
          source={{uri: tweet.user.profileImage}} //user의 profileImage라는 값을 사용해요
          style={{ width:50, height:50, borderRadius:50 }}
        />
      </View>

      {/* 컨테이너 (세로방향) <View> */}
      <View style={styles.container_column}>

        {/* 컨테이너 (가로방향) <View> */}
        <View style={styles.container_row}>
          {/* 아이템 <View> */}
          <View>
            {/* 닉네임 <Text> */}
            <Text style={{ color:'black', fontSize:15, fontWeight:'bold' }}>
              {/* user의 nickname이라는 값을 사용해요 */}
              {tweet.user.nickname}
            </Text>
          </View>
          {/* 아이템 <View> */}
          <View>
            {/* 대화명 <Text> */}
            <Text style={styles.text_sub}>
              {/* user의 username 값을 사용해요 */}
              {tweet.user.username}
            </Text>
          </View>
          {/* 아이템 <View> */}
          <View>
            {/* 날짜 <Text> */}
            <Text style={styles.text_sub}>
              {/* createdAt의 _seconds라는 값을 사용해요 데이터 형식을 변환해주어야 해요 */}
              {convertTime(tweet.createdAt._seconds)}
            </Text>
          </View>
        </View>

        {/* 아이템 <View> */}
        <View style={{ marginTop:4, marginBottom:4 }}>
          {/* 트윗내용 <Text> */}
          <Text>
            {/* contents 값을 사용해요 */}
            {tweet.contents}
          </Text>
        </View>

        {/* 컨테이너 (가로방향) <View> */}
        <View style={styles.container_row}>
          {getHeartButton()}
          {/* 아이템 <View> */}
          <View>
            {/* 좋아요숫자 <Text> */}
            <Text style={{ fontSize:12, marginLeft:4, color:'black' }}>
              {/* likedUser 라는 배열 변수의 길이를 사용해요 (좋아요 개수) */}
              {tweet.likedUser.length}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container_column: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
    },
    container_row: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
    },
    container_row_tweets: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '100%',
      padding: 15,
      borderBottomColor: 'lightgray',
      borderBottomWidth: 0.2,
    },
    text_sub: {
      color: 'gray',
      fontSize: 13,
      marginLeft: 6,
    },
  })
  

