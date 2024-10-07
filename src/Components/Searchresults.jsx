import React from 'react'
import Videos from './Videos'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Spinner from './Spinner'


const Searchresults = ({ setProgress, mode }) => {

  const [videos, setVideos] = useState([])
  const { search } = useParams()
  const [loading, setLoading] = useState(true)

  const key = "AIzaSyBYwe3IgwIulsL6qT5F7JrpcX5LeAABUzI"
  const fetchApi = async () => {
    setProgress(10)
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=50&q=${search}`);
    setProgress(30)
    const data = await response.json();
    setProgress(80)
    setVideos(data.items)
    setLoading(false)
    setProgress(100)

  }

  useEffect(() => {
    fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <div className={`container d-flex bg-${mode === 'white' ? 'black' : 'white'} flex-sm-column flex-md-row justify-content-center`}>
        {
          loading ?
            <div className="videocont d-flex align-items-center justify-content-center" style={{ height: "92vh" }}>
              <Spinner />
            </div> :
            !videos ?
              <div className="videocont d-flex align-items-center justify-content-center" style={{ height: "92vh", overflowY: "auto", overflowX: 'hidden' }}>
                <h3 className={`text-${mode === 'white' ? "light" : "black"} m-2 d-block`}>No Data Found</h3>
              </div> :
              <div className="videocont" style={{ height: "92vh", overflowY: "auto" }}>
                <h3 className={`text-${mode === 'white' ? "light" : "black"} m-2 d-block`}>Search results for {search}</h3>
                <Videos search={search} videos={videos} mode={mode} />
              </div>
        }

      </div>
    </>
  )
}

export default Searchresults
