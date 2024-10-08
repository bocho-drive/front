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
import MatchingPage from './pages/MatchingPage';
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
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
import PrivateRoute from './routes/PrivateRoute';
import NotFoundPage from './pages/NotFoundPage';
import GlobalComponents from './config/GlobalComponents';
import CommunityEditPage from './pages/CommunityEditPage';
import AdminDetailPage from './pages/AdminDetailPage';
import ChallengeVerifiesDetailPage from './pages/ChallengeVerifiesDetailPage';
import ChallengeVerifiesNewPage from './pages/ChallengeVerifiesNewPage';
import TipNewPage from './pages/TipNewPage';
import TipEditPage from './pages/TipEditPage';
import Provider from './config/Provider';
import ChallengeVerifiesEditPage from './pages/ChallengeVerifiesEditPage';
import MatchingNewPage from './pages/MatchingNewPage';
import MatchingEditPage from './pages/MatchingEditPage';
import OauthRedirectPage from './pages/OauthRedirectPage';
import AdminRoute from './routes/AdminRoute';

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

          <Route path="/oauth/redirect" element={<OauthRedirectPage />} />

          {/* 어드민 */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister />} />

          {/* 인증 필요 페이지 */}
          <Route element={<PrivateRoute isNeedAuth={true} />}>
            {/* 어드민 */}
            <Route element={<AdminRoute />}>
              <Route path="/admin" element={<AdminGeneral />} />
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
            </Route>

            <Route path={`${URLS.COMMUNITY}/new`} element={<CommunityNewPage />} />
            <Route path={`${URLS.COMMUNITY}/edit/:id`} element={<CommunityEditPage />} />

            <Route path={`${URLS.TIP}/new`} element={<TipNewPage />} />
            <Route path={`${URLS.TIP}/edit/:id`} element={<TipEditPage />} />

            {/* 챌린지 인증 상세 페이지 */}
            <Route path={`${URLS.CHALLENGE_VERIFIES}/:id`} element={<ChallengeVerifiesDetailPage />} />
            <Route path={`${URLS.CHALLENGE_VERIFIES}/edit/:id`} element={<ChallengeVerifiesEditPage />} />
            <Route path={`${URLS.CHALLENGE_VERIFIES}/new/:challengeId`} element={<ChallengeVerifiesNewPage />} />

            <Route path={`${URLS.MATCHING}/new`} element={<MatchingNewPage />} />
            <Route path={`${URLS.MATCHING}/edit/:id`} element={<MatchingEditPage />} />

            <Route path={URLS.MY} element={<MyPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
