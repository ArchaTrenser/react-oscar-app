import React from 'react';
import movieApiHanlder from '../../../axiosMovie';
import axios from 'axios';
import PhotoList from './PhotoList';
var html2json = require('html2json').html2json;
class Cast extends React.Component {
    state = {
        backdrop: []
    }
    getBackDrop = () => {
        console.log(this.props.id)
        movieApiHanlder.get(`3/movie/${this.props.id}?api_key=35624b10f2d190af89f00ddcdb909ed2&language=en-US`)
            .then(response => {
                let title = response.data.title.toLowerCase().replace(/ /g, "-");
                axios.get(`https://cors-anywhere.herokuapp.com/https://www.themoviedb.org/movie/${this.props.id}-${title}/remote/media_panel/backdrops?translate=false&item_count=32`)
                    .then(response => {
                        let json = html2json(response.data);
                        let photos = this.state.backdrop;
                        json.child.map(frist => {
                            frist.child && frist.child.map(second => {
                                let src =second.attr ? second.attr["data-src"] : '';
                                photos.push(src)
                                console.log(this.state.backdrop)
                        return this.setState({
                            backdrop: photos
                        })})})
                    })
                    .catch(error =>
                        console.log(error)
                    )
            })
    }
    componentDidMount() {
        this.getBackDrop();

    }
    render() {
        return (
                <div className="flexList">
                    <div className="backdropList">
                    {
                        this.state.backdrop ? this.state.backdrop.map((photo) => (
                            <PhotoList
                                src = {photo}
                            />
                            )) : <div></div>
                    }
                    </div>
                </div>
        )
    }
}

export default Cast;


// console.log(json.child)
//   console.log(second.attr ? second.attr["data-src"] : '')