import React from 'react';
import url from '../../url/urls';
import '../../style/custom.css';
import '../../style/loader.css';
import { Link } from 'react-router-dom';

const CastList = (props) => {
    let profile = props.profile_path ? url.profile_path+props.profile_path : '../../image/profile.jpg'
    return (
      <div className="castListItem">
            {props ? 
            <Link to={`/actor/${props.id}`}>
                <img src={profile} alt="actor"/>
                <p className="name"><b>{props.name}</b></p>
            </Link>  : <div className="loader">Loading...</div>  }
            <p className="character">({props.character})</p>
      </div>
    )
}

export default CastList;

