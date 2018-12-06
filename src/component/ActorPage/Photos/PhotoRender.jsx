import React from 'react';
import '../../style/custom.css';
import url from './../../url/urls';

const PhotoRender = (props) => 
{
    console.log(props)
    return(
            <div className="photo">
              <img src={url.profile_path+props.file_path} alt="actor"/>
            </div>
         );
}

export default PhotoRender;
