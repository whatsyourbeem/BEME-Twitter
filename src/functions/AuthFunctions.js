export const signUp = async (id, password, nickname, username) => {
  try{
    const response = await fetch(
      'https://asia-northeast1-beme-twitter.cloudfunctions.net/createUser',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          password: password,
          nickname: nickname,
          username: username,
        })
      }
    );
    const responseBody = await response.json()
    return responseBody;
  } catch{
    return {success:false}
  }
}

export const signIn = async (id, password) => {
  try{
    const response = await fetch(
      'https://asia-northeast1-beme-twitter.cloudfunctions.net/login',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          password: password,
        })
      }
    );
    const responseBody = await response.json()
    return responseBody;
  } catch{
    return {success:false}
  }
}

export const updateUser = async (id, username, nickname) => {
  try{
    const response = await fetch(
      'https://asia-northeast1-beme-twitter.cloudfunctions.net/updateUser',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          data: {
            username: username,
            nickname: nickname,
          }
        })
      }
    );
    const responseBody = await response.json()
    return responseBody;
  } catch{
    return {success:false}
  }
}