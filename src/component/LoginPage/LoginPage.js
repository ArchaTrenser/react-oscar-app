import React from 'react';
import {startLogin} from '../../actions/auth';
import {connect} from 'react-redux';
import '../style/loginPage.css';

export const LoginPage =({startLogin}) =>
(
    <div className = "box-layout">
        <div className = "box-layout__box">
            <h1 className = "box-layout__title">OSCAR TRACKS</h1>
            <button onClick = {startLogin} className="button">LOGIN with <i className="fab fa-google"></i></button>
        </div>
    </div>
)
const mapDispatchToProps =(dispatch) =>
({
    startLogin : () => dispatch(startLogin())
})
export default connect(undefined,mapDispatchToProps)(LoginPage);