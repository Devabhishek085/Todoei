import React, { useState } from "react";
const CounterComponent=() => {
    const [count,setCount]=useState(0);

    return(
        <div>
            <p>
                Count Component - {count}
            </p>
            <h3>The no is {count%2===0?"EVEN":"ODD"}</h3>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}
export default CounterComponent;