import { Avatar } from '@material-ui/core';
import React from 'react';
import './Store.css';

function Store({ image, profileSrc ,title}) {
    return (
        <div style={{backgroundImage: `url(${image})` }} className="store">
            <Avatar className="store__avatar" src={profileSrc}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Store;
