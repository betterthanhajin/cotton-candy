'use client'

import ListFooter from '@/components/list-footer'
import ListHeader from '@/components/list-header'
import ListViewer from '@/components/list-viewer'
import { todoAlert } from '@/lib/todo'

export default function Home() {
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
      <ListViewer />
      <ListFooter />
    </>
  )
}
