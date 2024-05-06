import { useState } from 'react';
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0);

    function handleClickPlus() {
        setCount(count + 1);
    }

    function handleClickMinus() {
        setCount(count - 1);
    }

    return ( 
        <>
            <div className='counter_div'>
                <div>Число: {count}</div>
                <button className="button_count" onClick={handleClickPlus}>+1</button>
                <button className="button_count" onClick={handleClickMinus}>-1</button>
            </div>
        </>
     );
}

export default Counter;