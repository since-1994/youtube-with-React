import React, { Component } from 'react';
import Video from './video';
import styles from './videos.module.css';

class Videos extends Component {
    render() {
        const {videos, onVideoClick} = this.props;
        console.log(videos);
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
                                <Video key = {id} video={{id, channelTitle, title, thumbnail}} onVideoClick={onVideoClick}/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Videos;