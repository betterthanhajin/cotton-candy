import ChatDetailContainer from '@/components/chat-detail'
import ChatFooter from '@/components/chat-footer'
import ChatHeader from '@/components/chat-header'

export default function ChatDetail() {
  return (
    <main className="w-full h-full flex flex-col">
      <ChatHeader />
      <ChatDetailContainer />
      <ChatFooter />
    </main>
  )
}
