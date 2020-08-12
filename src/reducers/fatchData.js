import {
    ACTION_FATCH_USER_DATA,
    ACTION_FATCH_USER_DATA_DONE,
    DELETE_USER
} from "../actions/types"

const initialState = {
    userData:[],
    lodding: false
}

const FatchUserData = (state = initialState, action) =>{
    switch (action.type){
        case ACTION_FATCH_USER_DATA:{
            return{
                ...state,
                lodding: true
            }
        }
        case ACTION_FATCH_USER_DATA_DONE:{
            return{
                ...state,
                userData: action.payload,
                lodding: false
            }
        }
        case DELETE_USER:{
            return{
                ...state,
                userData: state.userData.filter(item => item.id != action.payload)
            }
        }
        default: return state
    } 
}

export default FatchUserData