import React from 'react';
import movieApiHanlder from '../../axiosMovie';
import OscarListItem from './OscarListItem';
import url from '../url/urls';
import Filters from './Filters';
import axios from 'axios';

class OscarList extends React.Component
{
    state={
        movieDetails:{
            id:'',
            title:'',
            poster_path:'',
            original_lang:'',
            original_title:'',
            overview:'',
            logo_path:'',
            popularity:'',
            release_date:'',
            vote_average:'',
            vote_count:'',
            backdrop_path:''
        }
    }
    getOscarMovie =(query) =>
    {
        movieApiHanlder.get(url.searchURL+query)
        .then(response => 
         {
            // console.log(response.data.results)
            this.setState({
                id : response.data.results[0].id,
                title: response.data.results[0].title,
                poster_path:response.data.results[0].poster_path,
                overview:response.data.results[0].overview,
                popularity:response.data.results[0].popularity,
                release_date:response.data.results[0].release_date,
                vote_average:response.data.results[0].vote_average,
                backdrop_path:response.data.results[0].backdrop_path
            })
         }
        )
        .catch(error =>
          console.log(error)
        ) 
    }

    componentDidMount()
    {
        this.getOscarMovie('The Shape of Water');
    }
    getYear =(e) =>
    {
        let inputYear = e;
        axios.get(url.jsonURL)
        .then(response =>
            {
                let movie = response.data.oscarMovies.find((movie) => movie.year == inputYear )
                this.getOscarMovie(movie.title);
            })
    }
    render()
    {
        return(
            <div>
                <Filters 
                    onChange ={this.getYear}
                    onQuery = {this.state.query}
                    title = {'Best Movie'}
                />
                <OscarListItem 
                    id  = {this.state.id}
                    title = {this.state.title}
                    release_date = {this.state.release_date}
                    poster_path = {url.folder+this.state.poster_path}
                    overview = {this.state.overview}
                    backdrop_path = {url.backdrop_path+this.state.backdrop_path}
                    vote_average = {this.state.vote_average}
                />
            </div>
        )
    }
}

export default OscarList;
