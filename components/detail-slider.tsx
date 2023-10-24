import Image from 'next/image'

export default function DetailSlider() {
  return (
    <div>
      <Image
        src="/icon/head.jpeg"
        alt="detailImage"
        width={380}
        height={395}
        className="w-full max-h-[400px] object-cover object-center"
      />
    </div>
  )
}
