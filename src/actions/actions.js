import { 
    ACTION_ADD, 
    ACTION_SUB, 
    ACTION_FATCH_USER_DATA_DONE, 
    ACTION_FATCH_USER_DATA,
    DELETE_USER } from "./types"
import axios from 'axios'

export const ADD = (n) => {
    return {
        type: ACTION_ADD,
        payload: n
    }
}

export const SUB = (n) => {
    return {
        type: ACTION_SUB,
        payload: n
    }
}

export const fatchUser = () => {
    return dispatch => {
        dispatch({type:ACTION_FATCH_USER_DATA})
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res)
                dispatch({type:ACTION_FATCH_USER_DATA_DONE,payload: res.data})
            }).catch(err => {
                console.log(err)
            })
    }
}

export const DeleteUser = (id) => {
    return{
        type: DELETE_USER,
        payload: id
    }
}