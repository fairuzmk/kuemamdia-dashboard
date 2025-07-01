import React from 'react'
import DashboardLayout from './Layouts/DashboardLayout'

const App = () => {
  return (
    <DashboardLayout>
      <div className="text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h1>
        <p>This is your content area. Add your routes or components here.</p>
      </div>
    </DashboardLayout>
  )
}

export default App