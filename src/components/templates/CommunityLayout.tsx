import * as S from '@/styles/index.style';
import HeaderFooterLayout from './HeaderFooterLayout';
import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/@features/Auth/useAuth';

interface CommunityProps {
  children: ReactNode;
}

const CommunityLayout = ({ children }: CommunityProps) => {
  const confirmAuth = useAuth((state) => state.confirmAuth);
  const navigate = useNavigate();
  const { search } = useLocation();

  const tab = new URLSearchParams(search).get('tab');

  const handleNavigate = (tab: 'newest' | 'popluar' | 'vote') => {
    navigate(`/community?tab=${tab}`);
  };

  const redirectToNewPage = () => {
    if (confirmAuth()) {
      navigate('/community/new');
    }
  };

  return (
    <HeaderFooterLayout>
      <S.div.Row $gap={50} $width={100}>
        <S.div.Column $width={80}>{children}</S.div.Column>

        <S.div.Column $width={20} $gap={10}>
          <S.button.Button $colors="primary" onClick={redirectToNewPage}>
            글쓰기
          </S.button.Button>

          <S.button.TabButton $direction="left" $active={tab === 'newest'} onClick={() => handleNavigate('newest')}>
            최신 게시글
          </S.button.TabButton>
          <S.button.TabButton $direction="left" $active={tab === 'popluar'} onClick={() => handleNavigate('popluar')}>
            인기 게시글
          </S.button.TabButton>
          <S.button.TabButton $direction="left" $active={tab === 'vote'} onClick={() => handleNavigate('vote')}>
            투표 게시글
          </S.button.TabButton>
        </S.div.Column>
      </S.div.Row>
    </HeaderFooterLayout>
  );
};

export default CommunityLayout;
