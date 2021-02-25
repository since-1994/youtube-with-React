import React, { Component } from 'react';
import styles from './video.module.css';

class Video extends Component {
    handleVideoClick(){
        const {video:{id}, onVideoClick} = this.props;
        onVideoClick(id);        
    }

    render() {
        const {thumbnail, title, channelTitle} = this.props.video;
        return (
            <div className={styles.video} onClick={this.handleVideoClick.bind(this)}>
                <img src={thumbnail} alt={title}/>
                <h2 className={styles.title}>{title.length >50 ? `${title.slice(0, 50)}..` : title}</h2>
                <h2 className={styles.channelTitle}>{channelTitle}</h2>
            </div>
        );
    }
}

export default Video;