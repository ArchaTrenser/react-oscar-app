import React from 'react';
import { Avatar } from 'antd';
import '../../style/custom.css';

const ReviewList = (props) => {
  console.log(props)
    return (
      <div className="reviewListItem">
      {
        props !==[] ? 
           <div>
              <Avatar size={64} icon="user" />
              <span className="author"><b>{props.author}</b></span>
              <p className="content">{props.content}</p> 
            </div> : <p>No Review</p>
      }
      </div>
    )
}

export default ReviewList;

