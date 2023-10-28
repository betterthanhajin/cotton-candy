'use client'

import ChattingContainer from '@/components/chatting-container'
import ListFooter from '@/components/list-footer'
import ListHeader from '@/components/list-header'
import { todoAlert } from '@/lib/todo'

export default function Chat() {
  return (
    <>
      <ListHeader
        localName="🇰🇷 대한민국"
        onChangeLocal={() => {
          todoAlert()
        }}
        onMenu={() => {
          todoAlert()
        }}
        onNoti={() => {
          todoAlert()
        }}
        onSearch={() => {
          todoAlert()
        }}
      />
      <ChattingContainer />
      <ListFooter focused="chat" />
    </>
  )
}
