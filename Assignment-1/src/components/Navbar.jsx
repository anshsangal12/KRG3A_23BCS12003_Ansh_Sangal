import { Link, useNavigate } from "react-router-dom"

function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    navigate("/login")
  }

  return (
    <div className="bg-blue-600 text-white p-6 flex justify-between">
      <div className="space-x-6 font-semibold">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/water">Water Tracker</Link>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 px-3 py-1 rounded"
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar