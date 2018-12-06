import React from 'react';
import Header from '../Header/Header';
import OscarList from './OscarList';
import NominationList from './NominationList';

const HomePage =()=>(
    <div>
       <Header />
       <OscarList />
       <NominationList />
    </div>
);

export default HomePage;