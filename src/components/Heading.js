import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export const Heading = () => {
    return (
        <div className="heading-container">
            <h1>My Close Friends</h1>
            <Link to='/add-friend'><button>Add Friend</button></Link>
        </div>
    )
}
