import { useAuthStore } from '@/@features/Auth/useAuthStore';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  const userInfo = useAuthStore((state) => state.userInfo);

  if (userInfo === null || userInfo.userRole !== 'ADMIN') {
    return <Navigate to="/admin/login" />;
  }
  return <Outlet />;
};

export default AdminRoute;
