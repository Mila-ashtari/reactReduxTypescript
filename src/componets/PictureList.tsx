import React, { useEffect, useState } from "react";
import RecentlyAdded from "./RecentlyAdded";
import Favorite from "./Favorite";
import { fetchPictures } from "../state/actions";

function PictureList(){
  const [tabvalue, setTabValue]=useState(1)

  useEffect(()=>{
    
  })
    return(
        <div className="pictureList">
        <ul className="nav">
          <button className="tabOne" onClick={()=>{setTabValue(1)}}>Tab 1</button>
          <button className="tabTwo" onClick={()=>{setTabValue(2)}}>Tab 2</button>
        </ul>
        <div className="tabContent">
          {tabvalue==1 ? <RecentlyAdded/> : <Favorite/>}
          </div>
      </div>
    )

}

export default PictureList