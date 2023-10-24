import DetailContainer from '@/components/detail-container'
import DetailFooter from '@/components/detail-footer'
import DetailSlider from '@/components/detail-slider'

export default function DetailPage() {
  return (
    <main className="w-full h-full flex flex-col">
      <DetailSlider />
      <DetailContainer
        username="감성탐방러"
        localname="중랑구 면목동"
        boardtitle="소니 Wh-1000xm5 실버 팝니다."
      />
      <DetailFooter />
    </main>
  )
}
