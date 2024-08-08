import KakaoShareButton from '@/components/atoms/KakaoShareButton';
import Loading from '@/components/atoms/Loading';
import { useModal } from '@/components/templates/Modal/useModal';
import * as S from '@/styles/index.style';
import { getModalShareUrl, getYoutubeId } from '@/util/util';
import { Video } from '../type';
import { useVideoDeleteMutation, useVideoQuery } from '../useVideoQuery';
import { useAuthStore } from '@/@features/Auth/useAuthStore';

interface Props {
  video: Video;
}

const VideoInfoModal = ({ video }: Props) => {
  const userId = useAuthStore((state) => state.userInfo?.userId);
  const handleClose = useModal((state) => state.handleClose);

  const { data, isLoading } = useVideoQuery(video.id);
  const deleteMutation = useVideoDeleteMutation();

  const handleDelete = () => {
    deleteMutation.mutate(video.id, { onSuccess: () => handleClose() });
  };

  return (
    <S.div.FixedModal style={{ padding: '20px' }} $width={500}>
      {isLoading && <Loading />}
      {data && (
        <S.div.Column $gap={20}>
          <S.h.H2 $maxLines={2}>{data.title}</S.h.H2>
          <iframe
            src={`https://www.youtube.com/embed/${getYoutubeId(data.url)}`}
            title={data.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ height: '300px', width: '100%' }}
          ></iframe>
          <S.small.Small>작성자 : {data.nickName}</S.small.Small>
          <S.div.Row $justify="center" $gap={20}>
            <KakaoShareButton title={data.title} displayIcon url={getModalShareUrl('video', data.id)} />
            {data.userId == userId && (
              <S.button.Button $colors="warning" onClick={handleDelete}>
                삭제하기
              </S.button.Button>
            )}
          </S.div.Row>
        </S.div.Column>
      )}
    </S.div.FixedModal>
  );
};

export default VideoInfoModal;
