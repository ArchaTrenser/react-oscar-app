import React from 'react';
import movieApiHanlder from '../../../axiosMovie';
import ReviewList from './ReviewList';

class Review extends React.Component {
    state = {
        movieReview: []
    }
    getCast = () => {
        movieApiHanlder.get(`3/movie/${this.props.id}/reviews?api_key=35624b10f2d190af89f00ddcdb909ed2`)
            .then(response => {
                console.log(response.data.results)
                let len = response.data.results.length;
                let reviews = this.state.movieReview
                for (let i = 0; i < len; i++) {
                    reviews.push(response.data.results[i]);
                    console.log(response.data.results[i])
                }
                return this.setState({
                    movieReview: reviews
                })
            }
            )
            .catch(error =>
                console.log(error)
            )
    }
    componentWillMount() {
        this.getCast();
    }
   
    render() {
        return (
            <div className="content-container">
                <div className="flexList">
                <div className="reviewList">
                        {
                            this.state.movieReview ? this.state.movieReview.map((movie) => (
                                <ReviewList
                                    key = {movie.review_id}
                                    {...movie}
                                />
                            )) : <div></div>
                        }
                    </div> 
                </div>
            </div>
        )
    }
}

export default Review;


