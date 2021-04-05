import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import "../App.css"

export const FriendsList = () => {
    const [search, setSearch]  = useState('')
    const { users, removeUser, addFav } = useContext(GlobalContext)
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className="friends-list">
            <input type="text" onChange={handleSearch} value={search} placeholder="Search your close friends.." />
            <ul>
                {users.filter(user => user.name.toLowerCase().includes(search)).map((user, index) => {
                    // if (user.name.toLowerCase().includes(search)) {
                        return (
                            <li key={index + 1}>
                                <p>{user.name}</p>
                                <div className="friends-list-actions">
                                    <i onClick={() => addFav(user)} class={`${user.isClose ? 'star' : 'star-gray'} `}></i>
                                    <button onClick={() => removeUser(user.id)}>Delete</button>
                                </div>
                            </li>
                        )
                    // }
                })}
            </ul>
        </div>
    )
}
