import * as S from '@/styles/index.style';
import Modal from '../../../components/templates/Modal/Modal';
import KakaoShareButton from '../../../components/atoms/KakaoShareButton';
import { getModalShareUrl, getYoutubeId } from '@/util/util';
import { Video } from '../type';

interface Props {
  data: Video;
}

const VideoInfoModal = ({ data }: Props) => {
  return (
    <Modal type="video" id={data.id}>
      <S.div.FixedModal style={{ padding: '20px' }} $width={500}>
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
          </S.div.Row>
        </S.div.Column>
      </S.div.FixedModal>
    </Modal>
  );
};

export default VideoInfoModal;
