import React from 'react';
import movieApiHanlder from '../../axiosMovie';
import url from '../url/urls';
import FrontPage from './FrontPage';

class  Poster extends React.Component
{
    state={
        movieDetails:{
            id:'',
            title:'',
            poster_path:'',
            overview:'',
            release_date:'',
            vote_average:'',
            backdrop_path:'',
            tagline:' '
        }
    }
    getMovie =() =>
    {
        console.log(this.props.id)
        movieApiHanlder.get(`3/movie/${this.props.id}?api_key=35624b10f2d190af89f00ddcdb909ed2`)
        .then(response => 
         {
            console.log(response.data)
            this.setState({
                id : response.data.id,
                title: response.data.title,
                poster_path:response.data.poster_path,
                overview:response.data.overview,
                tagline:response.data.tagline,
                release_date:response.data.release_date,
                vote_average:response.data.vote_average,
                backdrop_path:response.data.backdrop_path
            })
         }
        )
        .catch(error =>
          console.log(error)
        ) 
    }
    componentWillMount()
    {
        this.getMovie();
    }
    render()
    {
        return(
            <div className="posterHead">
                <FrontPage 
                    id  = {this.state.id}
                    title = {this.state.title}
                    release_date = {this.state.release_date}
                    poster_path = {url.folder+this.state.poster_path}
                    overview = {this.state.overview}
                    backdrop_path = {url.backdrop_path+this.state.backdrop_path}
                    vote_average = {this.state.vote_average}
                    tagline = {this.state.tagline}
                />
            </div>
        )
    }
}

export default Poster;


