import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

import LOGO from './assets/logo_color.png';
import TEXT_ICON from './assets/logo_text.png';
import CREATE_ICON from './assets/plus.png';

import { TweetItem } from './TweetItem';
import { CreateTweetModal } from './CreateTweetModal'
import { SettingsModal } from './SettingsModal'

export const MainScreen = (props) => {
  const [tweets, setTweets] = useState([]); // 응답 데이터를 담을 변수를 선언해요 우리가 받는 응답 데이터는 배열이니까, 초기값으로 빈 배열을 넣어줬어요.
  const [openCreateTweetModal, setOpenCreateTweetModal] = useState(false); //CreateTweetModal 을 열고 닫기 위한 변수에요
  const [openSettingsModal, setOpenSettingsModal] = useState(false); //SettingsModal 을 열고 닫기 위한 변수에요

  useEffect(() => {
    getTweet(); //화면이 처음 렌더링되면 getTweet 함수(전체 트윗을 읽어오는 함수)를 호출해요
  }, []);

  const getTweet = async () => { //전체 트윗을 읽어오는 함수
		const response = await axios.get('https://asia-northeast1-beme-twitter.cloudfunctions.net/readTweet'); //API 요청을 보내요
    setTweets(response.data.tweet); // 응답 데이터를 useState변수에 저장해요
  }

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

  const onCreateTweet = async (contents) => {
    setOpenCreateTweetModal(false); //우선 CreateTweetModal을 닫습니다

    const response = await axios.post( //API 요청을 전송합니다
      'https://asia-northeast1-beme-twitter.cloudfunctions.net/createTweet',
      {
        user: props.myProfile.id,
        contents: contents
      }
    );

    if(response.data.success===true){ //만약 API 응답 중 "success"가 true라면(성공)
      getTweet(); //전체 트윗 정보를 다시 가져옵니다
    } else{ //만약 API 응답 중 "success"가 true가 아니라면(실패)
      setOpenCreateTweetModal(true); //SignInModal을 다시 엽니다
    }
  }

  const onUpdateProfile = (user) => {
    props.onAuthenticate(user); //부모(App.js)로부터 전달받은 onAuthenticated 함수(props)를 호출합니다
  }
  const onLogout = () => {
    props.onLogout();
  }

  const getContent = () => {
    // 배열이름.length 는 배열의 길이를 뜻해요
    // 배열의 길이가 0보다 크면(배열에 내용이 있다면) 아래 내용을 출력해요
    if (tweets.length>0){
      const result = tweets.map( // map을 활용해서 배열 내 모든 원소에 접근해요
        (value,index) => { // input은 value와 index에요
          return( // TweetItem 컴포넌트를 출력해요
            <TweetItem tweet={value} myProfile={props.myProfile} />
          )
        }
      );
      return result;
    }
  }

  return (
    <View style={styles.container_column}>
      {/* 컨테이너 (가로방향,메뉴바) <View> */}
      <View style={styles.container_TopBar}>
        {/* 아이템 <View> */}
        <View style={{ marginLeft:20 }}>
          {/* 트위터로고1 <Image> */}
          <Image
            source={LOGO}
            style={{ width:25, height:25, resizeMode:'contain' }}
          />
        </View>
        {/* 아이템 <View> */}
        <View style={{ marginLeft:10 }}>
          {/* 트위터로고2 <Image> */}
          <Image
            source={TEXT_ICON}
            style={{ width:80, height:52, resizeMode:'contain' }}
          />
        </View>
        {/* 아이템 <TouchableOpacity> */}
        <TouchableOpacity
          onPress={onOpenCreateTweetModal}
          style={{ marginLeft:'auto', marginRight:8 }}
        >
          {/* 플러스버튼 <Image> */}
          <Image
            source={CREATE_ICON}
            style={{ width:25, height:25, resizeMode:'contain' }}
          />
        </TouchableOpacity>
        {/* 아이템 <TouchableOpacity> */}
        <TouchableOpacity
          onPress={onOpenSettingsModal}
          style={{ marginLeft:8, marginRight:20 }}
        >
          {/* 아바타이미지 <Image> */}
          <Image
            source={{uri: props.myProfile.profileImage}} //props로 전달받은 myProfile 데이터의 profileImage 값을 대입합니다
            style={{ width:32, height:32, borderRadius:32 }}
          />
        </TouchableOpacity>
      </View>
      {/* 컨테이너 (세로방향,콘텐츠) <ScrollView> */}
      <ScrollView>
        {getContent()}
      </ScrollView>
      <CreateTweetModal visible={openCreateTweetModal} onClose={onCloseCreateTweetModal} onCreate={onCreateTweet} myProfile={props.myProfile} />
      <SettingsModal visible={openSettingsModal} onClose={onCloseSettingsModal} onUpdateProfile={onUpdateProfile} onLogout={onLogout} myProfile={props.myProfile} />
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
  }
})
