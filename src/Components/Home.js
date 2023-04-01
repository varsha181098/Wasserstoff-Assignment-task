import React from "react";
import Sidebar from "./Sidebar";
import Barchart from "./Barchart";
import WorldMap from "./WorldMap";
function Home() {
  return (
    <div>
      <Sidebar />
      <WorldMap/>
      <Barchart />
    </div>
  );
}

export default Home;
