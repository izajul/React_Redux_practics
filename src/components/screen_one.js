
import React  from "react"
import { connect, useSelector, useDispatch } from "react-redux"
import { ADD, SUB } from "../actions/actions"
import { ACTION_ADD, ACTION_SUB } from "../actions/types"

const Screen_one = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    console.log(state)
    return (
        <div className="row pt-5">
            {/* <ul class="list-group">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul> */}

            <button onClick={() => dispatch(ADD(5))} className="btn btn-sm btn-success mr-2">+ add</button>
            <button onClick={() => dispatch(SUB(10))} className="btn btn-sm btn-danger">- SUB</button>
        </div>
    )
}

export default Screen_one