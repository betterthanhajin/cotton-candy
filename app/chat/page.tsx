import ChattingContainer from '@/components/chatting-container'
import ListFooter from '@/components/list-footer'
import ListHeader from '@/components/list-header'

export default function Chat() {
  return (
    <main className="w-full h-full flex flex-col">
      <ListHeader />
      <ChattingContainer />
      <ListFooter />
    </main>
  )
}
