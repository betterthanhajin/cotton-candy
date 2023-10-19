import Image from 'next/image'
import CottonItem, { CottonItemProps } from './cotton-item'

export default function ListViewer() {
  const mockItems: CottonItemProps[] = [
    {
      localName: '고잔동',
      itemName: '하민이물건',
      itemCash: 1000,
      createdAt: '2023-09-22',
      chatCount: 3,
      likeCount: 11,
    },
  ]

  for (let i = 0; i < 100; i++) {
    mockItems.push(mockItems[0])
  }

  const dumy = ['a', 'b', 'c', 'd']
  return (
    <div className="w-full bg-white-300 h-full overflow-y-scroll">
      {mockItems.map((item, index) => (
        <CottonItem key={index} {...item} />
      ))}
      <div className="absolute right-4 bottom-16 select-none">
        <div className="w-12 h-12 bg-orange-500 flex justify-center items-center rounded-full shadow-md">
          <div>
            <Image
              src="/icon/Plus Math.svg"
              alt="plus"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
