import React, { Suspense } from 'react'
import { BarLoader } from 'react-spinners'
import DashboardPage from './page'

const DashboardLayout = () => {
  return (
    <div className='px-5'>
        <h1 className='text-6xl mb-9 bg-gradient-to-br from-blue-600 to-purple-600 font-extrabold tracking-tighter pr-2 text-transparent bg-clip-text'>Dashboard</h1>
      {/* Dashboard Page */}
      <Suspense fallback={<BarLoader className='mt-4' width={"100%"} color='#9333ea'/>}>
        <DashboardPage/>
      </Suspense>
    </div>
  )
}

export default DashboardLayout
