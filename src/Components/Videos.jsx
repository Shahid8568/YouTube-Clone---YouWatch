import React from 'react'
import Card from './Card'


const Videos = ({ seletCategory, videos, mode }) => {
  return (
    <>
          <div className="my-2" >
            <h3 className='d-block' style={{ color: mode === "white" ? "white" : "black" }}><span>{seletCategory}</span> Videos</h3>
            <div className="row">
              {videos.map((e) => {
                return <div className="col-sm-6 col-md-4 col-xxl-3 my-3" key={e.id.videoId}>
                  <Card mode={mode} title={e.snippet.title.slice(0, 35)} channel={e.snippet.channelTitle} thumbnail={e.snippet.thumbnails.medium.url ? e.snippet.thumbnails.medium.url : "https://static.wikia.nocookie.net/robotchicken748/images/7/78/At_the_Movies_2009.jpg/revision/latest?cb=20180105163605"} videoId={e.id.videoId} publish={e.snippet.publishedAt} />
                </div>
              })}

            </div>

          </div>
    </>
  )
}

export default Videos
