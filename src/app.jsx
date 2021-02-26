import React, { useEffect, useState } from 'react';
import NavBar from './components/nav_bar/nav_bar';
import VideoList from './components/video_list/video_list';

function App(props) {
  const [videos, setVideos] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const key = "AIzaSyA4Xf-ivZvKzpAg3Uxvr7az8vd6wtIW6_g";
  const base = "https://www.googleapis.com/youtube/v3";
  const getPopular = async () => {
    const res = await fetch(`${base}/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&key=${key}`);
    const data = await res.json();
    const items = data.items;
    setVideos(items);
    setIsSearch(false);
  };
  useEffect(getPopular, []);
  
  const onSubmit = async (query) => {
    const res = await fetch(`${base}/search?part=snippet&q=${query}&type=video&maxResults=25&regionCode=kr&key=${key}`);
    const data = await res.json();
    const items = data.items;
    setVideos(items);
    setIsSearch(true);
  }


  return (
    <div>
      <NavBar search={onSubmit} goHome={getPopular}/>
      <VideoList videos={videos} isSearch={isSearch} />
    </div>
  );
}

export default App;