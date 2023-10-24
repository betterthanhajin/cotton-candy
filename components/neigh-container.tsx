import Image from 'next/image'
export default function NeighContainer() {
  return (
    <div className="overflow-y-scroll">
      <ul className="flex p-2 border-b">
        <li className="mr-5 p-1 border rounded-md">동네소식</li>
        <li className="mr-5 p-1 border rounded-md">같이해요</li>
        <li className="mr-5 p-1 border rounded-md">동네질문</li>
        <li className="mr-5 p-1 border rounded-md">동네맛집</li>
        <li className="mr-5 p-1 border rounded-md">취미생활</li>
      </ul>
      <div className="flex p-4">
        <div className="gap-2">
          <Image src="/icon/back.svg" alt="back" width={40} height={40} />
        </div>
        <h1 className="text-lg">
          <strong>당근이웃과 함께하는 장도연의 동네생활</strong>
          <div className="text-sm text-[#8C8C8C]">
            가나다님 지금 바로 구경해보세요!
          </div>
        </h1>
      </div>
      <div>
        <div className="p-2 border-t">
          <div className="rounded-md w-20 bg-gray-200 text-center text-sm p-1">
            같이해요
          </div>
          <p className="p-2">
            <span>모집중</span>맥주마실 사람~
          </p>
          <p className="p-2">쪽지 주세요 고고!!</p>
          <p className="flex p-2">
            <Image
              src="/icon/Chat Message.svg"
              alt="profile"
              width={16}
              height={16}
            />
            누구나 참여 가능
          </p>
          <p className="flex p-2">
            <Image
              src="/icon/User Account.svg"
              alt="profile"
              width={16}
              height={16}
            />
            2/4명 참여
          </p>
          <div className="p-2 flex justify-between text-sm text-[#8C8C8C]">
            <span>요우우 * 화양동</span>
            <span>3분전</span>
          </div>
        </div>
        <div className="p-2 border-t">
          <div className="rounded-md w-20 bg-gray-200 text-center text-sm p-1">
            동네질문
          </div>
          <p className="p-2">
            <span>Q.</span> 혼밥은 다들 어디서 하시나요? <br />
            뻘쭘하지 않고 사장님들께 안 미안한 곳, 어디든 리스트업해서 한번씩
            가보려구요. 부탁드
            <br />
            립니다!
          </p>
          <div className="p-2 flex justify-between text-sm text-[#8C8C8C]">
            <span>도우영 * 화양동</span>
            <span>15분전</span>
          </div>
          <div className="flex">
            <span className="flex mr-4">
              <Image src="/icon/Ok.svg" alt="back" width={16} height={16} />
              궁금해요
            </span>
            <span className="flex">
              <Image src="/icon/Answer.svg" alt="back" width={16} height={16} />
              답변 2
            </span>
          </div>
        </div>
        <div className="p-2 border-t">
          <div className="rounded-md w-20 bg-gray-200 text-center text-sm p-1">
            동네맛집
          </div>
          <p className="p-2">
            <span></span> 송정동 밥집 추천 부탁드려요 <br />
            퇴근하고 뭐 해먹기 귀찮을때 먹을만한 곳이요 ...
            <strong>더보기</strong>
          </p>
          <div className="p-2 flex justify-between text-sm text-[#8C8C8C]">
            <span>카리 * 화양동</span>
            <span>17분전</span>
          </div>
          <div className="flex">
            <span className="flex mr-4">
              <Image src="/icon/Happy.svg" alt="back" width={16} height={16} />
              공감하기
            </span>
            <span className="flex">
              <Image src="/icon/Answer.svg" alt="back" width={16} height={16} />
              댓글 2
            </span>
          </div>
        </div>
        <div className="p-2 border-t">
          <div className="rounded-md w-20 bg-gray-200 text-center text-sm p-1">
            분실/실종센터
          </div>
          <p className="p-2">
            <span>찾아요</span> 카드 지갑을 분실했습니다. 발견하시면
            사례하겠습니
            <br />
            다. 꼭 찾아주세요
            {/* <strong>더보기</strong> */}
          </p>
          <div className="flex">
            <Image src="/icon/card1.svg" alt="back" width={223} height={180} />
            <Image src="/icon/card2.svg" alt="back" width={180} height={180} />
          </div>
          <div className="flex items-center gap-10 border">
            <div>
              <Image
                src="/icon/fontisto_map-marker-alt.svg"
                alt="map"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p>파리게이츠</p>
              <p className="text-gray-500">서울특별시 광진구 동일로 350</p>
            </div>
          </div>
          <div className="p-2 flex justify-between text-sm text-[#8C8C8C]">
            <span>Maro * 중곡동</span>
            <span>1시간 전</span>
          </div>
          <div className="flex">
            <span className="flex mr-4">
              <Image src="/icon/Happy.svg" alt="back" width={16} height={16} />
              공감하기
            </span>
            <span className="flex">
              <Image src="/icon/Answer.svg" alt="back" width={16} height={16} />
              댓글 2
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
