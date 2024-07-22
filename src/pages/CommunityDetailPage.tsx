import { useParams } from 'react-router-dom';
import * as S from '@/styles/index.style';
import CommunityLayout from '@/components/templates/CommunityLayout';
import CommentForm from '@/components/molecules/CommentForm';
import Comment from '@/components/molecules/Comment';

const CommunityDetailPage = () => {
  const { id } = useParams();
  console.log({ id });

  return (
    <CommunityLayout
      main={
        <S.div.Column $gap={20}>
          <S.div.Row $gap={10} $align="center">
            <S.div.Avatar />
            <S.h.H5>작성자</S.h.H5>
          </S.div.Row>
          <S.div.Row $between>
            <S.p.P>2024년 7월 20일 오후 2:20</S.p.P>
            <S.div.Row $gap={10}>
              <S.p.P>댓글 1</S.p.P>
              <S.p.P>추천 10</S.p.P>
              <S.p.P>조회 100</S.p.P>
            </S.div.Row>
          </S.div.Row>
          <S.hr.Hr />

          <S.span.Span>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </S.span.Span>

          <S.div.Gap $height={20} />

          <S.div.Row $gap={10} $justify="center">
            <S.button.Button>공유하기</S.button.Button>
            <S.button.Button>글 추천</S.button.Button>
          </S.div.Row>

          <S.div.Gap $height={20} />

          <S.div.Row $gap={10} $justify="flex-start">
            <S.button.Button>이전글</S.button.Button>
            <S.button.Button>다음글</S.button.Button>
            <S.button.Button>목록으로</S.button.Button>
          </S.div.Row>

          <S.hr.Hr />

          <S.div.Gap $height={10} />

          <S.h.H3>댓글</S.h.H3>
          <CommentForm />

          <Comment />
        </S.div.Column>
      }
    />
  );
};

export default CommunityDetailPage;
