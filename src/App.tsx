import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CommunityPage from './pages/CommunityPage';
import CommunityDetailPage from './pages/CommunityDetailPage';
import DrivePage from './pages/DrivePage';
import ChallengePage from './pages/ChallengePage';
import TipPage from './pages/TipPage';
import TipDetailPage from './pages/TipDetailPage';
import AdminPage from './pages/AdminPage';
import VideoPage from './pages/VideoPage';
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/:id" element={<CommunityDetailPage />} />
        <Route path="/drive" element={<DrivePage />} />
        <Route path="/challenge" element={<ChallengePage />} />
        <Route path="/tip" element={<TipPage />} />
        <Route path="/tip/:id" element={<TipDetailPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
