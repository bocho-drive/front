import * as S from '@/styles/index.style';
import KakaoShareButton from '../../../components/atoms/KakaoShareButton';
import { getModalShareUrl, getYoutubeId } from '@/util/util';
import { Video } from '../type';
import { useAuth } from '@/@features/Auth/useAuth';
import { useVideoQuery } from '../useVideoQuery';
import Loading from '@/components/atoms/Loading';

interface Props {
  video: Video;
}

const VideoInfoModal = ({ video }: Props) => {
  const userId = useAuth((state) => state.userId);

  const { data } = useVideoQuery(video.id);

  return (
    <S.div.FixedModal style={{ padding: '20px' }} $width={500}>
      {data === undefined && <Loading />}
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
          <S.div.Row $justify="center">
            <KakaoShareButton title={data.title} displayIcon url={getModalShareUrl('video', data.id)} />
            {data.userId == userId && <S.button.Button $colors="warning">삭제하기</S.button.Button>}
          </S.div.Row>
        </S.div.Column>
      )}
    </S.div.FixedModal>
  );
};

export default VideoInfoModal;
