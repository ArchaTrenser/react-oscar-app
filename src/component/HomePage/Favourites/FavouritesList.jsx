import React from 'react';
import url from '../../url/urls';
import { Tooltip } from 'antd';
import { connect } from 'react-redux';
import { startRemoveFavs } from '../../../actions/movie';
import { Link } from 'react-router-dom';
import '../../style/custom.css';
import '../../style/container.css';
import 'ant-design-pro/dist/ant-design-pro.css';

class FavouritesList extends React.Component {
    state = {
        showIcon: false
    }
    onIconchange = (id) => {
        console.log(this.props.objId)
        let object = this.props.objId;
        object.map(obj => {
            console.log(obj)
            Object.keys(obj).map(objId => {
                console.log(objId)
                let keyId = obj[objId].id
                keyId === id && this.props.startRemoveFavs({ id: objId });
                //this.props.history.push('/favourites')
            })
        })
        this.setState(
            {
                showIcon: !this.state.showIcon
            });
    }
    render() {
        return (
            <div className="content-container inner-container" style={{ backgroundImage: 'url(' + url.folder + this.props.backdrop_path + ')' }}>
                <div className="oscar">
                    <div className="oscarList">
                        <div style={{ paddingTop: '40px' }}>
                            <div style={{ display: 'flex' }}>
                                <h1 style={{ color: 'white', marginRight: '100px' }}>{this.props.title}</h1>
                                <Tooltip placement="bottomLeft" title="Remove from Favourites">
                                    <button className="btn-fav" onClick={() => this.onIconchange(this.props.id)}>
                                        {this.state.showIcon ? <i className="far fa-heart" style={{ color: 'white' }}></i> : <i class="fas fa-heart"></i>}
                                    </button>
                                </Tooltip>
                            </div>
                            <img className="oscarImg" src={url.folder + this.props.poster_path} alt="no poster"></img>
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
    startRemoveFavs: (data) => dispatch(startRemoveFavs(data))
});

export default connect(undefined, mapDispatchToProps)(FavouritesList);

