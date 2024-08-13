import { useAuthStore } from '@/@features/Auth/useAuthStore';
import { CommunityDetailRes } from '@/@features/Community/type';
import ToastViewer from '@/components/atoms/ToastViewer';
import * as S from '@/styles/index.style';
import { getDateString } from '@/util/util';
import { ReactNode } from 'react';

interface Props {
  data: CommunityDetailRes;
  authorActionComp?: ReactNode;
}

const AdminCommunityDetail = ({ data, authorActionComp }: Props) => {
  const isLogin = useAuthStore((state) => state.isLogin());
  return (
    <S.div.Column $gap={20}>
      <S.div.Row $between>
        <S.div.Row $gap={10}>{isLogin && data.isAuthor && authorActionComp}</S.div.Row>
      </S.div.Row>
      <S.h.H1>{data.title}</S.h.H1>

      <S.div.Row $gap={10} $align="center">
        <S.h.H5>{data.author}</S.h.H5>
      </S.div.Row>
      <S.div.Row $between>
        <S.small.Small>{getDateString(data.createdAt)}</S.small.Small>
        <S.div.Row $gap={10}>
          <S.p.P>추천 {data.likeCount}</S.p.P>
          <S.p.P>조회 {data.viewCount}</S.p.P>
        </S.div.Row>
      </S.div.Row>
      <S.hr.Hr />

      <ToastViewer initialValue={data.content} />

      <S.div.Row $gap={10} $wrap>
        {data.imgUrls.map((url, idx) => (
          <S.img.Img key={idx} src={url} width={100} />
        ))}
      </S.div.Row>
    </S.div.Column>
  );
};

export default AdminCommunityDetail;
