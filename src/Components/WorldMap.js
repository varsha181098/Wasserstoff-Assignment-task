import React from "react";
import "../Styles/WorldMap.css"
import { RiBuilding2Line} from "react-icons/ri";
import { ImOffice } from "react-icons/im";
import { BsBuildingFill } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";
import { RiBuilding4Fill } from "react-icons/ri";
import { BiBuildings } from "react-icons/bi";
const WorldMap = () => {
  // world map using react simple map 
  return (
    <div className="worldmap">
      <div className="chicago">
        <span><BsBuildingFill/></span>
        <div><p className="chi">Chicago</p>
        <p className="chi-Num">98,320,300</p></div>
      </div>
      <div className="manaus">
        <span><RiBuilding2Line/></span>
        <div><p className="chi">Manaus</p>
        <p className="chi-Num">98,320,300</p></div>
      </div>
      <div className="giza">
        <span><ImOffice/></span>
        <div><p className="chi">Giza</p>
        <p className="chi-Num">10,547,980</p></div>
      </div>
      <div className="berlin">
        <span><BiBuildingHouse/></span>
       <div> 
        <p className="chi">Berlin</p>
        <p className="chi-Num">76,541,106</p></div>
      </div>
      <div className="shanghai">
        <span><RiBuilding4Fill/></span>
      <div> 
        <p className="chi">Shanghai</p>
        <p className="chi-Num">239,570,110</p></div>
      </div>
      <div className="queensland">
        <span><BiBuildings/></span>
      <div> 
        <p className="chi">Queensland</p>
        <p className="chi-Num">6,097,321</p></div>
      </div>
    </div>
  );
};
export default WorldMap;