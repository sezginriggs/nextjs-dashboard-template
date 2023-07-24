'use client'

import dynamic from 'next/dynamic'

//import Header from '@/components/Header.js'
//import Sidebar from '@/components/Sidebar.js'
//import Homepage from '@/components/Homepage.js'

// these disables server side rendering and rehydration
const Header = dynamic(() => import('@/components/Header'), { ssr: false })
const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false })
const Homepage = dynamic(() => import('@/components/Homepage'), { ssr: false })
 

export default function Home() {
  return (
    <main>
        <Header />
        
        <Sidebar />
        <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>

        <Homepage />

        <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>

    </main>
  )
}
