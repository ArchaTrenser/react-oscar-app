import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import '../../style/custom.css';

class UserComment extends React.Component {
    state = {
        description: '',
        objId: []
    }
    getComment = () => {
        console.log(this.props.id)
        axios.get(`https://oscar-app-af339.firebaseio.com/users/${this.props.movieid}/review.json`)
            .then((response) => {
                Object.keys(response.data).map(obj => {
                    if (this.props.id === response.data[obj].id) {
                        console.log(response.data[obj].id)
                        this.setState({
                            description: response.data[obj].description
                        })
                    }
                })
            })
            .catch(error => {
                console.log(error);
            })

    }
    componentWillMount() {
        this.getComment();
    }
    render() {
        return (
            <div>
                { this.state.description  ?
                    <div className="reviewListItem">
                        <div>
                            <Avatar style={{ width: '50px', height: '50px', lineHeight: '45px' }} size={64} icon="user" />
                            <span className="author"><b>{this.props.movieid}</b></span>
                            <p className="content">{this.state.description}</p>
                        </div>
                    </div>:''
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movieid: state.auth.uid
    }
}
export default connect(mapStateToProps)(UserComment);
