import React, { useState } from 'react'
import Chart from "react-apexcharts";
import "../Styles/BubbleChart.css"
const BubbleChart = () => {
  // bubble chart for second page to show monthly earning or engaging users
    const [state] = useState({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept","Oct","Nov","Dec"],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91,55,10,22,55],
        },
      ],
    });
  return <div className="bubblechart">
  {/* bubble chart using apexchart */}
 <Chart
              options={state.options}
              series={state.series}
              type="bubble"
              width="800"
              height={"100%"}
            />
            <div className='august'>$27632 <span>August</span></div>
            <div className='april'>$27632</div>
            <div className='Oct'>$27623</div>
            <div className='jan'></div>
            <div className='feb'></div>
            <div className='mar'></div>
            <div className='may'></div>
            <div className='jun'></div>
            <div className='july'></div>
            <div className='sep'></div>
            <div className='nov'></div>
            <div className='dec'></div>
            

  </div>
  
}

export default BubbleChart
