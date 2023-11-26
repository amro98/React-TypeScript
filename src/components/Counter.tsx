import {useReducer} from 'react'

type CounterState = {
    count:number;
}

type UpdateAction = {
    type: "increament" | "decreament"; // Strict
    payload:number;
}

type ResetAction = {
    type: "reset"; // Strict
}

type CounterAction = UpdateAction | ResetAction
// type CounterAction = {
//     // type:string;
//     type: "increament" | "decreament" | "reset" ; // Strict
//     payload?:number;
// }

const initialState = { count : 0 };

const reducer = (state:CounterState ,action:CounterAction) => {
    switch (action.type){
        case "increament":
            return {count: state.count + action.payload};
        case "decreament":
            return {count: state.count - action.payload};
         case "reset":
            return initialState;
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        Count : {state.count}
        <button onClick={() => dispatch({type:"increament", payload:10})}>Increment 10</button>
        <button onClick={() => dispatch({type:"decreament", payload:10})}>Decrement 10</button>
        <button onClick={() => dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default Counter