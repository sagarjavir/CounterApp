import { useReducer } from "react";

function counterReducer(state, action){
    switch(action.type){
      case 'increment':
        return {count: state.count+1};
      case 'decrement':
        return {count: state.count-1};
      case 'reset':
        return {count: 0};
      default:
        return state;
    }
  }
  export default function Counter(){
    const [state, dispatch] = useReducer(counterReducer, {count: 0});
    return (
        <div>
            <h1>Count {state.count}</h1>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
  }