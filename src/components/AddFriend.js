import React, {useContext, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuid } from 'uuid'
import "../App.css"

export const AddFriend = () => {
    const [addFriendValue, setAddFriendValue] = useState("")
    const { users, addUser } = useContext(GlobalContext)
    const history = useHistory()

    const handleAddFriend = (e) => {
        setAddFriendValue(e.target.value)
    }
    
    const handleSubmit = () => {
        if (!addFriendValue) {
            return alert("Enter user name!")
        }

        addUser({
            id: uuid(),
            name: addFriendValue,
            isClose: false
        })
        history.push('/')
    }
    return (
        <div className="add-friend-container">
            <h2>Add friend</h2>
            <div className="add-friend-wrapper">
                <input type="text" onChange={handleAddFriend} value={addFriendValue} name="Add user" placeholder="Add Friend" />
                <button className="submit" onClick={handleSubmit}>Submit</button>
                <Link to="/"><button className="back">Back</button></Link>
            </div>
        </div>
    )
}

