export const MyProfile = {
  uuid: 'abcdefg',
  id: 'from_jhyun',
  nickname: '제이현',
  picture: 'https://booksarebucket.s3.ap-northeast-2.amazonaws.com/beem_profile_pics/JHyun.jpeg',
}

export const Tweets = [
  {
    id: 1,
    author: {
      id: 'from_jhyun',
      nickname: '제이현',
      picture: 'https://booksarebucket.s3.ap-northeast-2.amazonaws.com/beem_profile_pics/JHyun.jpeg',
    },
    contents: '내가 만든 트위터 클론 앱! 이제 나도 개발자!\n빨리 나만의 앱을 만들고 싶다\nㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ화이팅',
    liked_users: [
      'abcdefg',
      'hijklmnop',
    ],
    created_at: 1661520849,
  },
  {
    id: 2,
    author: {
      id: 'from_jhyun',
      nickname: '제이현',
      picture: 'https://booksarebucket.s3.ap-northeast-2.amazonaws.com/beem_profile_pics/JHyun.jpeg',
    },
    contents: '저는 제이 투더 현 입니다',
    liked_users: [],
    created_at: 1661508129,
  },
  {
    id: 3,
    author: {
      id: 'dragonq29',
      nickname: 'DQ',
      picture: 'https://booksarebucket.s3.ap-northeast-2.amazonaws.com/beem_profile_pics/DragonQ.jpg',
    },
    contents: '안녕하세요 저는 드래곤큐 입니다',
    liked_users: [
      'abcdefg',
    ],
    created_at: 1661437209,
  },
]