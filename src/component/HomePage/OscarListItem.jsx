import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavs , startRemoveFavs } from './../../actions/movie';
import { Tooltip } from 'antd';
import axios from 'axios';
import '../style/custom.css';
import '../style/loader.css';
import '../style/container.css';

class OscarListItem extends React.Component 
{
    state={
        addFav :false
    }

    onIconchange =() =>
    {
        let addfav= this.state.addFav;
      
        console.log('before',addfav)
        
        addfav = !addfav;
      
        this.setState({ addFav:addfav });

        console.log(this.props.movieid)
        axios.get(`https://oscar-app-af339.firebaseio.com/users/${this.props.movieid}/favs.json`)
            .then((response) => {
                if(!response.data){
                    this.props.addFavs(this.props) 
                }
                console.log(response.data)
                    Object.keys(response.data).map(obj => {
                        let id = response.data[obj].id
                        console.log('firebase',id)
                        console.log('props',this.props.id)
                        console.log('after',addfav)
                        if(id === this.props.id && !addfav)
                        {
                        console.log('removing')
                            this.props.startRemoveFavs({ id: obj})
                            addfav= !addfav
                        }
                        else if(addfav)
                        {
                           if( id != this.props.id){
                        console.log('adding')

                            this.props.addFavs(this.props) 
                            addfav= !addfav
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
            <div className="content-container inner-container" style={{ backgroundImage: 'url(' + this.props.backdrop_path + ')'}}>
                <Tooltip placement="bottomLeft" title="Mark as Favourite">
                    <button className="btn-fav" style= {{left : '1445px'}} onClick={this.onIconchange}>
                        {this.state.addFav ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>}
                    </button>
                </Tooltip>
                <Link to={`/movie/${this.props.id}`}>
                    <h1 className="oscarTitle">{this.props.title}</h1>
                </Link>
                <div className="oscar movieBack" >
                    <div className="oscarList">
                        <div style={{ paddingTop: '40px' }}>
                            <Link to={`/movie/${this.props.id}`} activeclassname="is-active">
                                <img className="oscarImg" src={this.props.poster_path} alt="no poster"></img>
                            </Link>
                            <div className="details">
                                Release Date : <span className="overview">{this.props.release_date} </span>
                                <p>Overview : <span className="overview">{this.props.overview} </span></p>
                                Vote Average: <span className="overview">{this.props.vote_average}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
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
export default connect(mapStateToProps, mapDispatchToProps)(OscarListItem);