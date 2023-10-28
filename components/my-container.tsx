import { todoAlert } from '@/lib/todo'
import Image from 'next/image'
import Link from 'next/link'
export default function MyContainer() {
  return (
    <div className="w-full h-full select-none">
      <div className="flex justify-between p-4">
        <h1 className="font-bold text-lg">나의 당근</h1>
        <button
          onClick={() => {
            todoAlert()
          }}
        >
          <Image
            src="/icon/Settings.svg"
            alt="profile"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div
        className="p-4 flex justify-between items-center gap-4 cursor-pointer"
        onClick={() => {
          todoAlert()
        }}
      >
        <Image
          src="/icon/emptyprofile.svg"
          alt="profile"
          width={64}
          height={64}
        />
        <div className="w-full text-left">
          <p className="text-base font-bold">비회원</p>
          <p className="text-xs text-[#8C8C8C]">대한민국</p>
        </div>
        <Image src="/icon/moreView.svg" alt="moreView" width={14} height={14} />
      </div>
      <Link href="https://github.com/betterthanhajin" target="_blank">
        <div className="flex justify-between rounded-md p-3 border border-dashed border-orange-500 mx-4 items-center">
          <div className="text-orange-600">개발자 연락</div>
          <span className="text-sm text-[#5E5E5E]">@betterthanhajin</span>
        </div>
      </Link>
      <div className="flex justify-evenly mt-4 mb-4 text-xs">
        <button
          className="flex items-center flex-col gap-2"
          onClick={() => {
            todoAlert()
          }}
        >
          <div className="rounded-full bg-[#FFEBE0] w-12 h-12 flex justify-center items-center">
            <Image src="/icon/sale.svg" alt="sale" width={24} height={24} />
          </div>
          <span>판매내역</span>
        </button>
        <button
          className="flex items-center flex-col gap-2"
          onClick={() => {
            todoAlert()
          }}
        >
          <div className="rounded-full bg-[#FFEBE0] w-12 h-12 flex justify-center items-center">
            <Image
              src="/icon/purchase.svg"
              alt="purchase"
              width={24}
              height={24}
            />
          </div>
          <span>구매내역</span>
        </button>
        <button
          className="flex items-center flex-col gap-2"
          onClick={() => {
            todoAlert()
          }}
        >
          <div className="rounded-full bg-[#FFEBE0] w-12 h-12 flex justify-center items-center">
            <Image
              src="/icon/orangeheart.svg"
              alt="orangeheart"
              width={24}
              height={24}
            />
          </div>
          <span>관심목록</span>
        </button>
      </div>
      <h2 className="font-bold mt-2 p-2">나의 활동</h2>
      <ul className="leading-8">
        <li
          className="flex p-2 cursor-pointer"
          onClick={() => {
            todoAlert()
          }}
        >
          <Image
            className="mr-3"
            src="/icon/News.svg"
            alt="Home"
            width={24}
            height={24}
          />
          내 동네 설정
        </li>
        <li
          className="flex p-2 cursor-pointer"
          onClick={() => {
            todoAlert()
          }}
        >
          <Image
            className="mr-3"
            src="/icon/News.svg"
            alt="Home"
            width={24}
            height={24}
          />
          동네 인증하기
        </li>
        <li
          className="flex p-2 cursor-pointer"
          onClick={() => {
            todoAlert()
          }}
        >
          <Image
            className="mr-3"
            src="/icon/News.svg"
            alt="Home"
            width={24}
            height={24}
          />
          키워드 알림
        </li>
        <li
          className="flex p-2 cursor-pointer"
          onClick={() => {
            todoAlert()
          }}
        >
          <Image
            className="mr-3"
            src="/icon/News.svg"
            alt="Home"
            width={24}
            height={24}
          />
          모아보기
        </li>
        <li
          className="flex p-2 cursor-pointer"
          onClick={() => {
            todoAlert()
          }}
        >
          <Image
            className="mr-3"
            src="/icon/News.svg"
            alt="Home"
            width={24}
            height={24}
          />
          당근가계부
        </li>
      </ul>
      <h2 className="font-bold mt-2 p-2">우리동네</h2>
      <ul className="leading-8">
        <li
          className="flex p-2 cursor-pointer"
          onClick={() => {
            todoAlert()
          }}
        >
          <Image
            className="mr-3"
            src="/icon/News.svg"
            alt="Home"
            width={24}
            height={24}
          />
          내 동네생활 글/댓글
        </li>
        <li
          className="flex p-2 cursor-pointer"
          onClick={() => {
            todoAlert()
          }}
        >
          <Image
            className="mr-3"
            src="/icon/News.svg"
            alt="Home"
            width={24}
            height={24}
          />
          동네홍보 글
        </li>
      </ul>
    </div>
  )
}
