import React from 'react';
import movieApiHanlder from '../../../axiosMovie';
import CastList from './CastList';

class Cast extends React.Component {
    state = {
        movieCast: [],
        disabled:false,
        itemcount : 0
    }
    getCast= (start ,end) => {
        this.state.movieCast = []
        movieApiHanlder.get(`3/movie/${this.props.id}/credits?api_key=35624b10f2d190af89f00ddcdb909ed2`)
            .then(response => {
                this.state.itemcount = response.data.cast.length;
                console.log(this.state.itemcount)
                let casts = this.state.movieCast
                for (let i = start; i < end; i++) {
                    casts.push(response.data.cast[i]);
                }
                return this.setState({
                    movieCast: casts
                })})
            .catch(error =>
                console.log(error)
            )
    }
    componentWillMount() {
        this.getCast(0,7);
        this.state.disabled = true;
    }
  
    onClickLeft =()=>
    {
        let start = 0;
        let end = 1 * 7;
        this.getCast(start,end);
    }
    onClickRight = ()=>
    {
        let start = 7;
        let end =  7 * 2;
        this.state.disabled =false;
        this.getCast(start,end);
    }
    render() {
        return (
            <div>
            <h1 style={{'color' : 'white'}}>Cast</h1>
                <div className="flexList">
                    <div className="left">
                        <button 
                            disabled={this.state.disabled}
                            onClick ={this.onClickLeft} 
                            className="btn-left">
                            <i className="fas fa-angle-double-left"></i>
                        </button>
                    </div>
                    <div className="castList">
                        {
                            this.state.movieCast ? this.state.movieCast.map((movie) => (
                                <CastList
                                    key = {movie}
                                    {...movie}
                                />
                            )) : <div></div>
                        }
                    </div>
                    <div className="right">
                        <button 
                            onClick ={this.onClickRight}
                            className="btn-right" >
                            <i className="fas fa-angle-double-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cast;


