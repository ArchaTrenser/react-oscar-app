import React from 'react';
import movieApiHanlder from '../../../axiosMovie';
import PopularMovieRender from './PopularMovieRender';

class PopularMovie extends React.Component {
    state = {
        movieCast: []
    }
    getActorDetails = () => {
        console.log(this.props.id)
        movieApiHanlder.get(`3/person/${this.props.id}/movie_credits?api_key=35624b10f2d190af89f00ddcdb909ed2&language=en-US`)
            .then(response => {
                console.log("popular movies",response.data)
                let casts = this.state.movieCast
                for (let i = 0; i < 7; i++) {
                    casts.push(response.data.cast[i]);
                }
                return this.setState({
                    movieCast: casts
                })
            })
            .catch(error =>
                console.log(error)
            )
    }
    componentDidMount() {
        this.getActorDetails();
        console.log(this.props.id)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="movieList">
                        {
                            this.state.movieCast ? this.state.movieCast.map((movie) => (
                                <PopularMovieRender
                                    key={movie.cast_id}
                                    {...movie}
                                />
                            )) : <div></div>
                        }
                    </div>
            </div>
        )
    }
}

export default PopularMovie;


