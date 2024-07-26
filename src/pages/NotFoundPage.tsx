import HeaderFooterLayout from '@/components/templates/HeaderFooterLayout';
import * as S from '@/styles/index.style';

const NotFoundPage = () => {
  return (
    <HeaderFooterLayout>
      <S.div.Column $gap={30} $align="center">
        <img src="/not-found.png" alt="404" width={300} />
        <S.h.H1>존재하지 않는 페이지 입니다.</S.h.H1>
        <S.a.Link to="/">홈으로 돌아가기</S.a.Link>
      </S.div.Column>
    </HeaderFooterLayout>
  );
};

export default NotFoundPage;
