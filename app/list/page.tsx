import ListFooter from '@/components/list-footer'
import ListHeader from '@/components/list-header'
import ListViewer from '@/components/list-viewer'

export default function ListPage() {
  return (
    <main className="w-full h-full flex flex-col">
      <ListHeader localName="고잔동" />
      <ListViewer />
      <ListFooter />
    </main>
  )
}
