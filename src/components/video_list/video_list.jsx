import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({videos, isSearch}) => {
    if(isSearch){
        return (
            <ul className={styles.container}>
                {
                    videos.map(video => <VideoItem key={video.id.videoId} video={{...video, id:video.id.videoId}} />)
                }
            </ul>
        );
    }else{
        return (
            <ul className={styles.container}>
                {
                    videos.map(video => <VideoItem key={video.id} video={video} />)
                }
            </ul>
        );
    }
}

export default VideoList;