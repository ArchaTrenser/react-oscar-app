import React from 'react';
import { connect } from 'react-redux';
import { Pie } from 'ant-design-pro/lib/Charts';
import { Tooltip } from 'antd';
import { Rate } from 'antd';
import { addFavs } from './../../actions/movie';
import '../style/loader.css';
import '../style/custom.css';
import 'ant-design-pro/dist/ant-design-pro.css';

class FrontPage extends React.Component 
{
    state={
        showResults : false,
        showIcon :false
    }
    onToggle = () =>
    {
        this.setState(
            { 
                showResults: !this.state.showResults 
            });
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
            <div className="content-container">
                <h2 style={{ color: 'white' }}>MOVIE</h2>
                <h1 style={{ textAlign: 'left' }} className="oscarTitle">{this.props.title}</h1>
                <div style={{ backgroundImage: 'url(' + this.props.backdrop_path + ')', backgroundSize: 'cover', borderRadius: '15px', boxShadow: '5px 10px 60px black' }}>
                    <div className="oscar" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 40%,#000 90%)', backgroundAttachment: 'fixed' }}>
                        <div className="oscarList">
                            <div style={{ paddingTop: '40px' }}>
                                <img className="oscarImg" src={this.props.poster_path} alt="no poster"></img>
                                <div className="details">
                                    <p>Overview : <span className="overview">{this.props.overview} </span></p>
                                    <p>TagLine : <span className="overview">{this.props.tagline}</span></p>
                                    Released : <span className="overview">{this.props.release_date} </span>
                                    <div style={{display:'flex'}}>
                                        <Pie className="pie" percent={this.props.vote_average * 10} subTitle="User Vote :" total={`${this.props.vote_average* 10}%`} height={100} />
                                        <Tooltip placement="bottomLeft" title="Mark as Favourite">
                                            <button  style={{position:'relative',top:'10px',border:'2px solid white',borderRadius:'25px',width:'50px',height:'50px',color:'white',marginRight : '30px'}} onClick={this.onIconchange}>
                                            {this.state.showIcon ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>}
                                            </button>
                                        </Tooltip>
                                    <Tooltip placement="bottomLeft" title="Rate it">
                                            <button style={{position:'relative',top:'10px',border:'2px solid white',borderRadius:'25px',width:'50px',height:'50px',color:'white'}} onClick={this.onToggle}>
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
    addFavs: (movie) => dispatch(addFavs(movie))
  });
  
export default connect(undefined, mapDispatchToProps)(FrontPage);