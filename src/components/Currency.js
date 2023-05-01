import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurr = (props)=>{
            dispatch({
                type: "CHG_CURRENCY",
                payload: props.target.value
            });
    };

    return (
            <select onChange={(event)=>changeCurr(event)} id='mySelect' className=" ps-3 py-3 select">
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
    );
};
export default Currency