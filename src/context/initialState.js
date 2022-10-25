import {fetchUser} from '../utils/fetchLocalData'
const userInfo = fetchUser()

export const initialState = {
    user : userInfo, 
    foodItems: null
}