import React from 'react';
import Poster from './Poster';
import '../style/custom.css';
import '../style/loader.css';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import '../style/custom.css';
import OverView from './OverView/OverView';
import Review from './Review/Review';
import Video from './Video/Video';
import Photos from '../MoviePage/Photo/Photos';
import HeaderPage from '../Header/HeaderPage';

const MoviePage =(props)=>{
    const TabPane = Tabs.TabPane
    function callback(key) {
        console.log(key);
      }
    console.log(props.match.params.id)
    return(
    <div>
       {!props &&<div className="loader">Loading...</div>}
       <HeaderPage />
       {props ? <Poster id ={props.match.params.id}/> : <div className="loader">Loading...</div> } 
       <div className="content-container">

            <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Overview" key="1"> 
                            <OverView id ={props.match.params.id}/>
                        </TabPane>
                        <TabPane tab="Review" key="2">
                            {props ? <Review id={props.match.params.id}/> : <div>Loading</div>}
                        </TabPane>
                        <TabPane tab="Video" key="3"> 
                            <Video id={props.match.params.id}/>
                        </TabPane>
                        <TabPane tab="Photo" key="4">
                            <Photos id={props.match.params.id}/>
                        </TabPane>
                    </Tabs>

       </div>
       
    </div>
    )
}

export default MoviePage;








{/* <Tabs className="tabs">
     <TabList className="tabList">
         <Tab className="tabListItem">Overview</Tab>
         <Tab className="tabListItem">Review</Tab>
         <Tab className="tabListItem">Video</Tab>
         <Tab className="tabListItem">Photo</Tab>
     </TabList>
     <TabPanel>
         <OverView id ={props.match.params.id}/>
     </TabPanel>
     <TabPanel>
         <Review id={props.match.params.id}/>
     </TabPanel>
     <TabPanel>
         <h2>Video</h2>
         <Video id={props.match.params.id}/>
     </TabPanel>
     <TabPanel>
         <h2>Photo</h2>
     </TabPanel>
 </Tabs> */}