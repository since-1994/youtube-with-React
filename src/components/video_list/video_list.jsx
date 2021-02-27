import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({videos, videoDetail}) => {
    return (
        <ul className={styles.container}>
            {
                videos.map(video => <VideoItem key={video.id} video={video}  videoDetail = {videoDetail}/>)
            }
        </ul>
    );
}

export default VideoList;