import Image from 'next/image'

interface DetailContainerProps {
  username: string
  localname: string
  boardtitle: string
}

export default function DetailContainer(props: DetailContainerProps) {
  const { username, localname, boardtitle } = props
  return (
    <div className="w-full bg-white p-4">
      <div className="flex justify-between w-full gap-2 bg-white pb-4 border-b border-[#EEEEEE]">
        <div className="flex gap-2">
          <div>
            <Image
              className="ml-2"
              src="/icon/profile.svg"
              alt="expand"
              width={40}
              height={40}
            />
          </div>
          <div>
            <h1 className="font-bold">{username}</h1>
            <h3 className="text-[#4F4F4F]">{localname}</h3>
          </div>
        </div>
        <div>
          <h1 className="flex gap-1">
            <span className="text-[#4AC1DB]">37.2°C</span>
            <div className="flex items-end">
              <Image src="/icon/🙂.svg" alt="smile" width={20} height={20} />
            </div>
          </h1>
          <div className="w-12 h-1 bg-gray-200 rounded-md">
            <div className="w-6 h-1 bg-[#4AC1DB] rounded-md"></div>
          </div>
          <h3 className="underline text-gray-400 text-[14px]">매너온도</h3>
        </div>
      </div>
      <div className="p-2 leading-12 mt-4 border-b border-[#EEEEEE] pb-4">
        <h2 className="font-bold text-lg text">{boardtitle}</h2>
        <p className="text-[#8C8C8C] text-sm mt-2 mb-4">
          <span className="underline">디지털기기</span> * 끌올 1일 전
        </p>
        <div className="leading-6">
          8/31일 해외직구한
          <br />
          한달도 안된제품 입니다.
          <br />
          박풀 S급입니다.
        </div>
        <div className="text-[#8C8C8C] text-sm mt-4">관심 15 * 조회 311</div>
      </div>
      <div className="flex p-2 w-full justify-between items-center border-b border-[#EEEEEE] py-4">
        <div className="font-bold">이 게시글 신고하기</div>
        <div>
          <Image
            src="/icon/moreView.svg"
            alt="moreView"
            width={14}
            height={14}
          />
        </div>
      </div>
      <div className="flex p-2 w-full justify-between items-center py-4">
        <div className="font-bold">{username}님의 판매 상품</div>
        <div>
          <Image
            src="/icon/moreView.svg"
            alt="moreView"
            width={14}
            height={14}
          />
        </div>
      </div>
      <DetailRecommendItem />
    </div>
  )
}

function DetailRecommendItem() {
  return (
    <div className="flex gap-4 w-full">
      <div className="p-2 w-1/2">
        <Image
          src="/icon/item_01.svg"
          alt="moreView"
          width={170}
          height={170}
          className="w-full"
        />
        <h2 className="mt-2 text-ellipsis truncate">에어팟 미개봉</h2>
        <p className="font-bold">240,000원</p>
      </div>
      <div className="p-2 w-1/2">
        <Image
          src="/icon/item_01.svg"
          alt="moreView"
          width={170}
          height={170}
          className="w-full"
        />
        <h2 className="mt-2 text-ellipsis truncate">에어팟 미개봉</h2>
        <p className="font-bold">240,000원</p>
      </div>
    </div>
  )
}
