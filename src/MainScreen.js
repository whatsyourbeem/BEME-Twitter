import React from 'react';

import { StyleSheet, Modal, View, TouchableOpacity, Text, Image } from 'react-native';

import LOGO from './src/assets/logo_color.png';
import TEXT_ICON from './src/assets/logo_text.png';
import CREATE_ICON from './src/assets/plus.png';
import HEART_ENABLED from './src/assets/heart_enabled.png';
import HEART_DISABLED from './src/assets/heart_disabled.png';

export const MainScreen = () => {
  return (
    // 모달 <Modal>
    <Modal visible={true} animationType={'slide'} presentationStyle={'pageSheet'}>

      {/* 컨테이너 (세로방향) <View> */}
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
          <TouchableOpacity style={{ marginLeft:'auto', marginRight:8 }}>
            {/* 플러스버튼 <Image> */}
            <Image
              source={CREATE_ICON}
              style={{ width:25, height:25, resizeMode:'contain' }}
            />
          </TouchableOpacity>
          {/* 아이템 <TouchableOpacity> */}
          <TouchableOpacity style={{ marginLeft:8, marginRight:20 }}>
            {/* 아바타이미지 <Image> */}
            <Image
              source={{uri:'https://firebasestorage.googleapis.com/v0/b/beme-twitter.appspot.com/o/profile-images%2FThumbnail64.jpg?alt=media&token=be4000fe-822e-4a6f-8ceb-a5b31da1ca9a'}}
              style={{ width:32, height:32, borderRadius:32 }}
            />
          </TouchableOpacity>
        </View>


        {/* 컨테이너 (세로방향,콘텐츠) <View> */}
        <View style={styles.container_column}>

          {/* 컨테이너 (가로방향) <View> */}
          <View style={styles.container_row_tweets}>
            {/* 아이템 <View> */}
            <View style={{ marginLeft:10, marginRight:10 }}>
              {/* 아바타이미지 <Image> */}
              <Image
                source={{uri:'https://firebasestorage.googleapis.com/v0/b/beme-twitter.appspot.com/o/profile-images%2FThumbnail64.jpg?alt=media&token=be4000fe-822e-4a6f-8ceb-a5b31da1ca9a'}}
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
                    닉네임
                  </Text>
                </View>
                {/* 아이템 <View> */}
                <View>
                  {/* 대화명 <Text> */}
                  <Text style={styles.text_sub}>
                    @트위터대화명
                  </Text>
                </View>
                {/* 아이템 <View> */}
                <View>
                  {/* 날짜 <Text> */}
                  <Text style={styles.text_sub}>
                    - 2022.09.18
                  </Text>
                </View>
              </View>

              {/* 아이템 <View> */}
              <View style={{ marginTop:4, marginBottom:4 }}>
                {/* 트윗내용 <Text> */}
                <Text>
                  내가 만든 트위터 클론 앱!
                </Text>
              </View>

              {/* 컨테이너 (가로방향) <View> */}
              <View style={styles.container_row}>
                {/* 아이템 <TouchableOpacity> */}
                <TouchableOpacity style={{padding:4}}>
                  {/* 하트버튼 <Image> */}
                  <Image
                    source={HEART_ENABLED}
                    style={{ width:12, height:12, resizeMode:'contain' }}
                  />
                </TouchableOpacity>
                {/* 아이템 <View> */}
                <View>
                  {/* 좋아요숫자 <Text> */}
                  <Text style={{ fontSize:12, marginLeft:4, color:'black' }}>
                    3
                  </Text>
                </View>
              </View>
            </View>
          </View>


          {/* 똑같이 반복!!! */}
          {/* 컨테이너 (가로방향) <View> */}
          <View style={styles.container_row_tweets}>

            {/* 아이템 <View> */}
            <View style={{ marginLeft:10, marginRight:10 }}>
              {/* 아바타이미지 <Image> */}
              <Image
                source={{uri:'https://booksarebucket.s3.ap-northeast-2.amazonaws.com/beem_profile_pics/JHyun.jpeg'}}
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
                    제이현
                  </Text>
                </View>
                {/* 아이템 <View> */}
                <View>
                  {/* 대화명 <Text> */}
                  <Text style={styles.text_sub}>
                    @from_jhyun_
                  </Text>
                </View>
                {/* 아이템 <View> */}
                <View>
                  {/* 날짜 <Text> */}
                  <Text style={styles.text_sub}>
                    - 2022.09.16
                  </Text>
                </View>
              </View>

              {/* 아이템 <View> */}
              <View style={{ marginTop:4, marginBottom:4 }}>
                {/* 트윗내용 <Text> */}
                <Text>
                  저는 제이 투더 현 입니다
                </Text>
              </View>

              {/* 컨테이너 (가로방향) <View> */}
              <View style={styles.container_row}>
                {/* 아이템 <TouchableOpacity> */}
                <TouchableOpacity style={{padding:4}}>
                  {/* 하트버튼 <Image> */}
                  <Image
                    source={HEART_DISABLED}
                    style={{ width:12, height:12, resizeMode:'contain' }}
                  />
                </TouchableOpacity>
                {/* 아이템 <View> */}
                <View>
                  {/* 좋아요숫자 <Text> */}
                  <Text style={{ fontSize:12, marginLeft:4, color:'black' }}>
                    0
                  </Text>
                </View>
              </View>
            </View>
          </View>


          {/* 똑같이 반복!!! */}
          {/* 컨테이너 (가로방향) <View> */}
          <View style={styles.container_row_tweets}>

            {/* 아이템 <View> */}
            <View style={{ marginLeft:10, marginRight:10 }}>
              {/* 아바타이미지 <Image> */}
              <Image
                source={{uri:'https://ko.gravatar.com/userimage/152785840/64bc75da338137363d6911a1c649ba40.png?size=200'}}
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
                    DQ
                  </Text>
                </View>
                {/* 아이템 <View> */}
                <View>
                  {/* 대화명 <Text> */}
                  <Text style={styles.text_sub}>
                    @dragonq29
                  </Text>
                </View>
                {/* 아이템 <View> */}
                <View>
                  {/* 날짜 <Text> */}
                  <Text style={styles.text_sub}>
                    - 2022.09.15
                  </Text>
                </View>
              </View>

              {/* 아이템 <View> */}
              <View style={{ marginTop:4, marginBottom:4 }}>
                {/* 트윗내용 <Text> */}
                <Text>
                  안녕하세요 저는 드래곤큐 입니다
                </Text>
              </View>

              {/* 컨테이너 (가로방향) <View> */}
              <View style={styles.container_row}>
                {/* 아이템 <TouchableOpacity> */}
                <TouchableOpacity style={{padding:4}}>
                  {/* 하트버튼 <Image> */}
                  <Image
                    source={HEART_DISABLED}
                    style={{ width:12, height:12, resizeMode:'contain' }}
                  />
                </TouchableOpacity>
                {/* 아이템 <View> */}
                <View>
                  {/* 좋아요숫자 <Text> */}
                  <Text style={{ fontSize:12, marginLeft:4, color:'black' }}>
                    1
                  </Text>
                </View>
              </View>
            </View>
          </View>


        </View>
      </View>
    </Modal>
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
