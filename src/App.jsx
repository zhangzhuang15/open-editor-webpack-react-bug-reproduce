import { useState } from "react";
const App = () => {
    const [count, setCount] = useState(0)
    const change = () => {
        setCount(count + 2);
    }
    
    return <div>
        hello world
        <button onClick={change}>{count}</button>
        </div>
}

export default App;