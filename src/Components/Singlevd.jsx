import React from 'react'
// import Videos from './Videos'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Iframe from 'react-iframe'
import VerifiedIcon from '@mui/icons-material/Verified';

const Singlevd = ({mode,setProgress}) => {

  const {videoId} = useParams();
  const [seletCategory] = useState('Coding')
  const [singvd, setsingvd] = useState('')
  // const [relvideo, setRelvideo] = useState([])


  const key="AIzaSyBYwe3IgwIulsL6qT5F7JrpcX5LeAABUzI";
  
  const fetchApi = async ()=>{
    setProgress(10)
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=50&q=${seletCategory}`);
    setProgress(30)
    const data = await response.json();
    setProgress(80)
    setsingvd(data.items)
    setProgress(100)
    }
    useEffect(() => {
      fetchApi(`videos?part=snippet,statistics&id=${videoId}`)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoId]);

  return (
    <>  
    <div className='main-cont' style={{height:"91vh",backgroundColor: mode ==='white'?'black':'whitesmoke'}}> 
        <Iframe className='player' url={`https://www.youtube.com/embed/${videoId}`} styles={{height:'88vh',width:"100%",top:"20px"}} 
        position="relative" />
        {/* <div className={`details text-${mode==='white'?"light":"black"} ms-3`}>
        <h4>{singvd[videoId]?.snippet?.title}</h4>
        <p className="card-text" style={{fontSize:"18px",marginTop:"20px"}}>{singvd[videoId]?.snippet?.channelTitle} <VerifiedIcon style={{fontSize:"16px"}}/>
    </p>
    </div> */}
        </div> 
    </>
  )
}

export default Singlevd;