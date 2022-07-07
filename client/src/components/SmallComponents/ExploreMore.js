import React from "react";
import './Styles.css';
import {useNavigate} from 'react-router-dom'

function ExploreMore(props) {
  let {liveaution} = props
  const navigate = useNavigate();
  
  return (
    <>
    {
      liveaution ? 
      <div onClick={()=> navigate("/liveauction")}>
        <h6 className="font-weight-bold">Explore More</h6>
        <div className="primary_coloredunderline ms-auto"></div>
      </div> 
    : <div>
        <h6 className="font-weight-bold">Explore More</h6>
        <div className="primary_coloredunderline ms-auto"></div>
     </div>
    }
    
    </>
  );
}

export default ExploreMore;
