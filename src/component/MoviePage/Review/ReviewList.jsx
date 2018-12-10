import React from 'react';
import { Avatar } from 'antd';
import '../../style/custom.css';

const ReviewList = (props) => {
  return (
      <div className="reviewListItem">
        {
          props !== [] ?
            <div>
              <Avatar style={{ width: '50px', height: '50px', lineHeight: '45px' }} size={64} icon="user" />
              <span className="author"><b>{props.author}</b></span>
              <p className="content">{props.content}</p>
            </div> : <p>No Review</p>
        }
      </div>
  )
}

export default ReviewList;

