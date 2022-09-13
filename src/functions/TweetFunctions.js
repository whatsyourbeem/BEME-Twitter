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
    console.log('all')
    response = await fetch('https://asia-northeast1-beme-twitter.cloudfunctions.net/readTweet');
  }
  const responseBody = await response.json()
  return responseBody;
}