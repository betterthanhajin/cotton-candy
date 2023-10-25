import Image from 'next/image'
export default function ChatDetailContainer() {
  return (
    <div className="w-full h-full">
      <div className="flex p-2 border-b border-t gap-2">
        <div>
          <Image src="/icon/Frame 1.svg" alt="Home" width={55} height={55} />
        </div>
        <div className="p-1">
          <span className="font-bold">빌려주는 중 !</span> 산악자전거 장기대여
          가능합니다~!
          <div>
            <strong>5,000원</strong>
          </div>
        </div>
      </div>
      <div className="p-2 flex gap-4 items-end justify-end w-full">
        <div className="text-sm text-gray-500 w-1/3">오후 3:59</div>
        <div className="bg-orange-400 rounded-md text-white text-sm px-3 py-2 flex w-2/3">
          동해물과백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화
          삼천리 화려강산 대한사람 대한으로 길이 보전하세
        </div>
      </div>
      <div className="p-2 flex gap-4 items-end justify-start w-full">
        <Image
          src="/icon/emptyprofile.svg"
          alt="profile"
          width={54}
          height={44}
        />
        <div className="bg-gray-200 rounded-md text-black text-sm px-3 py-2 flex min-w-min  w-2/3">
          동해물과백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화
          삼천리 화려강산 대한사람 대한으로 길이 보전하세
        </div>
        <div className="text-sm text-gray-500  w-1/3">오후 8:46</div>
      </div>
    </div>
  )
}
