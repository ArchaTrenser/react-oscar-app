import React from 'react';
import Cast from './Cast';
import Crew from './Crew';
import Review from './../Review/Review';
const OverView =(props)=>{
    return(
    <div>
       <Cast  id ={props.id}/>
       <Crew  id ={props.id}/>
    </div>
    )
}

export default OverView;