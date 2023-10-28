'use client'

import ListFooter from '@/components/list-footer'
import ListHeader from '@/components/list-header'
import NeighContainer from '@/components/neigh-container'

export default function NeighLife() {
  return (
    <main className="w-full h-full flex flex-col">
      <ListHeader />
      <NeighContainer />
      <ListFooter />
    </main>
  )
}
