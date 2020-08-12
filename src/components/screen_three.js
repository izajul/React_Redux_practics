import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';
import { DeleteUser} from '../actions/actions'

const Screen_three = () => {
    const userData = useSelector(state => state.FatchData.userData);
    const lodder = useSelector(state => state.FatchData.lodding);
    const dispatch  = useDispatch();
    return (
        <div className="row mt-5">
            {
                lodder ? <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}

                /> : <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sl.</th>
                                <th scope="col">Nmae</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((item, inx) => (
                                    //console.log(item.name)
                                    <tr key={inx}>
                                        <th scope="row">{inx + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address.street
                                            + ", " + item.address.city
                                            + " (" + item.address.zipcode + ")"}</td>
                                        <td><button onClick={()=> dispatch(DeleteUser(item.id))}  className="btn btn-sm btn-danger">Delete</button></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
            }


        </div>
    )
}
export default Screen_three