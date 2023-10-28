import CottonItem from './cotton-item'
import { mockItems } from './mock'

export default function ListViewer() {
  return (
    <div className="w-full bg-white-300 h-full overflow-y-scroll">
      {mockItems.map((item, index) => (
        <CottonItem key={index} {...item} />
      ))}
      {/* <div className="absolute right-4 bottom-16 select-none">
        <div className="w-12 h-12 bg-orange-500 flex justify-center items-center rounded-full shadow-md">
          <div>
            <Image
              src="/icon/Plus Math.svg"
              alt="plus"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div> */}
    </div>
  )
}
