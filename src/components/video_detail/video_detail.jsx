import React from 'react';
import VideoSideList from '../video_side_list/video_side_list';

const VideoDetail = ({video}) => (
    <>
        <iframe 
        id="player" 
        type="text/html"
        width="640" 
        height="360"
        src={`http://www.youtube.com/embed/${video.id}?enablejsapi=1`}
        frameborder="0"></iframe>
    </>
);
export default VideoDetail;