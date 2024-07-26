import * as S from '@/styles/index.style';
import ThumbUpIcon from '@/assets/icons/thumb_up.svg?react';
import CommentIcon from '@/assets/icons/comment.svg?react';
import Modal from '../templates/Modal/Modal';
import KakaoShareButton from '../atoms/KakaoShareButton';
import { getModalShareUrl } from '@/util/util';

interface Props {
  imgSrc?: string;
  id: number;
}

const VideoModal = (props: Props) => {
  const { id, imgSrc = 'https://via.placeholder.com/300x400' } = props;

  return (
    <Modal type="video" id={id}>
      <S.div.FixedModal style={{ padding: '20px' }}>
        <S.div.Column $gap={20}>
          <S.div.Row $align="center" $gap={10}>
            <S.div.Avatar />
            <S.div.Column>
              <S.h.H3>작성자</S.h.H3>
              <S.p.P>2021.08.01</S.p.P>
            </S.div.Column>
          </S.div.Row>
          <S.h.H2 $maxLines={2}>영상 제목</S.h.H2>
          <img src={imgSrc} />
          <S.div.Row $between>
            <S.div.Row $gap={20}>
              <S.div.Row $gap={5} $align="center">
                <ThumbUpIcon />
                <S.p.P>10</S.p.P>
              </S.div.Row>
              <S.div.Row $gap={5} $align="center">
                <CommentIcon />
                <S.p.P>10</S.p.P>
              </S.div.Row>
            </S.div.Row>

            <KakaoShareButton title="영상 제목1" displayIcon url={getModalShareUrl('video', id)} />
          </S.div.Row>
        </S.div.Column>
      </S.div.FixedModal>
    </Modal>
  );
};

export default VideoModal;
