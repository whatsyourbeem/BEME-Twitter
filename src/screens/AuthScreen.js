import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux'
import { authenticate, setProfile } from '../redux/reducer/AuthReducer';

import { SignInModal } from './SignInModal';
import { SignUpModal } from './SignUpModal';

import * as AuthFunctions from '../functions/AuthFunctions'

import LOGO from '../assets/logo_white.png'
import EMAIL_ICON from '../assets/email.png'

export const AuthScreen = () => {
  const dispatch = useDispatch();

  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const onOpenSignInModal = () => {
    setOpenSignInModal(true);
  }
  const onCloseSignInModal = () => {
    setOpenSignInModal(false);
  }
  const onOpenSignUpModal = () => {
    setOpenSignUpModal(true);
  }
  const onCloseSignUpModal = () => {
    setOpenSignUpModal(false);
  }

  const onSignIn = async (id, password) => {
    setOpenSignInModal(false);
    const response = await AuthFunctions.signIn(id,password);
    if(response.success){
      dispatch(authenticate(true));
      dispatch(setProfile(response.user));
      console.log(response.user)
    } else{
      setOpenSignInModal(true);
    }
  }
  const onSignUp = async (id,password,nickname,username) => {
    const response = await AuthFunctions.signUp(id,password,nickname,username);
    if(response.success){
      dispatch(authenticate(true));
      dispatch(setProfile(response.user));
      console.log(response.user)
    } else{
      setOpenSignInModal(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{margin:10}}>
        <Image source={LOGO} style={styles.image_logo}/>
      </View>
      <View style={{margin:10}}>
        <Text style={styles.text_logo}>
          BEME - TWITTER
        </Text>
      </View>
      <TouchableOpacity onPress={onOpenSignInModal} style={styles.signin_btn}>
        <Image source={EMAIL_ICON} style={styles.image_signinbutton}/>
        <Text style={styles.text_signinbutton}>
          ???????????? ???????????????
        </Text>
      </TouchableOpacity>
      <View>
      </View>
      <TouchableOpacity onPress={onOpenSignUpModal} style={styles.signup_btn}>
        <Text style={{color:'white'}}>
          ???????????????????
        </Text>
        <Text style={styles.text_signupbutton}>
          ????????????
        </Text>
      </TouchableOpacity>

      <SignInModal visible={openSignInModal} onSignIn={onSignIn} onClose={onCloseSignInModal} />
      <SignUpModal visible={openSignUpModal} onSignUp={onSignUp} onClose={onCloseSignUpModal} />
    </View>
  );
};


// ???????????? ???????????? ?????? ??? ????????? ?????? ????????????. (????????? ?????? CSS?????? ????????? ????????? ????????????.)
// ????????? ??? ?????? ????????? ????????? ????????? ???????????? ??????. https://reactnative.dev/docs/text-style-props
const styles = StyleSheet.create({
  container: {
    display: 'flex',
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
  signin_btn: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 150,
    borderColor: 'gray',
    borderWidth: 1,
  },
  signup_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  image_signinbutton: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  text_signinbutton: {
    color: 'black',
    fontSize: 15,
    marginLeft: 20,
  },
  text_signupbutton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',
    marginLeft: 10,
  },
})