import {
  useEffect,
  useState,
  useReducer
} from 'react';
import styles from './Counter.css';

const colors = {
  yellow: 'rgb(236, 222, 153)',
  green: 'rgb(52, 211, 153)',
  red: 'rgb(239, 68, 68)',
};

// define initial state
const initialState = { count: 0, currentColor: colors.yellow }

// determine Color func

function determineColor(count) {
  if (count === 0) return colors.yellow;
  else if (count > 0) return colors.green;
  else if (count < 0) return colors.red;
}


// reducerFunction
function countAndColorReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, currentColor: determineColor(state.count + 1) };
    case 'DECREMENT':
      return { count: state.count - 1, currentColor: determineColor(state.count - 1) };
    case 'RESET':
      return { count: 0, currentColor: determineColor(0) }
  }
}

export default function Counter() {

  // useReducer hook instead of useState
  const [state, dispatch] = useReducer(countAndColorReducer, initialState);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <main className={styles.main}>
      <h1 style={{ color: state.currentColor }}>{state.count}</h1>
      <div>
        <button
          type="button"
          onClick={(increment)}
          aria-label="increment"
          style={{ backgroundColor: colors.green }}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={decrement}
          aria-label="decrement"
          style={{ backgroundColor: colors.red }}
        >
          Decrement
        </button>
        <button
          type="button"
          aria-label="reset"
          onClick={reset}
          style={{ backgroundColor: colors.yellow }}
        >
          Reset
        </button>
      </div>
    </main>
  );
}
