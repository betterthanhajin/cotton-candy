import Image from 'next/image'
export default function ChatDetailContainer() {
  return (
    <div className="w-full h-full select-none">
      <div className="flex p-2 border-b border-t gap-2">
        <div>
          <img
            src="/mock/item5.jpeg"
            alt="sell item"
            width={55}
            height={55}
            className="rounded-lg"
          />
        </div>
        <div className="p-1">
          <span className="font-bold">할인 중!</span> ANBER 귀엽고
          멍하고있는공룡인형 안고자는 쿠션
          <div>
            <strong>29,580원</strong>
          </div>
        </div>
      </div>
      <div className="p-2 flex gap-4 items-end justify-end w-full">
        <div className="text-sm text-gray-500 w-1/3 text-right">오후 3:59</div>
        <div className="bg-orange-400 rounded-md text-white text-sm px-3 py-2 flex w-2/3">
          안녕하세요 인형 구매하려는데 인형 오늘 입금하면 언제쯤 받아볼 수
          있을지 알 수 있을까요?
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
          안녕하세요! 쿠팡 로켓배송이나 오늘의 픽업으로 배송되기 때문에 당일 날
          주문 하시고 나서 다음 날 받으실 수 있을 것 같아요!
        </div>
        <div className="text-sm text-gray-500  w-1/3">오후 8:46</div>
      </div>
    </div>
  )
}
