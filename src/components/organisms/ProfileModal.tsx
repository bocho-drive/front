import Modal from '../templates/Modal/Modal';
import * as S from '@/styles/index.style';

const ProfileModal = () => {
  return (
    <Modal>
      <S.div.FixedModal $width={400}>
        <S.div.Column $gap={20} $padding={30} $align="center">
          <S.div.Avatar $size="large" />

          <S.input.Input $size="large" $fullWidth placeholder="이름" />
          <S.input.Input $size="large" $fullWidth placeholder="이메일" />
          <S.input.Input $size="large" $fullWidth placeholder="비밀번호" />
          <S.input.Input $size="large" $fullWidth placeholder="비밀번호확인" />
          <S.button.Button $colors="primary" $fullWidth>
            저장
          </S.button.Button>
        </S.div.Column>
      </S.div.FixedModal>
    </Modal>
  );
};

export default ProfileModal;
