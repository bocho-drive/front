import Modal from '../templates/Modal/Modal';
import * as S from '@/styles/index.style';

/** 미사용 : API 구현 필요 */
const ProfileModal = () => {
  return (
    <Modal type="profile" id={0}>
      <S.div.FixedModal $width={500}>
        <S.div.Card>
          <S.div.Column $gap={20} $align="center">
            <S.div.Avatar $size="large" />

            <S.input.Input $size="large" $fullWidth placeholder="이름" />
            <S.input.Input $size="large" $fullWidth placeholder="이메일" />
            <S.input.Input $size="large" $fullWidth placeholder="비밀번호" />
            <S.input.Input $size="large" $fullWidth placeholder="비밀번호확인" />
            <S.button.Button $colors="primary" $fullWidth>
              저장
            </S.button.Button>
          </S.div.Column>
        </S.div.Card>
      </S.div.FixedModal>
    </Modal>
  );
};

export default ProfileModal;
