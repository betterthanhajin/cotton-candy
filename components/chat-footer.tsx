import Image from 'next/image'
export default function ChatFooter() {
  return (
    <div className="flex p-2 items-center justify-between w-full gap-2 border-t">
      <button>
        <Image src="/icon/camera.svg" alt="Home" width={37} height={24} />
      </button>
      <div className="w-full">
        <input
          type="text"
          className="w-full rounded-md bg-gray-200 h-10 border-none"
        />
      </div>
      <button>
        <Image src="/icon/Ellipse 1.svg" alt="Home" width={32} height={32} />
      </button>
    </div>
  )
}
