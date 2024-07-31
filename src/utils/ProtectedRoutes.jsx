import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoutes = () => {
    const { currentUser } = useAuth();

    if (currentUser === null) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default ProtectedRoutes;
