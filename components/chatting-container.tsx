import Image from 'next/image'
import Link from 'next/link'
export default function ChattingContainer() {
  return (
    <div className="w-full h-full select-none">
      <div className="flex justify-between px-4 py-5">
        <h1 className="font-bold text-lg">채팅</h1>
      </div>
      <Link href="/chat/1267048304">
        <article className="px-4 py-5 flex justify-between cursor-pointer">
          <div className="flex gap-4">
            <Image
              src="/icon/profile.svg"
              alt="profile"
              width={40}
              height={40}
            />
            <div>
              <p>
                <strong className="mr-2">ANBER</strong>
                <span className="text-sm text-[#8C8C8C]">쿠팡 · 1주전</span>
              </p>
              <p>감사합니다!!조심히가세요!!</p>
            </div>
          </div>
          <div>
            <img
              src="/mock/item5.jpeg"
              alt="chatItem"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </div>
        </article>
      </Link>
    </div>
  )
}
