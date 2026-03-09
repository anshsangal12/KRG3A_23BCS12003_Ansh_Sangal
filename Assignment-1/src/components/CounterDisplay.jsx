import React from 'react'

const CounterDisplay = React.memo(({ count, goal }) => {
  console.log('CounterDisplay Rendered')
  return (
    <div className="mt-4 text-lg font-semibold">
      {count} / {goal} glasses completed
    </div>
  )
})

export default CounterDisplay
