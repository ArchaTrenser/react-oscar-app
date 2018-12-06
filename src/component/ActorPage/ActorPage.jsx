import React from 'react';
import Header from '../Header/Header';
import Actor from './Actor';

const ActorPage =(props)=>{
    console.log(props);
    return(
    <div>
       <Header />
       <Actor id={props.match.params.id}/>
    </div>

    )
}

export default ActorPage;