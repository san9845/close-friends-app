import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import "../App.css"

export const FriendsList = () => {
    useEffect(() => {
        console.log('user State: ', users)
    }, [])

    const { users, removeUser, addFav } = useContext(GlobalContext)
    
    return (
        <div className="friends-list">
            <ul>
                {users.map((user, index) => {
                    return (
                        <li>
                            <p>{user.name}</p>
                            <div className="friends-list-actions">
                                <i onClick={() => addFav(user)} class={`${user.isClose ? 'star' : 'star-gray'} `}></i>
                                <button onClick={() => removeUser(user.id)}>Delete</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
