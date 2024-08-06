import * as S from '@/styles/index.style';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate();
  const { search } = useLocation();

  const handleToHome = () => navigate('/' + search);
  const handleToAdmin = () => navigate('/admin' + search);
  const handleToAdminDetail = () => navigate('/admin/detail' + search);
  const handleToTipDetail = () => navigate('/admin/tip/detail' + search);
  const handleToChallengeDetail = () => navigate('/admin/challenge/detail' + search);
  const handleToChallengeVerifiedDetail = () => navigate('/admin/challenge/verified' + search);

  return (
    <S.div.SidebarContainer>
      <S.div.Column $gap={20} $align="center">
        <img src="/icon.png" alt="logo" width="70" onClick={handleToHome} style={{ cursor: 'pointer' }}/>
        <S.h.H2 onClick={handleToAdmin} style={{ cursor: 'pointer' }}>보초운전</S.h.H2>
        <S.div.Gap $height={20}></S.div.Gap>
        <S.h.H4 onClick={handleToAdminDetail} style={{ cursor: 'pointer' }}>커뮤니티</S.h.H4>
        <S.h.H4 onClick={handleToTipDetail} style={{ cursor: 'pointer' }}>팁</S.h.H4>
        <S.h.H4 onClick={handleToChallengeDetail} style={{ cursor: 'pointer' }}>챌린지</S.h.H4>
        <S.h.H4 onClick={handleToChallengeVerifiedDetail} style={{ cursor: 'pointer' }}>챌린지 인증</S.h.H4>
      </S.div.Column>
    </S.div.SidebarContainer>
  );
};

export default Sidebar;