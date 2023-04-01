import React from 'react'
import "../Styles/BubblesGraph.css"
function BubblesGraph() {
  return (
    <div className="bubbles item-center">
    {/* time stamps  */}
      <div className="time-period">
        <span>1W</span>
        <span>1M</span>
        <span>3M</span>
        <span>1Y</span>
        <span>All</span>
      </div>
      {/* bubbles  */}
      <div className="all-bubles item-center">
        <div className="pink first">
          <p>Investment</p>
          <p className="updown">$12,875</p>
        </div>
        <div className="pink second"></div>
        <div className="center-div item-center">
          <div className="innermost">
            <p>Investment</p>
            <p className="updown">$12,875</p>
          </div>
        </div>
        <div className="yellow"></div>
        <div className="purple purple1"></div>
        <div className="purple purple2"></div>
        <div className="purple purple3"></div>
        <div className="purple purple4"></div>
        <div className="blue blue1"></div>
        <div className="blue blue2"></div>
        <div className="blue blue3">
          <p>Investment</p>
          <p className="updown">$12,875</p>
        </div>
        <div className="blue blue4"></div>
        <div className="blue blue5"></div>
        <div className="pink third">
          <p>Investment</p>
          <p className="updown">$12,875</p>
        </div>
        <div className="pink forth">
          <p>Investment</p>
          <p className="updown">$12,875</p>
        </div>
      </div>
      <div className="data">
        <div><span className="title">TREND GOOD</span><br /><span className='actions'>204</span></div>
        <div><span className="title">SHOPPING VIEWS</span><br /><span className='actions'>65,540</span></div>
        <div><span className="title">STORE DYNAMICS</span><br /><span className='actions'>324</span></div>
      </div>
      <div className="btns">
      <button className='btn1'>-</button>
      <button className='btn1'>+</button>
      <button className='btn1'>.</button>
      </div>
    </div>
  )
}

export default BubblesGraph
