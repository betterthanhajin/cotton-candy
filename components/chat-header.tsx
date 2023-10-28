import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function ChatHeader() {
  const router = useRouter()
  return (
    <div className="flex p-2 items-center justify-between select-none">
      <button className="rotate-180" onClick={() => router.back()}>
        <Image src="/icon/moreView.svg" alt="arrow" width={20} height={20} />
      </button>
      <div>ANBER</div>
      <div></div>
    </div>
  )
}
