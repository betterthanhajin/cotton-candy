'use client'

import DetailContainer from '@/components/detail-container'
import DetailFooter from '@/components/detail-footer'
import DetailHeader from '@/components/detail-header'
import DetailSlider from '@/components/detail-slider'

export default function DetailPage() {
  return (
    <>
      <DetailHeader />
      <DetailSlider />
      <DetailContainer
        username="ANBER"
        localname="쿠팡"
        boardtitle="ANBER 귀엽고 멍하고있는공룡인형 안고자는 쿠션"
      />
      <DetailFooter />
    </>
  )
}
