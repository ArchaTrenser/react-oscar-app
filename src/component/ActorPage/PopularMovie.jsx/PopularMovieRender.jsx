import React from 'react';
import '../../style/custom.css';
import { Link } from 'react-router-dom';
import url from './../../url/urls';

const PopularMovieRender = (props) => {
    console.log(props.id)
    return (
        <div className="movieListItem" >
            <Link to={`/movie/${props.id}`}>
                <img src={url.profile_path + props.poster_path} alt="actor" />
                <p style={{ 'color': 'white', 'fontWeight': 'bold' }}>{props.title}</p>
            </Link>
        </div>
    )
};

export default PopularMovieRender;
