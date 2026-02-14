import React from 'react';
import Button from '@mui/material/Button';

const Child = React.memo(function  Child({ values, theme, onClick, reset }) {
    console.log("Child rendered");
    
    return (
        <>
        <div style={{ backgroundColor: theme === "dark" ? "#303236" : "#d2e4e0"}}>
            <h3>Child Component</h3>
            <p>Value: {values}</p>
        </div>
        <Button variant="outlined" onClick={onClick}>Increment Count</Button>
        <Button variant="outlined" onClick={reset}>Reset</Button>
        </>
  )
})

export default Child;