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