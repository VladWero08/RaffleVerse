import React from 'react';

import HomeMenu from '../components/welcomepage/HomeMenu';
import UserInterface from '../components/welcomepage/UserInterface';
import AdminInterface from '../components/welcomepage/AdminInterface';


export default function HomePage() {
    return (
        <div>
            <HomeMenu/>
            <UserInterface/>
            {/* <AdminInterface/> */}
        </div>
    )
}
