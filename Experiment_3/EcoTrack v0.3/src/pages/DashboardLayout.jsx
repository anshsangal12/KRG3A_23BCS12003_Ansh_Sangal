import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
    <div style={{padding: "1rem"}}>
        <h1>Dashboard</h1>
        <nav>
            <Link to="/analytics" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Analytics</Link>
            <Link to="/summary" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Summary</Link>
            <Link to="/settings" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Settings</Link>
        </nav>
    </div>
    <main>
        <Outlet />
    </main>
    </>
  );
}

export default DashboardLayout;