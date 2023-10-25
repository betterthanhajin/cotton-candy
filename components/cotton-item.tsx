import Image from 'next/image'
import commaNumber from 'comma-number'

export interface CottonItemProps {
  itemName?: string
  createdAt?: string
  itemCash?: number
  localName?: string
  chatCount?: number
  likeCount?: number
}
export default function CottonItem(props: CottonItemProps) {
  const { itemName, createdAt, itemCash, localName, chatCount, likeCount } =
    props
  return (
    <article className="p-4 bg-white-300 bottom-1 select-none">
      <div className="flex">
        <div>
          <Image
            className=""
            src="/icon/Rectangle 2.svg"
            alt="img"
            width={110}
            height={110}
          />
        </div>
        <div className="ml-4 w-full">
          <h1 className="text-base">
            <data>{itemName ?? '이름없음'}</data>
          </h1>
          <span className="text-xs text-gray-600">
            <data>
              {localName ?? '고잔동'} · {createdAt ?? '3'}일전
            </data>
          </span>
          <div className="text-orange-500">
            <data>
              {itemCash ? `${commaNumber(itemCash)}원` : '가격정보없음'}
            </data>
          </div>
          <div className="flex text-gray-600 text-xs items-end justify-end gap-1">
            <Image
              className=""
              src="/icon/bx_chat.svg"
              alt="img"
              width={16}
              height={16}
            />
            <data>{chatCount ?? '0'}</data>
            <Image
              className=""
              src="/icon/ant-design_heart-outlined.svg"
              alt="img"
              width={16}
              height={16}
            />
            <data>{likeCount ?? '0'}</data>
          </div>
        </div>
      </div>
    </article>
  )
}
