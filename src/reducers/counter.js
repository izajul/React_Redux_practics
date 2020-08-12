import {ACTION_ADD,ACTION_SUB} from "../actions/types"
import { act } from "react-dom/test-utils"

const initialState = {
    count: 0
}

const Counter = (state = initialState, action ) =>{
    switch (action.type){
        case ACTION_ADD:
            return{
                count: state.count+action.payload
            }
        case ACTION_SUB:
            return{
                count: state.count-action.payload
            }
        default:
            return state
    }
}

export default Counter