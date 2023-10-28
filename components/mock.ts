import { CottonItemProps } from './cotton-item'

const mockItems: CottonItemProps[] = [
  {
    localName: '쿠팡',
    itemName: '앙플러스 오리쿠션 대형 거위 바디필로우 베개 130cm',
    itemCash: 19500,
    imageUrl: '/mock/item1.jpeg',
    createdAt: '2023-10-26',
    chatCount: 0,
    likeCount: 0,
  },
  {
    localName: '쿠팡',
    itemName: '모찌 시바견 애착인형',
    imageUrl: '/mock/item2.jpeg',
    itemCash: 9250,
    createdAt: '2023-10-26',
    chatCount: 0,
    likeCount: 0,
  },
  {
    localName: '쿠팡',
    itemName: '순잠 허니버블 곰돌이 북극곰 바디필로우 애착인형',
    imageUrl: '/mock/item3.jpeg',
    itemCash: 8710,
    createdAt: '2023-10-26',
    chatCount: 0,
    likeCount: 0,
  },
  {
    localName: '쿠팡',
    itemName: '노블레빗 토끼 애착 인형',
    imageUrl: '/mock/item4.jpeg',
    itemCash: 8590,
    createdAt: '2023-10-26',
    chatCount: 0,
    likeCount: 0,
  },
  {
    localName: '쿠팡',
    itemName: 'ANBER 귀엽고 멍하고있는공룡인형 안고자는 쿠션',
    imageUrl: '/mock/item5.jpeg',
    itemCash: 29580,
    createdAt: '2023-10-26',
    chatCount: 0,
    likeCount: 0,
  },
  {
    localName: '쿠팡',
    itemName: 'ANBER 고양이 바디필로우 성인애착인형',
    imageUrl: '/mock/item6.jpeg',
    itemCash: 37580,
    createdAt: '2023-10-26',
    chatCount: 0,
    likeCount: 0,
  },
  {
    localName: '쿠팡',
    itemName: '큐티빈 보들보들 귀여운 리본 토끼 애착인형',
    imageUrl: '/mock/item7.jpeg',
    itemCash: 19800,
    createdAt: '2023-10-26',
    chatCount: 0,
    likeCount: 0,
  },
  {
    localName: '쿠팡',
    itemName: '쵸바 15cm',
    imageUrl: '/mock/item8.jpeg',
    itemCash: 5740,
    createdAt: '2023-10-26',
    chatCount: 0,
    likeCount: 0,
  },
  {
    localName: '쿠팡',
    itemName: '네이처타임즈 안고자는 돼지 인형',
    imageUrl: '/mock/item9.jpeg',
    itemCash: 27800,
    createdAt: '2023-10-26',
    chatCount: 0,
    likeCount: 0,
  },
  {
    localName: '쿠팡',
    itemName: '물개 인형 하프 물범 대형 모찌 쿠션',
    imageUrl: '/mock/item10.jpeg',
    itemCash: 19500,
    createdAt: '2023-10-26',
    chatCount: 0,
    likeCount: 0,
  },
]

const originItems = JSON.parse(JSON.stringify(mockItems))
for (let i = 0; i < 10; i++) mockItems.push(...originItems)

export { mockItems }
