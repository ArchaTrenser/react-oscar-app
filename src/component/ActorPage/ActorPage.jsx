import React from 'react';
import Actor from './Actor';
import HeaderPage from '../Header/HeaderPage';

const ActorPage =(props)=>{
    console.log(props);
    return(
    <div>
       <HeaderPage />
       <Actor id={props.match.params.id}/>
    </div>

    )
}

export default ActorPage;