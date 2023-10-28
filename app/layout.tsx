import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '솜사탕 마켓',
  description: '솜사탕 마켓은 귀여운 인형들을 모아서 판매하는 사이트입니다.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex justify-center bg-slate-50">{children}</body>
    </html>
  )
}
