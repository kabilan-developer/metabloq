import React from "react";
import LiveAuctionCards from "./LiveAuctionCards";
import ExploreMore from "../SmallComponents/ExploreMore";
import "./Styles.css";
import useWindowDimensions from "../../helpers/useWindowDimensions";
import Fade from 'react-reveal/Fade';

const data = {
  name:"Live Auctions",
  sub:"Look out for those Distruptors"
}
function LiveAuctions() {
  
  const {width} = useWindowDimensions();
  return (
    <Fade bottom>
    <div className="metabloq_container">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          {
              width < 576 ? 
              <h2 className="font-weight-bold">{data.name.slice(0, 15) + (data.name.length > 15 ? ".." : "")}</h2> :
              <h2 className="font-weight-bold">{data.name}</h2>
          }
         {
            width < 576 ? 
            <span className="secondary-text poppins">{data.sub.slice(0, 30) + (data.sub.length > 30 ? ".." : "")}</span> : 
            <span className="secondary-text poppins">{data.sub}</span>
          }
        </div>
        <ExploreMore liveaution="liveauction"/>
      </div>
      <LiveAuctionCards/>
    </div>
    </Fade>
  );
}

export default LiveAuctions;
