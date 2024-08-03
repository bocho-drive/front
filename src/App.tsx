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
import AdminDetail from './pages/AdminDetailPage';
import AdminChallengeNew from './pages/AdminChallengeNew';
import AdminChallengeDetail from './pages/AdminChallengeDetail';
import AdminTipDetail from './pages/AdminTipDetail';
import AdminChallengeVerifiedDetail from './pages/AdminChallengeVerifiedDetail';
import CommunityNewPage from './pages/CommunityNewPage';
import MatchingDetailPage from './pages/MatchingDetailPage';
import PrivateRoute from './config/PrivateRoute';
import NotFoundPage from './pages/NotFoundPage';
import GlobalComponents from './config/GlobalComponents';
import CommunityEditPage from './pages/CommunityEditPage';
import ChallengeVerifiesDetailPage from './pages/ChallengeVerifiesDetailPage';
import ChallengeVerifiesNewPage from './pages/ChallengeVerifiesNewPage';

export const URLS = {
  LANDING: '/',
  COMMUNITY: '/community',
  DRIVE: '/drive',
  CHALLENGE: '/challenge',
  CHALLENGE_VERIFIES: '/challenge_verifies',
  TIP: '/tip',
  VIDEO: '/video',
  MY: '/my',
  MATCHING: '/matching',
  ADMIN: '/admin',
  ADMIN_LOGIN: '/adminlogin',
  ADMIN_CHALLENGE_NEW: '/admin/challenge/new',
  ADMIN_CHALLENGE_DETAIL: '/admin/challenge/detail',
  ADMIN_CHALLENGE_VERIFIED_DETAIL: '/admin/challenge/verified',
  ADMIN_TIP_DETAIL: '/admin/tip/detail',
  COMMUNITY_NEW: '/community/new',
} as const;

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <GlobalComponents />
        <Routes>
          <Route path={URLS.LANDING} element={<LandingPage />} />
          <Route path={URLS.COMMUNITY} element={<CommunityPage />} />
          <Route path={`${URLS.COMMUNITY}/:id`} element={<CommunityDetailPage />} />

          <Route path={URLS.DRIVE} element={<DrivePage />} />

          <Route path={URLS.CHALLENGE} element={<ChallengePage />} />

          <Route path={URLS.MATCHING} element={<MatchingPage />} />
          <Route path={`${URLS.MATCHING}/:id`} element={<MatchingDetailPage />} />

          <Route path={URLS.TIP} element={<TipPage />} />
          <Route path={`${URLS.TIP}/:id`} element={<TipDetailPage />} />

          <Route path={URLS.VIDEO} element={<VideoPage />} />

          {/* 어드민 */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin/detail/:id" element={<AdminDetail />} />
          <Route path="/admin/challenge/new" element={<AdminChallengeNew />} />
          <Route path="/admin/challenge/detail" element={<AdminChallengeDetail />} />
          <Route path="/admin/challenge/verified" element={<AdminChallengeVerifiedDetail />} />
          <Route path="/admin/tip/detail" element={<AdminTipDetail />} />

          {/* 인증 필요 페이지 */}
          <Route element={<PrivateRoute isNeedAuth={true} />}>
            <Route path={`${URLS.COMMUNITY}/new`} element={<CommunityNewPage />} />
            <Route path={`${URLS.COMMUNITY}/edit/:id`} element={<CommunityEditPage />} />

            {/* 챌린지 인증 상세 페이지 */}
            <Route path={`${URLS.CHALLENGE_VERIFIES}/:id`} element={<ChallengeVerifiesDetailPage />} />
            <Route path={`${URLS.CHALLENGE_VERIFIES}/new/:challengeId`} element={<ChallengeVerifiesNewPage />} />

            <Route path={URLS.MY} element={<MyPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
