import React from 'react';
import movieApiHanlder from '../../axiosMovie';
import url from '../url/urls';
import Filters from './Filters';
import axios from 'axios';
import NominationListItem from './NominationListItem';

class NominationList extends React.Component {
    state = {
        movieDetails: []
    }
    
    getNomationMovie = (query) => {
        this.state.movieDetails = [];
        movieApiHanlder.get(url.searchURL + query)
            .then(response => {
                let details = this.state.movieDetails
                details.push(response.data.results[0]);
                return this.setState({
                    movieDetails: details,
                })
            })
            .catch(error =>
                console.log(error)
            )
    }

    componentDidMount() {
        axios.get(url.jsonURL)
            .then(response => {
                response.data.nomainMovies.map((nominationMovies) => (
                    nominationMovies.year === '2017' ? nominationMovies.movies.map((movie) => {
                        return this.getNomationMovie(movie)
                    }) : ""
                ))
            })
    }
    getYear = (e) => {
        let inputYear = e.target.value;
        console.log(inputYear);
        axios.get(url.jsonURL)
            .then(response => {
                response.data.nomainMovies.map((nominationMovies) => (
                    nominationMovies.year === inputYear ? nominationMovies.movies.map((movie) => {
                        console.log(movie)
                        return this.getNomationMovie(movie)
                    }) : ""
                ))
            })
    }
    render() {
        return (
            <div>
                <Filters
                    onChange={this.getYear}
                    onQuery={this.state.query}
                    title = {'Nominated Movies'}

                />
                <div className="content-container">
                    <div className="nomination">
                        <div className="nominyList">

                        {
                            this.state.movieDetails.map((movie) => {
                                return <NominationListItem
                                key={movie.id}
                                {...movie}
                                />
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NominationList;
