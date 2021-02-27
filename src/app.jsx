import React, { useEffect, useState } from 'react';
import NavBar from './components/nav_bar/nav_bar';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const getPopular = async () => {
    const items = await youtube.getPopular() || [];
    setSelectedVideo(null);
    setVideos(items);
  };
  
  useEffect(getPopular, []);
  
  const onSubmit = async (q) => {
    const items = await youtube.getSearchResult(q) || [];
    setVideos(items);
  }

  const videoDetail = (video) => {
    console.log(video);
    setSelectedVideo(video);
  }

  return (
    <div>
      <NavBar search={onSubmit} goHome={getPopular}/>
      {selectedVideo && <VideoDetail video={selectedVideo} />}
      <VideoList videos={videos} videoDetail={videoDetail} />
    </div>
  );
  
}

export default App;