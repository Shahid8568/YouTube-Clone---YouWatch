import React from 'react'
import SideBar from './SideBar'
import Videos from './Videos'
import { useEffect,useState } from 'react'


const MainCont = ({setProgress,mode}) => {
  const [seletCategory, setseletCategory] = useState('Gaming')
  const [videos, setVideos] = useState([])
  
  const key="AIzaSyBYwe3IgwIulsL6qT5F7JrpcX5LeAABUzI";
    const fetchApi = async ()=>{
      setProgress(10)
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=50&q=${seletCategory}`);
      setProgress(30)
      const data = await response.json();
      setProgress(80)
      setVideos(data.items)
      setProgress(100);
      
    }


useEffect(() => {
  fetchApi()
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [seletCategory]);
 
  return (
    <>
    <div className="MainCont d-flex flex-md-row flex-sm-column" style={{backgroundColor: mode ==='white'?'black':'white'}}>
      <div className="sideBar d-flex flex-md-column flex-sm-row" style={{backgroundColor: mode ==='white'?'black':'whitesmoke',borderRight: mode==="white"?"1px solid red":"1px solid black"}} >
   <SideBar seletCategory={seletCategory} setseletCategory={setseletCategory} mode={mode}/>
      </div>
      <div className="videocont" style={{height:"92vh",overflowY:"auto"}}>
   <Videos seletCategory={seletCategory} setseletCategory={setseletCategory} videos={videos} mode={mode} />
      </div>
   </div>
    </>
   )
}

export default MainCont
