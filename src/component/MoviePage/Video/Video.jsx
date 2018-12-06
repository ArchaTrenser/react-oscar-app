import React from 'react';
import movieApiHanlder from '../../../axiosMovie';
import VideoList from './VideoList';
import { runInThisContext } from 'vm';

class Video extends React.Component {
    state = {
        movieVideo: []
    }
    getVideo =() => {
        this.state.movieCast = []
        movieApiHanlder.get(`/3/movie/${this.props.id}/videos?api_key=35624b10f2d190af89f00ddcdb909ed2&language=en-US`)
            .then(response => {
                let videos = this.state.movieVideo;
                let len = response.data.results.length;
                for (let i = 0; i < len; i++) {
                    console.log(response.data.results[i].key)
                    videos.push(response.data.results[i].key);
                    console.log(videos)
                }
                return this.setState({
                    movieVideo: videos
                })})
            .catch(error =>
                console.log(error)
            )
    }
    componentWillMount() {
        this.getVideo();
    }
    render() {
        return (
            <div>
                <div className="flexList">
                    <div className="videoList">
                        {
                            this.state.movieVideo ? this.state.movieVideo.map((movie) => 
                                {
                                    console.log(movie);
                                   return <VideoList
                                   movie ={movie}
                                //   {...movie}
                                />
                                }
                               
                            ) : <div></div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;






























// /3/movie/399055/videos?api_key=35624b10f2d190af89f00ddcdb909ed2&language=en-US


// /3/movie/399055/images?api_key=35624b10f2d190af89f00ddcdb909ed2&language=en-US --imge

//https://www.youtube.com/embed/OpH8kO1AyVA?enablejsapi=1&autoplay=0&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en-US&modestbranding=1&fs=1