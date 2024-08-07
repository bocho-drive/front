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
import AdminGeneral from './pages/AdminGeneral';
import AdminGeneralDetail from './pages/AdminDetailPage';
import AdminChallengeNew from './pages/AdminChallengeNew';
import AdminChallenge from './pages/AdminChallenge';
import AdminChallengeDetail from './pages/AdminChallengeDetail';
import AdminTip from './pages/AdminTip';
import AdminTipDetail from './pages/AdminTipDetail';
import AdminChallengeVerified from './pages/AdminChallengeVerified';
import AdminChallengeVerifiedDetail from './pages/AdminChallengeVerifiedDetail';
import CommunityNewPage from './pages/CommunityNewPage';
import MatchingDetailPage from './pages/MatchingDetailPage';
import PrivateRoute from './config/PrivateRoute';
import NotFoundPage from './pages/NotFoundPage';
import GlobalComponents from './config/GlobalComponents';
import CommunityEditPage from './pages/CommunityEditPage';
import AdminDetailPage from './pages/AdminDetailPage';

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

          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/:id" element={<AdminDetailPage />} />
          <Route path="/admin/community" element={<AdminGeneral />} />
          <Route path="/admin/community/:id" element={<AdminGeneralDetail />} />
          <Route path="/admin/challenge" element={<AdminChallenge />} />
          <Route path="/admin/challenge/new" element={<AdminChallengeNew />} />
          <Route path="/admin/challenge/:id" element={<AdminChallengeDetail />} />
          <Route path="/admin/challenge/verified" element={<AdminChallengeVerified />} />
          <Route path="/admin/challenge/verified/:id" element={<AdminChallengeVerifiedDetail />} />
          <Route path="/admin/tip" element={<AdminTip />} />
          <Route path="/admin/tip/:id" element={<AdminTipDetail />} />

          {/* 인증 필요 페이지 */}
          <Route element={<PrivateRoute isNeedAuth={true} />}>
            <Route path="/community/new" element={<CommunityNewPage />} />
            <Route path="/community/edit/:id" element={<CommunityEditPage />} />
            <Route path="/my" element={<MyPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
