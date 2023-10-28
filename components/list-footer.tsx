import { todoAlert } from '@/lib/todo'
import Image from 'next/image'
import Link from 'next/link'

export interface ListFooterProps {
  focused?: 'home' | 'local' | 'nearby' | 'chat' | 'my'
}

export default function ListFooter(props: ListFooterProps) {
  const { focused = 'home' } = props

  return (
    <div className="py-2 bg-white w-full flex justify-around border-t border-t-[#d9d9d9] select-none sticky bottom-0">
      <Link href="/">
        <button className="text-center flex justify-center flex-col items-center">
          {focused === 'home' ? (
            <Image
              src="/icon/footer-home-focused.svg"
              alt="Home"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/icon/footer-home.svg"
              alt="Home"
              width={24}
              height={24}
            />
          )}
          <span className="text-[10px]">홈</span>
        </button>
      </Link>
      <button
        className="text-center flex justify-center flex-col items-center"
        onClick={() => {
          todoAlert()
        }}
      >
        <Image src="/icon/News.svg" alt="Home" width={24} height={24} />
        <span className="text-[10px]">동네생활</span>
      </button>
      <button
        className="text-center flex justify-center flex-col items-center"
        onClick={() => {
          todoAlert()
        }}
      >
        <Image
          className=""
          src="/icon/Place Marker.svg"
          alt="Home"
          width={24}
          height={24}
        />
        <span className="text-[10px]">내 근처</span>
      </button>
      <Link href="/chat">
        <button className="text-center flex justify-center flex-col items-center">
          {focused === 'chat' ? (
            <Image
              src="/icon/footer-chat-focused.svg"
              alt="Chat"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/icon/footer-chat.svg"
              alt="Chat"
              width={24}
              height={24}
            />
          )}
          <span className="text-[10px]">채팅</span>
        </button>
      </Link>
      <Link href="/my">
        <button className="text-center flex justify-center flex-col items-center">
          {focused === 'my' ? (
            <Image
              src="/icon/footer-my-focused.svg"
              alt="My"
              width={24}
              height={24}
            />
          ) : (
            <Image src="/icon/footer-my.svg" alt="My" width={24} height={24} />
          )}
          <span className="text-[10px]">나의 당근</span>
        </button>
      </Link>
    </div>
  )
}
