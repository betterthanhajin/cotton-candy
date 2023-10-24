import Image from 'next/image'
export default function ChatDetailContainer() {
  return (
    <div className="w-full h-full">
      <div className="flex p-2 border-b">
        <div>
          <Image src="/icon/Frame 1.svg" alt="Home" width={55} height={55} />
        </div>
        <div className="p-2">
          <span className="font-bold">빌려주는 중 !</span> 산악자전거 장기대여
          가능합니다~!
          <div>
            <strong>5,000원</strong>
          </div>
        </div>
      </div>
      <div className="p-2 flex justify-between items-end">
        <div className="text-sm text-gray-500">오후 3:59</div>
        <div className="bg-orange-400 w-72 h-14 rounded-md text-white text-sm px-3 py-2 flex ">
          안녕하세요!
          <br />
          7월 11일 부터 13일까지 빌릴 수 있을까요 ?
        </div>
      </div>
      <div className="p-2 flex justify-between items-end">
        <Image
          src="/icon/emptyprofile.svg"
          alt="profile"
          width={57}
          height={54}
        />
        <div className="bg-gray-200 w-72 h-14 rounded-md text-black text-sm px-3 py-2 flex ">
          안녕하세요! 가능합니다!
        </div>
        <div className="text-sm text-gray-500">오후 3:59</div>
      </div>
    </div>
  )
}
