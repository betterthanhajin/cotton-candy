import Image from 'next/image'
export default function MyCarrotPage() {
  return (
    <div>
      <div className="flex justify-between p-4">
        <h1>나의 당근</h1>
        <Image src="/icon/Settings.svg" alt="profile" width={24} height={24} />
      </div>
      <div className="p-4 flex justify-between items-center">
        <Image
          src="/icon/emptyprofile.svg"
          alt="profile"
          width={64}
          height={64}
        />
        <div>
          <span>
            가나다 <br />
            군자동 #123456789
          </span>
        </div>
        <Image src="/icon/moreView.svg" alt="moreView" width={14} height={14} />
      </div>
      <div className="flex justify-between rounded-md p-4 border border-dashed border-orange-500">
        <div className="text-orange-600">당근페이</div>
        <div className="text-sm text-[#5E5E5E]">
          중고거래는 이제 당근페이로 해보세요!
        </div>
      </div>
      <div className="flex justify-evenly mt-3 mb-3">
        <div className="flex items-center flex-col">
          <div className="rounded-full bg-[#FFEBE0] w-12 h-12 flex justify-center items-center">
            <Image src="/icon/sale.svg" alt="sale" width={24} height={24} />
          </div>
          판매내역
        </div>
        <div className="flex items-center flex-col">
          <div className="rounded-full bg-[#FFEBE0] w-12 h-12 flex justify-center items-center">
            <Image
              src="/icon/purchase.svg"
              alt="purchase"
              width={24}
              height={24}
            />
          </div>
          구매내역
        </div>
        <div className="flex items-center flex-col">
          <div className="rounded-full bg-[#FFEBE0] w-12 h-12 flex justify-center items-center">
            <Image
              src="/icon/orangeheart.svg"
              alt="orangeheart"
              width={24}
              height={24}
            />
          </div>
          관심목록
        </div>
      </div>
      <h2 className="font-bold mt-2 p-2">나의 활동</h2>
      <ul className="leading-8">
        <li className="flex p-2">
          <Image
            className="mr-3"
            src="/icon/News.svg"
            alt="Home"
            width={24}
            height={24}
          />
          내 동네 설정
        </li>
        <li className="flex p-2">
          <Image
            className="mr-3"
            src="/icon/News.svg"
            alt="Home"
            width={24}
            height={24}
          />
          동네 인증하기
        </li>
        <li className="flex p-2">
          <Image
            className="mr-3"
            src="/icon/News.svg"
            alt="Home"
            width={24}
            height={24}
          />
          키워드 알림
        </li>
        <li className="flex p-2">
          <Image
            className="mr-3"
            src="/icon/News.svg"
            alt="Home"
            width={24}
            height={24}
          />
          모아보기
        </li>
        <li className="flex p-2">
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
        <li className="flex p-2">
          <Image
            className="mr-3"
            src="/icon/News.svg"
            alt="Home"
            width={24}
            height={24}
          />
          내 동네생활 글/댓글
        </li>
        <li className="flex p-2">
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
