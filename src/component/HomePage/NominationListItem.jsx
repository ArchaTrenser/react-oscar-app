import React from 'react';
import url from '../url/urls';
import { connect } from 'react-redux';
import { addFavs , startRemoveFavs } from './../../actions/movie';
import '../style/custom.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class NominationListItem extends React.Component {
    state = {
        addFav: false
    }

    onIconchange = (event) => {
        event.stopPropagation();
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
    poster_path = url.folder + this.props.poster_path;
    formatDate(release_date) {
        let monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        let year = release_date.slice(0, 4);
        let month = release_date.slice(6, 7);
        let date = release_date.slice(8, 10);
        return date + ' ' + monthNames[month] + ' , ' + year;
    }
    linkTo =()=>
    {
        this.props.history.push(`/movie/${this.props.id}`)
    }
    render() {
        return (
            <div className="nominationList">
                <div onClick={this.linkTo}>
                    <img src={this.poster_path} alt="no poster"></img>
                    <button className="btn-fav-nominy fav-hover" onClick={(event)=>this.onIconchange(event)}>
                        {this.state.addFav ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                    </button>
                </div>
                <div className="nominyDetails">
                    <p> {this.props.title} </p>
                    <p> Released : {this.formatDate(this.props.release_date)} </p>
                    <p> <i className="fas fa-star-half-alt" style={{ marginRight: '10px' }}></i>{this.props.vote_average}</p>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NominationListItem));