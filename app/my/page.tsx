'use client'

import ListFooter from '@/components/list-footer'
import ListHeader from '@/components/list-header'
import MyContainer from '@/components/my-container'
import { todoAlert } from '@/lib/todo'

export default function MyCarrot() {
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
      <MyContainer />
      <ListFooter focused="my" />
    </>
  )
}
