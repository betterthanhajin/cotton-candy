import Image from 'next/image'
export default function ChatFooter() {
  return (
    <div className="flex p-2 items-center justify-between">
      <div>
        <Image src="/icon/camera.svg" alt="Home" width={37} height={24} />
      </div>
      <div className="w-72 bg-gray-200 h-10 rounded-md"></div>
      <div>
        <Image src="/icon/Ellipse 1.svg" alt="Home" width={32} height={32} />
      </div>
    </div>
  )
}
