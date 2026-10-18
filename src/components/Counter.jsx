import React from 'react';
function Counter() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                increase
            </button>
            <button onClick={() => setCount(0)}>
                reset
            </button>
            <button onClick={() => setCount(count - 1)}>
                decrease
            </button>   
            
        </div>
    );
}

export default Counter;