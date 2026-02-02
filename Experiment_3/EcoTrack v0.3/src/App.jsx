import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Logs from './pages/Logs';
import DashboardLayout from './pages/DashboardLayout';
import DashboardAnalytics from './pages/DashboardAnalytics';
import DashboardSummary from './pages/DashboardSummary';
import DashboardSettings from './pages/DashboardSettings';
import ProtectedRoute from './routes/ProtectedRoute';


const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} ></Route>
                <Route path="/" element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }> 
                    <Route index element={<DashboardSummary />} />
                    <Route path="summary" element={<DashboardSummary />} />
                    <Route path="analytics" element={<DashboardAnalytics />} />
                    <Route path="settings" element={<DashboardSettings />} />
                </Route>

                <Route path="/logs" element={
                    <ProtectedRoute>
                        <Logs />
                    </ProtectedRoute>
                } />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;