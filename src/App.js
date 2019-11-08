import React from 'react';
import './App.css';
import Head from "./components/header/Head";
import Subhead from "./components/subhead/Subhead";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/content/Cards";
import Registration from "./components/registr/Registration";


const App = () => {
    return (
        <div className='contentall'>
            <div className='app-wrap'>
                <Head/>
                <Subhead/>
                <Navbar/>
                <Card/>
                <Registration/>
            </div>
        </div>
    );
};

export default App;
