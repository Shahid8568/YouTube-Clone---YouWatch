import React from 'react'
import { Link } from 'react-router-dom'
import VerifiedIcon from '@mui/icons-material/Verified';


const Card = ({thumbnail,title,channel,videoId,publish,mode}) => {
  return (
    <div>
         <Link to={videoId} style={{textDecoration:"none",color:"black"}}>
        <div className="card" style={{border: mode === "white"?"1px solid white":"1px solid black",height:"50vh"}}>
  <img src={thumbnail} className="card-img-top" width={"230px"} height={"200px"} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{channel} <VerifiedIcon style={{fontSize:"16px"}}/>
    </p><span>{publish}</span>
    
  </div>
</div>
  </Link>
    </div>
  )
}

export default Card