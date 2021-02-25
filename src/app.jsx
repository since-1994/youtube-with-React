import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navBar';
import styles from './app.module.css';
import Videos from './components/videos';
import VideoDetail from './components/videoDetail';


class App extends React.Component {
  state= {
    videos:[],
    detail: false,
    videoId: ""
  };

  hadleVideoClick(id){
    console.log(id);
    this.setState({detail: true, videoId:id});
  }
  
  async componentDidMount(){
    const API_KEY = "AIzaSyAm5llrXkmL8Hd9AwLwxH41PrvxQZ_TFOQ";
    const MAX = 20;
    const res = await fetch(`https://www.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&regionCode=kr&maxResults=${MAX}&key=${API_KEY}`);
    const data = await res.json();
    const videos = data.items;
    this.setState({videos});
  }
  render(){
    const {videos, detail, videoId} = this.state;
    if(detail){
      const video = videos.find(video => {
        return video.id === videoId;
      })
      return (
        <div className = {styles.body}>
          <NavBar />
          <VideoDetail video={video} videos={videos} onVideoClick = {this.hadleVideoClick.bind(this)}/>
        </div>
      )
    }else{
      return (
        <div className = {styles.body}>
          <NavBar />
          <Videos videos={videos} onVideoClick = {this.hadleVideoClick.bind(this)}/>
        </div>
      );
    }
  }
}

export default App;
