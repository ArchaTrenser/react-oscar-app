import React from 'react';
import movieApiHanlder from '../../axiosMovie';
import ActorRender from './ActorRender';

class Actor extends React.Component {
    state = {
        biography:'',
        birthday:'',
        deathday:'',
        id:'',
        gender : '',
        known_for:'',
        name:'',
        place_of_birth:'',
        profile_path:'',
        homepage:''
    }
    getActorDetails= () => {
        movieApiHanlder.get(`3/person/${this.props.id}?api_key=35624b10f2d190af89f00ddcdb909ed2&language=en-US`)
            .then(response => {
                console.log(response.data)
                return this.setState({
                    birthday : response.data.birthday,
                    biography : response.data.biography,
                    deathday : response.data.deathday,
                    id: response.data.id,
                    gender:response.data.gender,
                    homepage:response.data.homepage,
                    known_for:response.data.known_for_department,
                    name : response.data.name,
                    place_of_birth : response.data.place_of_birth,
                    profile_path : response.data.profile_path
                })})
            .catch(error =>
                console.log(error)
            )
    }
    componentWillMount() {
        this.getActorDetails();
    }
    render() {
        return (
            <div>
                <div className="content-container">
                    <ActorRender 
                        {...this.state}
                    />
                </div>
            </div>
        )
    }
}

export default Actor;


