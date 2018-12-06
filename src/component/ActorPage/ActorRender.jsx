import React from 'react';
import url from '../url/urls';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import '../style/custom.css';
import '../style/loader.css';
import Photos from './Photos/Photos';
import PopularMovie from './PopularMovie.jsx/PopularMovie';

const ActorRender = (props) => {
    console.log(props.id);
    const poster_path = url.folder + props.profile_path;
    const TabPane = Tabs.TabPane
    function callback(key) 
    {
        console.log(key);
    }

    return (
        <div className="actor">
            <div className="actorDetails">
                {poster_path ?  <img src={poster_path} className="profile-pic" alt="no profile pic"></img> : <div className="loader">Loading...</div> }
                <div>
                    <br />
                    <p className="profile-name"> {props.name} </p>
                    <p > <span className="biography">Biography</span>
                        <br />
                        {props.biography}
                    </p>
                </div>
            </div>
            <div className="personal">
                <div className="personalInfo">
                    <h1>Personal Info</h1>
                    <p>
                        <span className="personal-title">Known For </span>
                        <br />
                        {props.known_for}
                    </p>
                    <p>
                        <span className="personal-title">Gender</span>
                        <br />
                        {props.gender === 1 ? 'Female' : 'Male'}
                    </p>
                    <p>
                        <span className="personal-title">Birthday</span>
                        <br />
                        {props.birthday}
                    </p>
                    <p>
                        <span className="personal-title">Place of Birth</span>
                        <br />
                        {props.place_of_birth}
                    </p>
                    <p>
                        <span className="personal-title">Official Site</span>
                        <br />
                        {props.homepage ? <a target="_blank" href={props.homepage}>{props.homepage}</a> : 'Null'}
                    </p>
                </div>
                <div className="collapseInfo">
                    <div className="card-container">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Popular Movies" key="1"> 
                            {props.id ? <PopularMovie id={props.id}/> :<div></div>}
                        </TabPane>
                        <TabPane tab="Photo" key="2">
                            <Photos id={props.id}/>
                        </TabPane>
                    </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ActorRender;





{/* <Tabs className="tabs">
    <TabList className="tabList">
        <Tab className="tabListItem">Popular Movies</Tab>
        <Tab className="tabListItem">Photo</Tab>
    </TabList>
    <TabPanel>
           <PopularMovie id={props.id}/>
    </TabPanel>
    <TabPanel>
           <Photos id={props.id}/>
    </TabPanel>
</Tabs> */}