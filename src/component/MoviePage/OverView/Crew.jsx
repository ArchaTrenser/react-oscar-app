import React from 'react';
import movieApiHanlder from '../../../axiosMovie';
import CrewList from './CrewList';

class Crew extends React.Component {
    state = {
        movieCrew: [],
        disabled:false,
        itemCount : 0
    }
    getCast = (start ,end) => {
        this.state.movieCrew = []
        movieApiHanlder.get(`3/movie/${this.props.id}/credits?api_key=35624b10f2d190af89f00ddcdb909ed2`)
            .then(response => {
                this.state.itemCount = response.data.crew.length; 
                let crews = this.state.movieCrew
                for (let i = start; i < end; i++) {
                    crews.push(response.data.crew[i]);
                }
                return this.setState({
                    movieCrew: crews
                })
            }
            )
            .catch(error =>
                console.log(error)
            )
    }
    componentWillMount() {
        this.getCast(0,7);
        this.state.disabled = true;
    }
    onClickRight = ()=>
    {
        let start = 7;
        let end = 7 * 2;
        this.state.disabled =false;
        this.getCast(start,end);
    }
    onClickLeft =()=>
    {
        let start = 0;
        let end = 1 * 7;
        this.getCast(start,end);
    }
    render() {
        return (
            <div>
            <h1 style={{'color' : 'white'}}>Crew</h1>
                <div className="flexList">
                    <div>
                        <button 
                            disabled={this.state.disabled}
                            onClick ={this.onClickLeft} 
                            className="btn-left">
                            <i className="fas fa-angle-double-left"></i>
                        </button>
                    </div>
                    <div className="castList">
                        {
                            this.state.movieCrew ? this.state.movieCrew.map((movie) => (
                                <CrewList
                                    key = {movie.credit_id}
                                    {...movie}
                                />
                            )) : <div></div>
                        }
                    </div>
                    <div>
                        <button onClick ={this.onClickRight} className="btn-right">
                            <i className="fas fa-angle-double-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Crew;


