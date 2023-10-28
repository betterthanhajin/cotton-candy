import { todoAlert } from '@/lib/todo'
import Image from 'next/image'
export default function ChatFooter() {
  return (
    <div className="flex p-2 items-center justify-between w-full gap-2 border-t select-none">
      <button
        onClick={() => {
          todoAlert()
        }}
      >
        <Image src="/icon/camera.svg" alt="Home" width={37} height={24} />
      </button>
      <div className="w-full">
        <input
          type="text"
          className="w-full rounded-md bg-gray-200 h-10 border-none p-2"
        />
      </div>
      <button
        onClick={() => {
          todoAlert()
        }}
        className="w-10 h-10 bg-[#FF8B03] shrink-0 flex items-center justify-center rounded-full"
      >
        <Image src="/icon/send-arrow.svg" alt="Home" width={32} height={32} />
      </button>
    </div>
  )
}
