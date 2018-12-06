import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavs } from './../../actions/movie';
import { Tooltip } from 'antd';
import '../style/custom.css';
import '../style/loader.css';
import '../style/container.css';

class OscarListItem extends React.Component 
{
    state={
        showIcon :false
    }
    onIconchange =() =>
    {
        this.props.addFavs(this.props)
        this.setState(
            { 
                showIcon: !this.state.showIcon 
            });
    }
    render() {
        return (
            <div className="content-container inner-container" style={{ backgroundImage: 'url(' + this.props.backdrop_path + ')'}}>
                <Tooltip placement="bottomLeft" title="Mark as Favourite">
                    <button className="btn-fav" style= {{left : '1445px'}} onClick={this.onIconchange}>
                        {this.state.showIcon ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>}
                    </button>
                </Tooltip>
                <Link to={`/movie/${this.props.id}`}>
                    <h1 className="oscarTitle">{this.props.title}</h1>
                </Link>
                <div className="oscar" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 40%,#000 90%)', backgroundAttachment: 'fixed' }}>
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
    addFavs: (movie) => dispatch(addFavs(movie))
  });
  
export default connect(undefined, mapDispatchToProps)(OscarListItem);