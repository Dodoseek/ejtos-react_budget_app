import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);

    const [sum, setBudget] = useState(budget);

    const setStateBudget = (props)=>{
        if (props < expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0)){
            alert("You cannot reduce the budget value lower than the spending");
            props = sum;
        };

        if (props > 20000){
            props = sum;
        };

        setBudget(props);

        dispatch({
            type: 'SET_BUDGET',
            payload: props
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input type="number" value={sum} max="20000" step="10" onChange={(event)=>setStateBudget(event.target.value)}/> </span>
        </div>
    );
};
export default Budget;