import React from 'react';
import Header from '../../Header/Header';
import movieApiHanlder from '../../../axiosMovie';
import axios from 'axios';
import { connect } from 'react-redux';
import FavouritesList from './FavouritesList';


class FavouritesPage extends React.Component {
    state = {
        id: '',
        movieDetails: [],
        objId : []
    }
    getFavMovie = () => {
        axios.get(`https://oscar-app-af339.firebaseio.com/users/${this.props.movieid}/favs.json`)
            .then((response) => {
                console.log(response.data)
                Object.keys(response.data).map(obj => {
                    this.state.id = response.data[obj].id
                    let object = this.state.objId
                    object.push(response.data)
                    console.log(this.state.objId)
                    movieApiHanlder.get(`3/movie/${this.state.id}?api_key=35624b10f2d190af89f00ddcdb909ed2`)
                    .then(response => {
                        let details = this.state.movieDetails
                        details.push(response.data)
                        return this.setState({
                                movieDetails: details,
                                objId : object
                            })
                        }
                        )
                        .catch(error =>
                            console.log(error)
                        )
                })
            })
            .catch(error => {
                console.log(error);
            })

    }
    componentDidMount() {
        this.getFavMovie();
    }
    render() {
        return (
            <div>
                <Header />
                <div className="page-header">
                    <div className="content-container">
                        <div className="flex-container-header">
                            <h1 className="movieHead">Favourite Movies</h1>
                        </div>
                    </div>
                </div>
                {
                    this.state.movieDetails ? this.state.movieDetails.map((movie) => (
                        <FavouritesList
                            key = {movie.id}
                            objId = {this.state.objId}
                            {...movie} />
                    )) : <div></div>
                }

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        movieid: state.auth.uid
    }
}
export default connect(mapStateToProps)(FavouritesPage);