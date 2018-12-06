import React from 'react';
import url from '../../url/urls';
import '../../style/custom.css';

const CrewList = (props) => {
  let profile = props.profile_path ? url.profile_path+props.profile_path : '../../image/profile.jpg'
    return (
      <div className="castListItem">
            <img src={profile} alt="actor"/>
            <p className="name"><b>{props.name}</b></p>
            <p className="character">({props.job})</p>
      </div>
    )
}

export default CrewList;

