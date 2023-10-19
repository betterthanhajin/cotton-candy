import Image from 'next/image'

export default function ListFooter() {
  return (
    <div className="py-2 bg-white w-full flex justify-around border-t border-t-[#d9d9d9] select-none fixed bottom-0">
      <div className="text-center flex justify-center flex-col items-center">
        <Image src="/icon/Home.svg" alt="Home" width={24} height={24} />
        <span className="text-[10px]">홈</span>
      </div>
      <div className="text-center flex justify-center flex-col items-center">
        <Image src="/icon/News.svg" alt="Home" width={24} height={24} />
        <span className="text-[10px]">동네생활</span>
      </div>
      <div className="text-center flex justify-center flex-col items-center">
        <Image
          className=""
          src="/icon/Place Marker.svg"
          alt="Home"
          width={24}
          height={24}
        />
        <span className="text-[10px]">내 근처</span>
      </div>
      <div className="text-center flex justify-center flex-col items-center">
        <Image src="/icon/Chat.svg" alt="Home" width={24} height={24} />
        <span className="text-[10px]">채팅</span>
      </div>
      <div className="text-center flex justify-center flex-col items-center">
        <Image
          className=""
          src="/icon/User.svg"
          alt="Home"
          width={24}
          height={24}
        />
        <span className="text-[10px]">나의 당근</span>
      </div>
    </div>
  )
}
