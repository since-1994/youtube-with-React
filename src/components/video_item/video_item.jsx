import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video, display, videoDetail}) => {
    console.log(video);
    const displayType = display === 'grid' ? styles.grid : styles.list
    return (
        <li className = {`${styles.video} ${displayType}`}>
            <div className={styles.container} onClick={() => {videoDetail(video)}}>
                <img className = {styles.thumbnail} src={video.snippet.thumbnails.medium.url} alt=""/>
                <div className={styles.metadata}>
                    <p className={styles.title}>{video.snippet.title}</p>
                    <p className={styles.channel}>{video.snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    );
}

export default VideoItem;