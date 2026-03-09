import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  const message = location.state?.message

  const handleLogin = (e) => {
    e.preventDefault()

    if (username && password) {
      localStorage.setItem("token", "loggedIn")
      setIsLoggedIn(true)
      navigate("/dashboard")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {message && (
          <p className="text-red-600 mb-3 text-center font-semibold">
            {message}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border p-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login