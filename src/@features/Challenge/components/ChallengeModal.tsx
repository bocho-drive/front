import * as S from '@/styles/index.style';

import { getModalShareUrl } from '@/util/util';
import { Challenge } from '@/@features/Challenge/type';
import { URLS } from '@/App';
import { useNavigate } from 'react-router-dom';
import Modal from '@/components/templates/Modal/Modal';
import KakaoShareButton from '@/components/atoms/KakaoShareButton';
import { useAuthStore } from '@/@features/Auth/useAuthStore';

interface Props {
  challenge: Challenge;
}

const ChallengeModal = ({ challenge }: Props) => {
  const confirmAuth = useAuthStore((state) => state.confirmAuth);
  const navigate = useNavigate();

  const handleToNewVerify = () => {
    if (confirmAuth()) {
      navigate(`${URLS.CHALLENGE_VERIFIES}/new/${challenge.id}`);
    }
  };
  return (
    <Modal type="challenge" id={Number(challenge.id)}>
      <S.div.FixedModal $width={500}>
        <S.div.Card>
          <S.div.Column $justify="center" $align="center" $gap={10}>
            <S.div.Gap $height={10} />
            <S.h.H1>{challenge.title}</S.h.H1>
            <S.p.P>{challenge.content}</S.p.P>

            <S.button.Button onClick={handleToNewVerify}>인증하기</S.button.Button>
            <KakaoShareButton title={challenge.title} displayIcon={true} url={getModalShareUrl('challenge', Number(challenge.id))} />
          </S.div.Column>
        </S.div.Card>
      </S.div.FixedModal>
    </Modal>
  );
};

export default ChallengeModal;
