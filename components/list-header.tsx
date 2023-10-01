import Image from 'next/image'

export default function ListHeader() {
  return (
    <div className="w-full bg-pink-300 px-4 py-5">
      <div>
        <span>군자동</span>
        <Image
          src="/icon/search-icon.svg"
          alt="search"
          width={24}
          height={24}
        />
      </div>
    </div>
  )
}
