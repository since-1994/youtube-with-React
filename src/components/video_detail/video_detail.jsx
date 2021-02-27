import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video, video:{snippet}}) => {
    console.log(snippet.title);
    return(
        <section className={styles.detail}>
            <iframe 
            id="player" 
            type="text/html"
            width="100%" 
            height="400px"
            src={`http://www.youtube.com/embed/${video.id}?enablejsapi=1`}
            frameborder="0"></iframe>
            <div className={styles.info}>
                <h1 className={styles.title}>{snippet.title}</h1>
                <h2 className={styles.channelTitle}>{snippet.channelTitle}</h2>
                <pre className={styles.desc}>{snippet.description}</pre>
            </div>
        </section>
    );
}
export default VideoDetail;