import Image from 'next/image'
import Link from 'next/link'

export default function DetailFooter() {
  return (
    <div className="p-5 flex justify-between items-center sticky bottom-0 bg-white">
      <button>
        <Image src="/icon/heart.svg" alt="heart" width={24} height={24} />
      </button>
      <p className="font-bold text-center">
        29,580원
        <br />
        <span className="text-gray-400">가격 제안 불가</span>
      </p>
      <Link
        href="https://www.coupang.com/vp/products/7308290773?itemId=18717224596&vendorItemId=86016835685"
        target="_blank"
      >
        <button className="p-2 bg-orange-500 text-white w-20 h-8 rounded-md flex justify-center items-center">
          구매하기
        </button>
      </Link>
    </div>
  )
}
