import React from 'react'
import SideBar from './SideBar'
import Videos from './Videos'
import { useEffect, useState } from 'react'
import Spinner from './Spinner'


const MainCont = ({ setProgress, mode }) => {
  const [seletCategory, setseletCategory] = useState('Gaming')
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  const key = "AIzaSyBYwe3IgwIulsL6qT5F7JrpcX5LeAABUzI";
  const fetchApi = async () => {
    setProgress(10)
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=50&q=${seletCategory}`);
    setProgress(30)
    const data = await response.json();
    setProgress(80)
    setVideos(data.items)
    setLoading(false)
    setProgress(100);

  }


  useEffect(() => {
    fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seletCategory]);

  return (
    <>
      <div className="MainCont row" style={{ backgroundColor: mode === 'white' ? 'black' : 'white' }}>
        <div className="col-12 col-lg-2">
          <div className="sideBar d-flex flex-lg-column flex-sm-row" style={{ backgroundColor: mode === 'white' ? 'black' : 'whitesmoke', borderRight: mode === "white" ? "1px solid red" : "1px solid black" }} >
            <SideBar seletCategory={seletCategory} setseletCategory={setseletCategory} mode={mode} />
          </div>
        </div>
        <div className="col-12  col-lg-10">
          {
            loading ?
              <div className="videocont d-flex align-items-center justify-content-center" style={{ height: "92vh", overflowY: "auto", overflowX: 'hidden' }}>
                <Spinner />
              </div> :
              !videos ?
                <div className="videocont d-flex align-items-center justify-content-center" style={{ height: "92vh", overflowY: "auto", overflowX: 'hidden' }}>
                  <h3 className={`text-${mode === 'white' ? "light" : "black"} m-2 d-block`}>No Data Found</h3>
                </div> :
                <div className="videocont p-1 p-sm-3 p-lg-0 pe-lg-4 mt-2" style={{ height: "92vh", overflowY: "auto", overflowX: 'hidden' }}>
                  <Videos seletCategory={seletCategory} setseletCategory={setseletCategory} videos={videos} mode={mode} />
                </div>
          }
        </div>
      </div>
    </>
  )
}

export default MainCont
