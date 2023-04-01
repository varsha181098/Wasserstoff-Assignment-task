import React from 'react'
import Designfaster from './DesignFaster';
import BubblesGraph from './BubblesGraph';
import "../Styles/DashBoard.css"
function DashBoard() {
  return (
    <div>
      <div className='dashboard'>
      <Designfaster/>
      <BubblesGraph/>
    </div>
    </div>
  )
}

export default DashBoard
