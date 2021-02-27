import React, { useEffect, useState } from 'react';
import NavBar from './components/nav_bar/nav_bar';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';

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
    setSelectedVideo(null);
  }

  const videoDetail = (video) => {
    console.log(video);
    setSelectedVideo(video);
  }

  return (
    <div>
      <NavBar search={onSubmit} goHome={getPopular}/>
      <section className={styles.content}>
        {
          selectedVideo &&
          <div className={styles.detail}>
              <VideoDetail video={selectedVideo}/>
          </div>
        }
        <div className={styles.list} >
          <VideoList display={selectedVideo? "list" : "grid"} videos={videos} videoDetail={videoDetail} />
        </div>
      </section>
    </div>
  );
  
}

export default App;