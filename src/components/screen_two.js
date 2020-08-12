import React, { Fragment } from "react"
import { useSelector } from 'react-redux'

const Screen_two = () => {
    const count = useSelector(state => state.Counter.count)
    return (
        <div className="row mt-5">
            <p>count {count}</p>
        </div>
    )
}

export default Screen_two;