import Image from 'next/image'
export default function ChattingContainer() {
  return (
    <div>
      <div className="flex justify-between px-4 py-5">
        <h1 className="font-bold">채팅</h1>
        <Image src="/icon/Vector.png" alt="profile" width={24} height={24} />
        <Image
          src="/icon/Notification.svg"
          alt="profile"
          width={24}
          height={24}
        />
      </div>
      <div className="px-4 py-5 flex justify-between">
        <div>
          <Image src="/icon/profile.svg" alt="profile" width={40} height={40} />
        </div>
        <div>
          <p>
            <strong className="mr-2">요우</strong>
            <span className="text-sm text-[#8C8C8C]">군자동 * 1주전</span>
          </p>
          <p>감사합니다!!조심히가세요!!</p>
        </div>
        <div>
          <Image
            src="/icon/chatItem.svg"
            alt="chatItem"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="px-4 py-5 flex justify-between">
        <div>
          <Image src="/icon/profile.svg" alt="profile" width={40} height={40} />
        </div>
        <div>
          <p>
            <strong className="mr-2">요우</strong>
            <span className="text-sm text-[#8C8C8C]">군자동 * 1주전</span>
          </p>
          <p>감사합니다!!조심히가세요!!</p>
        </div>
        <div>
          <Image
            src="/icon/chatItem.svg"
            alt="chatItem"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="px-4 py-5 flex justify-between">
        <div>
          <Image src="/icon/profile.svg" alt="profile" width={40} height={40} />
        </div>
        <div>
          <p>
            <strong className="mr-2">요우</strong>
            <span className="text-sm text-[#8C8C8C]">군자동 * 1주전</span>
          </p>
          <p>감사합니다!!조심히가세요!!</p>
        </div>
        <div>
          <Image
            src="/icon/chatItem.svg"
            alt="chatItem"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="px-4 py-5 flex justify-between">
        <div>
          <Image src="/icon/profile.svg" alt="profile" width={40} height={40} />
        </div>
        <div>
          <p>
            <strong className="mr-2">요우</strong>
            <span className="text-sm text-[#8C8C8C]">군자동 * 1주전</span>
          </p>
          <p>감사합니다!!조심히가세요!!</p>
        </div>
        <div>
          <Image
            src="/icon/chatItem.svg"
            alt="chatItem"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="px-4 py-5 flex justify-between">
        <div>
          <Image src="/icon/profile.svg" alt="profile" width={40} height={40} />
        </div>
        <div>
          <p>
            <strong className="mr-2">요우</strong>
            <span className="text-sm text-[#8C8C8C]">군자동 * 1주전</span>
          </p>
          <p>감사합니다!!조심히가세요!!</p>
        </div>
        <div>
          <Image
            src="/icon/chatItem.svg"
            alt="chatItem"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  )
}
