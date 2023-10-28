'use client'

import ChatDetailContainer from '@/components/chat-detail'
import ChatFooter from '@/components/chat-footer'
import ChatHeader from '@/components/chat-header'

export default function ChatDetailPage() {
  return (
    <>
      <ChatHeader />
      <ChatDetailContainer />
      <ChatFooter />
    </>
  )
}
