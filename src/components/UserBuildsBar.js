import React from 'react';
import { Link } from 'react-router-dom';

function UserBuildsBar(props) {
    
    return ( 
        <div className='user-builds-bar-container'>
            <Link to={'/UserBuildsView'} state={props}>
                <span className='user-builds-bar-name'>Build: {props.build}</span>
            </Link>
            
            <span className='user-builds-bar-date'>Date Posted: {props.date.toDateString().substring(4)}</span>
            <span>Total: ₱ {props.total}</span>
        </div>
     );
}

export default UserBuildsBar;