import ImageS3Button from '@/@features/Community/ImageS3/components/ImageS3Button';
import { useCommunityPutMutation, useCommunityQuery } from '@/@features/Community/useCommunityQuery';
import Loading from '@/components/atoms/Loading';
import CommunityForm, { PostReturnType } from '@/components/organisms/Community/CommunityForm';
import CommunityLayout from '@/components/templates/CommunityLayout/CommunityLayout';
import * as S from '@/styles/index.style';
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CommunityEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const communityId = Number(id);

  const isVoteRef = useRef<HTMLInputElement>(null);

  const { data, isLoading, refetch } = useCommunityQuery(communityId);
  const putMutation = useCommunityPutMutation(communityId);

  const handlePutCommunity = (data: PostReturnType) => {
    const category = isVoteRef.current?.checked ? 'VOTE' : 'GENERAL';

    putMutation.mutate(
      {
        content: data.content,
        title: data.title,
        image: data.image,
        category,
      },
      {
        onSuccess: () => navigate(`/community/${communityId}`),
      }
    );
  };

  return (
    <CommunityLayout>
      {isLoading && <Loading />}
      {data && (
        <S.div.Column $gap={20}>
          <S.div.Card style={{ width: 'fit-content' }}>
            <S.input.Checkbox id="isVote" type="checkbox" ref={isVoteRef} defaultChecked={data.category === 'VOTE'} />
            <S.label.Label htmlFor="isVote">투표 게시글로 만들기</S.label.Label>
          </S.div.Card>
          <CommunityForm handlePost={handlePutCommunity} defaultValues={data} />

          <S.div.Row $gap={10} $wrap>
            {data.imgUrls.map((url) => (
              <ImageS3Button key={url} url={url} refetchFn={refetch} />
            ))}
          </S.div.Row>
        </S.div.Column>
      )}
    </CommunityLayout>
  );
};

export default CommunityEditPage;
