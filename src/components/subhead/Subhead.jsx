import React from 'react';
import './Subhead.css';
import SearchPanel from "./SearchPanel/SearchePanel";

const Subhead = () => {
    return <div className='subhead'>
        <div className='subhead_menu clearfix'>

            <SearchPanel />
            <li><a href='#'>Registration</a></li>
            {/* <li><a href='#'>Authorization</a></li>*/}
            <li><a href='#'>Logout</a></li>
        </div>
    </div>
};
export default Subhead;
