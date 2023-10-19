import Image from 'next/image'

export interface ListHeaderProps {
  localName?: string
  onChangeLocal?: () => unknown
  onSearch?: () => unknown
  onMenu?: () => unknown
  onNoti?: () => unknown
}

export default function ListHeader(props: ListHeaderProps) {
  const { onChangeLocal, onMenu, onNoti, onSearch, localName } = props

  return (
    <div className="w-full bg-white-300 px-4 py-5 flex select-none">
      <div className="flex w-full">
        <button onClick={onChangeLocal} className="flex items-center">
          <span>{localName ?? '불러오는중...'}</span>
          <Image
            className="ml-2"
            src="/icon/expand-arrow.svg"
            alt="expand"
            width={14}
            height={14}
          />
        </button>
      </div>
      <div className="flex gap-4 ">
        <button onClick={onSearch} className="shrink-0 w-6 h-6">
          <Image
            className="w-6 h-6"
            src="/icon/search-icon.svg"
            alt="search"
            width={24}
            height={24}
          />
        </button>
        <button onClick={onMenu} className="shrink-0 w-6 h-6">
          <Image src="/icon/menu-icon.svg" alt="menu" width={24} height={24} />
        </button>
        <button onClick={onNoti} className="shrink-0 w-6 h-6">
          <Image
            src="/icon/notification-icon.svg"
            alt="noti"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  )
}
