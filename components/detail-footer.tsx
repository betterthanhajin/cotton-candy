import Image from 'next/image'

export default function DetailFooter() {
  return (
    <div className="p-5 flex justify-between items-center">
      <div>
        <Image src="/icon/heart.svg" alt="heart" width={24} height={24} />
      </div>
      <p className="font-bold">
        360,000원
        <br />
        <span className="text-gray-400">가격 제안 불가</span>
      </p>
      <div className="p-2 bg-orange-500 text-white w-20 h-8 rounded-md flex justify-center items-center">
        채팅하기
      </div>
    </div>
  )
}
