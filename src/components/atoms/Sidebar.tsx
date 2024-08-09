import * as S from '@/styles/index.style';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate();
  const { search } = useLocation();

  const handleToHome = () => navigate('/' + search);
  const handleToAdmin = () => navigate('/admin' + search);
  const handleToGeneral = () => navigate('/admin/community' + search);
  const handleToTip = () => navigate('/admin/tip' + search);
  const handleToChallenge = () => navigate('/admin/challenge' + search);
  const handleToChallengeVerified = () => navigate('/admin/challenge/verified' + search);

  return (
    <S.div.SidebarContainer>
      <S.div.Column $gap={20} $align="center">
        <img src="/icon.png" alt="logo" width="70" onClick={handleToHome} style={{ cursor: 'pointer' }}/>
        <S.h.H2 onClick={handleToAdmin} style={{ cursor: 'pointer' }}>보초운전</S.h.H2>
        <S.div.Gap $height={20}></S.div.Gap>
        <S.h.H4 onClick={handleToGeneral} style={{ cursor: 'pointer' }}>커뮤니티</S.h.H4>
        <S.h.H4 onClick={handleToTip} style={{ cursor: 'pointer' }}>팁</S.h.H4>
        <S.h.H4 onClick={handleToChallenge} style={{ cursor: 'pointer' }}>챌린지</S.h.H4>
        <S.h.H4 onClick={handleToChallengeVerified} style={{ cursor: 'pointer' }}>챌린지 인증</S.h.H4>
      </S.div.Column>
    </S.div.SidebarContainer>
  );
};

export default Sidebar;