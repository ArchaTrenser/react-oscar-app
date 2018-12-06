import React from 'react';
import movieApiHanlder from '../../../axiosMovie';
import PhotoRender from './PhotoRender';
import '../../style/custom.css';

class Photos extends React.Component {
    state = {
        photos: []
    }
    getPhotos = () => {
        movieApiHanlder.get(`3/person/${this.props.id}/images?api_key=35624b10f2d190af89f00ddcdb909ed2&language=en-US`)
            .then(response => {
                console.log(response.data.profiles)
                let len = response.data.profiles.length
                let photo = this.state.photos
                for (let i = 0; i < len; i++) {
                    photo.push(response.data.profiles[i]);
                }
                return this.setState({
                    photos: photo
                })
            })
            .catch(error =>
                console.log(error)
            )
    }
    componentDidMount() {
        this.getPhotos();
    }
    render() {
        return (
            <div className="gallery">
                    {
                        this.state.photos ? this.state.photos.map((photo) => (
                            <PhotoRender
                                {...photo}
                            />
                        )) : <div></div>
                    }
            </div>
        )
    }
}

export default Photos;


