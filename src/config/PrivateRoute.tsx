import { useAuthStore } from '@/@features/Auth/useAuthStore';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  /** true:인증, false:인증불필요 */
  isNeedAuth: boolean;
}

/** 페이지 직접접근 시, 막는 용도로 사용 */
const PrivateRoute = ({ isNeedAuth }: Props) => {
  const isLogin = useAuthStore((state) => state.isLogin());

  //* 인증 불필요 페이지
  if (!isNeedAuth) {
    return isLogin ? <PrevNavigate /> : <Outlet />;
  }

  //* 인증 필요 페이지
  return isLogin ? <Outlet /> : <PrevNavigate />;
};

export default PrivateRoute;

const PrevNavigate = () => {
  return <Navigate to="/" />;
};
