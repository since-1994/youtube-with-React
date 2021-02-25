import React, { Component } from 'react';
import Video from './video';
import styles from './sideVideo.module.css';

class SideVideo extends Component {
    render() {
        const {videos, onVideoClick} = this.props;
        return (
            <div className = {styles.container}>
                {
                    videos.map(video => {
                        const {
                            id,
                            snippet:{
                                channelTitle,
                                localized:{title},
                                thumbnails:{
                                    medium:{
                                        url:thumbnail
                                    }
                                }
                            }
                        } = video;
                        return (
                            <div>
                                <Video key = {id} video={{id, channelTitle, title: title.slice(0, 25), thumbnail}} onVideoClick={onVideoClick}/>
                            </div>
                        );
                    })
                }
            </div>

        );
    }
}

export default SideVideo;