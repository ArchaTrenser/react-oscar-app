import React from 'react';
import { connect } from 'react-redux';
import { Pie } from 'ant-design-pro/lib/Charts';
import { Tooltip } from 'antd';
import { Rate } from 'antd';
import { addFavs, startRemoveFavs } from './../../actions/movie';
import '../style/loader.css';
import '../style/custom.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import axios from 'axios';

class FrontPage extends React.Component {
    state = {
        showResults: false,
        addFav: false
    }
    onToggle = () => {
        this.setState(
            {
                showResults: !this.state.showResults
            });
    }

    getFavsLike = () => {
        console.log('didmount')
        console.log(this.props.movieid)
        axios.get(`https://oscar-app-af339.firebaseio.com/users/${this.props.movieid}/favs.json`)
            .then((response) => {
                console.log(response.data)
                Object.keys(response.data).map(obj => {
                    let id = response.data[obj].id
                    console.log(id)
                    if (id === this.props.id) {
                        console.log('true')
                        this.setState({
                            addFav: true
                        })
                    }
                })
            })
    }
    componentDidMount() {
        // this.getFavsLike();
    }

    onIconchange = () => {

        let addfav = this.state.addFav;
        addfav = !addfav;
        this.setState({ addFav: addfav });
        axios.get(`https://oscar-app-af339.firebaseio.com/users/${this.props.movieid}/favs.json`)
            .then((response) => {
                if (!response.data) {
                    this.props.addFavs(this.props)
                }
                console.log(response.data)
                Object.keys(response.data).map(obj => {
                    let id = response.data[obj].id
                    if (id === this.props.id && !addfav) {
                        console.log('removing')
                        this.props.startRemoveFavs({ id: obj })
                        addfav = !addfav
                    }
                    else if (addfav) {
                        if (id != this.props.id) {
                            console.log('adding')
                            this.props.addFavs(this.props)
                            addfav = !addfav
                        }
                    }
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="content-container">
                <h2 style={{ color: 'white' }}>MOVIE</h2>
                <h1 style={{ textAlign: 'left' }} className="oscarTitle">{this.props.title}</h1>
                <div style={{ backgroundImage: 'url(' + this.props.backdrop_path + ')', backgroundSize: 'cover', borderRadius: '15px', boxShadow: '5px 10px 60px black' }}>
                    <div className="oscar movieBack">
                        <div className="oscarList">
                            <div style={{ paddingTop: '40px' }}>
                                <img className="oscarImg" src={this.props.poster_path} alt="no poster"></img>
                                <div className="details">
                                    <p>Overview : <span className="overview">{this.props.overview} </span></p>
                                    <p>TagLine : <span className="overview">{this.props.tagline}</span></p>
                                    Released : <span className="overview">{this.props.release_date} </span>
                                    <div style={{ display: 'flex' }}>
                                        <Pie className="pie" percent={this.props.vote_average * 10} subTitle="User Vote :" total={`${this.props.vote_average * 10}%`} height={100} />
                                        <Tooltip placement="bottomLeft" title="Mark as Favourite">
                                            <button style={{ position: 'relative', top: '10px', border: '2px solid white', borderRadius: '25px', width: '50px', height: '50px', color: 'white', marginRight: '30px' }} onClick={() => this.onIconchange()}>
                                                {this.state.addFav ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                                            </button>
                                        </Tooltip>
                                        <Tooltip placement="bottomLeft" title="Rate it">
                                            <button style={{ position: 'relative', top: '10px', border: '2px solid white', borderRadius: '25px', width: '50px', height: '50px', color: 'white' }} onClick={this.onToggle}>
                                                <i className="fas fa-star"></i>
                                            </button>
                                            {this.state.showResults ? <Rate allowHalf defaultValue={2.5} /> : null}
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addFavs: (movie) => dispatch(addFavs(movie)),
    startRemoveFavs: (data) => dispatch(startRemoveFavs(data))
});

const mapStateToProps = (state) => {
    return {
        movieid: state.auth.uid
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);