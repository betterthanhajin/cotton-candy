import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function DetailHeader() {
  const router = useRouter()
  return (
    <div className="flex absolute top-0 p-4 w-full justify-between">
      <div className="flex text-white">
        <button onClick={() => router.back()}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="17.5303"
              y1="2.53033"
              x2="7.53033"
              y2="12.5303"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <line
              x1="7.53033"
              y1="11.4697"
              x2="17.5303"
              y2="21.4697"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex">
        <button>
          <Image src="/icon/ddd.svg" alt="Home" width={24} height={24} />
        </button>
      </div>
    </div>
  )
}
