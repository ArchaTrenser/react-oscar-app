import React from 'react';
import movieApiHanlder from '../../../axiosMovie';
import ReviewList from './ReviewList';
import UserComment from './UserComment';
import { Collapse } from 'antd';
import { addReviews} from '../../../actions/movie';
import { connect } from 'react-redux';
import 'ant-design-pro/dist/ant-design-pro.css';

class Review extends React.Component {
    state = {
        movieReview: []
    }
    callback(key) {
        console.log(key);
    }
    getReview = () => {
        console.log("props", this.props)
        movieApiHanlder.get(`3/movie/${this.props.id}/reviews?api_key=35624b10f2d190af89f00ddcdb909ed2`)
            .then(response => {
                let len = response.data.results.length;
                let reviews = this.state.movieReview
                for (let i = 0; i < len; i++) {
                    reviews.push(response.data.results[i]);
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
    addReview = () => {
        console.log(this.props)
        var description = document.querySelector('.text-area').value;
        console.log(description)
        this.props.addReviews({ id: this.props.id, description: description })
    }
    componentWillMount() {
        this.getReview();
    }

    render() {
        return (
            <div className="content-container">
                <div>
                    <div className="reviewList">
                        {
                            this.state.movieReview ? this.state.movieReview.map((movie) => (
                                <ReviewList
                                    key={movie.review_id}
                                    {...movie}
                                />
                            )) : <div></div>
                        }
                    </div>
                    <UserComment 
                        id = {this.props.id}
                    />
                    <Collapse onChange={this.callback}>
                        <Collapse.Panel showArrow={false} header="Add Review" key="2">
                            <div>
                                <form>
                                    <textarea className="text-area" name="description" row="15" cols="200"></textarea>
                                    <br />
                                    <input className="input-btn" onClick={() => this.addReview()} type="submit" value="Add" />
                                </form>
                            </div>
                        </Collapse.Panel>
                    </Collapse>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie
    }
}

const mapDispatchToProps = (dispatch) => ({
    addReviews: (id, description) => dispatch(addReviews(id, description)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Review);
