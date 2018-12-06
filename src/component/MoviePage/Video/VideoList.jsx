import React from 'react';
import url from '../../url/urls';
import '../../style/custom.css';

const VideoList = (props) => {
    console.log(props)
    return (
      <div className="videoListItem">
            <iframe 
                width="510" 
                height="300"
                src={`//www.youtube.com/embed/${props.movie}?enablejsapi=1&amp;autoplay=0&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=en-US&amp;modestbranding=1&amp;fs=1`}
            >
            </iframe>
      </div>
    )
}

export default VideoList;

