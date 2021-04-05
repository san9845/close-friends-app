export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_USER':
            return {
                users: state.users.filter(user => {
                    return user.id != action.payload
                })
            }
        
        case 'ADD_USER':
            return {
                users: [action.payload, ...state.users]
            }
        
        case 'ADD_FAV':
            const newUserList = [...state.users]
            const index = newUserList.findIndex(user => user.id == action.payload.id)
            const changeObj = { ...newUserList[index] }
            changeObj.isClose = !changeObj.isClose
            newUserList[index] = { ...changeObj }
            // console.log('fav', newUserList)
            return {
                users: newUserList
            }
        
        default:
            return state
    }
}