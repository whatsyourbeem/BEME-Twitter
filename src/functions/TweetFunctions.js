export const createTweet = async (id, contents) => {
  try{
    const response = await fetch(
      'https://asia-northeast1-beme-twitter.cloudfunctions.net/createTweet',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: id,
          contents: contents,
        })
      }
    );
    const responseBody = await response.json()
    return responseBody;
  } catch{
    return {success:false}
  }
}

export const readTweet = async (number) => {
  let response;
  if(number){
    response = await fetch('https://asia-northeast1-beme-twitter.cloudfunctions.net/readTweet?limit='+String(number));
  } else{
    response = await fetch('https://asia-northeast1-beme-twitter.cloudfunctions.net/readTweet');
  }
  const responseBody = await response.json()
  return responseBody;
}

export const addTweetLike = async (userId, tweetId) => {
  const response = await fetch(
    'https://asia-northeast1-beme-twitter.cloudfunctions.net/addTweetLike',
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clickedUser: userId,
        tweet: tweetId,
      })
    }
  );
  const responseBody = await response.json()
  console.log(responseBody);
  return responseBody;
}

export const removeTweetLike = async (userId, tweetId) => {
  const response = await fetch(
    'https://asia-northeast1-beme-twitter.cloudfunctions.net/removeTweetLike',
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clickedUser: userId,
        tweet: tweetId,
      })
    }
  );
  const responseBody = await response.json()
  console.log(responseBody);
  return responseBody;
}