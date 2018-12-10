import React from 'react';
import OscarList from './OscarList';
import NominationList from './NominationList';
import HeaderPage from '../Header/HeaderPage';

const HomePage =()=>(
    <div>
       <HeaderPage />
       <OscarList />
       <NominationList />
    </div>
);

export default HomePage;