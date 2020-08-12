import React, {
    Fragment,
    Component
} from "react"
import Screen1 from './screen_one';
import Screen2 from './screen_two';
import Screen3 from './screen_three';
import { useDispatch } from 'react-redux'
import * as Actions from '../actions/actions';

function RootComps() {
    const dispatch  = useDispatch();
    return (
        <Fragment>
            {dispatch(Actions.fatchUser())}
            <div className="container">
                <Screen1 />
                <Screen2 />
                <Screen3 />
            </div>
        </Fragment>
    );
}

export default RootComps;
