import React, { Component } from 'react';
import Video from './video';
import Videos from './videos';
import styles from './videoDetail.module.css';
import SideVideo from './sideVideo';

class VideoDetail extends Component {
    render() {
        const {video, videos, onVideoClick} = this.props;
        const {
            channelTitle,
            snippet:{
                localized:{
                    title,
                    description
                }
            }
        } = video;
        console.log(description);
        return (
            <div className={styles.container}>
                <div className={styles.videoContainer}>
                    <iframe 
                        className = {styles.video}
                        id="player" 
                        type="text/html" 
                        width="640" 
                        height="360"
                        src={`http://www.youtube.com/embed/${video.id}`}
                        frameborder="0">
                    </iframe>
                    <h1 className ={styles.title}>{title}</h1>
                    <h1>{description}</h1>
                </div>
                <SideVideo videos={videos} onVideoClick={onVideoClick} />
            </div>
        );
    }
}

export default VideoDetail;