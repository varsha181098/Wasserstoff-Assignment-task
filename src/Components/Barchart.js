import React from "react";
import {BarChart,Bar} from "recharts";
import "../Styles/Barchart.css";
function Barchart() {
    const data = [
        {value: 10 },
        {value: 12 },
        {value: 13 },
        {value: 14 },
        {value: 10 },
        {value: 17 },
        {value: 25 },
        {value: 18 },
      ];
  return (
    <div className="barchart">
      {/* barchart title */}
      <div className="sales-figer">
        <h3>
          <span className="sales">Sales Figer</span>{" "}
          <span className="figer">$10,430</span>
        </h3>
        {/* barchart graph */}
      </div>
      <div className="graph" >
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#FF708B" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default Barchart;
