import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CommunityPage from './pages/CommunityPage';
import CommunityDetailPage from './pages/CommunityDetailPage';
import DrivePage from './pages/DrivePage';
import ChallengePage from './pages/ChallengePage';
import TipPage from './pages/TipPage';
import TipDetailPage from './pages/TipDetailPage';
import VideoPage from './pages/VideoPage';
import MyPage from './pages/MyPage';
import Provider from './config/Provider';
import MatchingPage from './pages/MatchingPage';
import AdminPage from './pages/AdminPage';
import AdminLogin from './pages/AdminLogin';
import CommunityNewPage from './pages/CommunityNewPage';
import MatchingDetailPage from './pages/MatchingDetailPage';
import PrivateRoute from './config/PrivateRoute';
import NotFoundPage from './pages/NotFoundPage';
import GlobalComponents from './config/GlobalComponents';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <GlobalComponents />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/:id" element={<CommunityDetailPage />} />

          <Route path="/drive" element={<DrivePage />} />
          <Route path="/challenge" element={<ChallengePage />} />
          <Route path="/matching" element={<MatchingPage />} />
          <Route path="/matching/:id" element={<MatchingDetailPage />} />

          <Route path="/tip" element={<TipPage />} />
          <Route path="/tip/:id" element={<TipDetailPage />} />

          <Route path="/video" element={<VideoPage />} />

          <Route path="/admin" element={<AdminPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />

          {/* 인증 필요 페이지 */}
          <Route element={<PrivateRoute isNeedAuth={true} />}>
            <Route path="/community/new" element={<CommunityNewPage />} />
            <Route path="/my" element={<MyPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
