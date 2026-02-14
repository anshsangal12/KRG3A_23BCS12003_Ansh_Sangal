import { React } from 'react'
import { useState, useMemo, useCallback, Suspense } from 'react'
import Child from './components/child.jsx'
import Button from '@mui/material/Button';

function heavy_computation(count) {
    // Simulate a heavy computation task
    let sum = 0;
    for (let i = 0; i < 1e7; i++) {
        sum += count;
    }
    return sum;
}

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("light")

  const values = useMemo(() => {
    console.log("Computing heavy value...");
    return heavy_computation(count);
  }, [count])
  
  const handleClick = useCallback(() => {
    setCount(count + 1);
    console.log("Button clicked!");
  }, [count]
  );


  return (
    <div className="App" style={{ backgroundColor: theme === "dark" ? "#222528" : "#efefef", color: theme === "dark" ? "#eee" : "#222", minHeight: "100vh", padding: "20px" }}>
      <h1>React Memo Example</h1>
      <p>Count: {count}</p>
      <Button variant="outlined" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</Button>
      <Suspense fallback={console.log("Loading Child Component...") && <div>Loading Child Component...</div>}>
        <Child values={values} theme={theme} onClick={handleClick} reset={() => setCount(0)} />
      </Suspense>
    </div>
  )
}

export default App
