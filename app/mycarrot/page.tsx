import ListFooter from '@/components/list-footer'
import ListHeader from '@/components/list-header'
import MyCarrotPage from '@/components/mycarrot-page'

export default function MyCarrot() {
  return (
    <main className="w-full h-full flex flex-col">
      <ListHeader />
      <MyCarrotPage />
      <ListFooter />
    </main>
  )
}
