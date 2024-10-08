import * as S from '@/styles/index.style';

import { errorToast, successToast } from '@/components/atoms/Toast/useToast';
import Modal from '@/components/templates/Modal/Modal';
import { useModal } from '@/components/templates/Modal/useModal';
import { FormEvent, useRef } from 'react';
import { useVideoPostMutation } from '../useVideoQuery';
import { useAuthStore } from '@/@features/Auth/useAuthStore';

const VideoNewModal = () => {
  const userId = useAuthStore((state) => state.userInfo?.userId);
  const handleClose = useModal((state) => state.handleClose);

  const postMutation = useVideoPostMutation();

  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  const handleNewVideo = (e: FormEvent) => {
    e.preventDefault();

    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    if (!title || !link) {
      errorToast('제목과 링크를 입력해주세요');
      return;
    }

    if (userId === undefined) return;

    postMutation.mutate(
      { title, url: link, userId },
      {
        onSuccess: () => {
          successToast('영상이 등록되었습니다');
          handleClose();
        },
      }
    );
  };
  return (
    <Modal type="video" id={0}>
      <S.div.FixedModal style={{ padding: '20px' }} $width={400}>
        <form onSubmit={handleNewVideo}>
          <S.div.Column $gap={20}>
            <S.div.Column>
              <S.label.Label>영상 제목</S.label.Label>
              <S.input.Input $size="medium" ref={titleRef} />
            </S.div.Column>

            <S.div.Column>
              <S.label.Label>영상 링크</S.label.Label>
              <S.input.Input $size="medium" ref={linkRef} />
            </S.div.Column>
            <S.button.Button type="submit">등록</S.button.Button>
          </S.div.Column>
        </form>
      </S.div.FixedModal>
    </Modal>
  );
};

export default VideoNewModal;
