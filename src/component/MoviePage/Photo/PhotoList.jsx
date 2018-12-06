import React from 'react';
import url from '../../url/urls';
import '../../style/custom.css';

const PhotoList = (props) => {
  console.log(props)
    return (
      <div  style={{marginRight : '10px'}}>
          {props.src ? <img src={props.src} alt="no image"></img> : <div></div>}
      </div>
    )
}

export default PhotoList;

