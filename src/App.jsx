import React from 'react'
import Landing from './pages/Landing'
import CursorFollower from "./hooks/animation/CursorFollower"
const App = () => {
  return (
    <div className='overflow-x-hidden '>
      <Landing />
      <CursorFollower />
    </div>
  )
}

export default App