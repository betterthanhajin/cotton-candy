import Image from 'next/image'
export default function ChatHeader() {
  return (
    <div className="flex p-2 items-center justify-between">
      <div>
        <Image src="/icon/moreView.svg" alt="arrow" width={20} height={20} />
      </div>
      <div>User 1</div>
      <div></div>
    </div>
  )
}
