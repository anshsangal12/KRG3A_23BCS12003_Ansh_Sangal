import { useState, useEffect, useCallback } from 'react'
import CounterDisplay from '../components/CounterDisplay'

function WaterTracker() {
  const [count, setCount] = useState(0)
  const [goal] = useState(8)
  const [tip, setTip] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('waterCount')
    if (saved) setCount(Number(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('waterCount', count)
  }, [count])

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => {
        setTip(data.slip.advice)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch tip')
        setLoading(false)
      })
  }, [])

  const increment = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  const decrement = useCallback(() => {
    setCount(prev => (prev > 0 ? prev - 1 : 0))
  }, [])

  const reset = () => setCount(0)

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white shadow-lg p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">Daily Water Tracker</h2>

        <div className="flex justify-center space-x-4">
          <button onClick={decrement} className="bg-gray-400 px-3 py-1 rounded">-</button>
          <button onClick={increment} className="bg-blue-500 text-white px-3 py-1 rounded">+</button>
        </div>

        <button
          onClick={reset}
          className="mt-4 bg-red-500 text-white px-4 py-1 rounded w-full"
        >
          Reset
        </button>

        <CounterDisplay count={count} goal={goal} />

        {count >= goal && (
          <div className="text-green-600 mt-2 font-bold">Goal Reached 🎉</div>
        )}

        <div className="mt-4">
          {loading && <p>Loading health tip...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && (
            <p className="italic text-green-700">Today's Health Tip: {tip}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default WaterTracker
