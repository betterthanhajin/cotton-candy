import DetailContainer from '@/components/detail-container'
import DetailFooter from '@/components/detail-footer'
import DetailSlider from '@/components/detail-slider'

export default function DetailPage() {
  return (
    <main className="w-full h-full flex flex-col">
      <DetailSlider />
      <DetailContainer />
      <DetailFooter />
    </main>
  )
}
