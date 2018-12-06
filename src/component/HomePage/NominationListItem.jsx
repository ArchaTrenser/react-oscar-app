import React from 'react';
import url from '../url/urls';
import { connect } from 'react-redux';
import { addFavs } from './../../actions/movie';
import { Link } from 'react-router-dom';
import '../style/custom.css';

class NominationListItem extends React.Component {
    state = {
        showIcon: false
    }
    onIconchange = (event) => {
        event.stopPropagation();
        this.props.addFavs(this.props)
        this.setState(
            {
                showIcon: !this.state.showIcon
            });
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
    render() {
        return (
            <div className="nominationList">
                <Link to={`/movie/${this.props.id}`}>
                    <img src={this.poster_path} alt="no poster"></img>
                    <button className="btn-fav-nominy fav-hover" onClick={(event)=>this.onIconchange(event)}>
                        {this.state.showIcon ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>}
                    </button>
                </Link>
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
    addFavs: (movie) => dispatch(addFavs(movie))
});

export default connect(undefined, mapDispatchToProps)(NominationListItem);