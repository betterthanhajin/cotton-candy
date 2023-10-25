import Image from 'next/image'

export default function DetailHeader() {
  return (
    <div className="flex absolute top-0 p-4 w-full justify-between">
      <div className="flex">
        <div>
          <Image src="/icon/aaa.svg" alt="Home" width={24} height={24} />
        </div>
        <div>
          <Image src="/icon/bbb.svg" alt="Home" width={24} height={24} />
        </div>
      </div>
      <div className="flex">
        <div>
          <Image src="/icon/ccc.svg" alt="Home" width={24} height={24} />
        </div>
        <div>
          <Image src="/icon/ddd.svg" alt="Home" width={24} height={24} />
        </div>
      </div>
    </div>
  )
}
