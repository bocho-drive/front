import * as S from '@/styles/index.style';

import { getModalShareUrl } from '@/util/util';
import { URLS } from '@/App';
import { useNavigate } from 'react-router-dom';
import Modal from '@/components/templates/Modal/Modal';
import KakaoShareButton from '@/components/atoms/KakaoShareButton';
import { useAuthStore } from '@/@features/Auth/useAuthStore';
import { useChallengeQuery } from '../useChallengeQuery';

interface Props {
  challengeId: number;
  modalId: number;
}

const ChallengeModal = ({ challengeId, modalId }: Props) => {
  const confirmAuth = useAuthStore((state) => state.confirmAuth);
  const navigate = useNavigate();

  const handleToNewVerify = () => {
    if (confirmAuth()) {
      navigate(`${URLS.CHALLENGE_VERIFIES}/new/${challengeId}`);
    }
  };

  const { data, isLoading } = useChallengeQuery(challengeId);
  if (isLoading) return null;
  return (
    data && (
      <Modal type="challenge" id={modalId}>
        <S.div.FixedModal $width={500}>
          <S.div.Card>
            <S.div.Column $justify="center" $align="center" $gap={10}>
              <S.div.Gap $height={10} />
              <S.h.H1>{data.title}</S.h.H1>
              <S.p.P>{data.content}</S.p.P>

              <S.button.Button onClick={handleToNewVerify}>인증하기</S.button.Button>
              <KakaoShareButton title={data.title} displayIcon={true} url={getModalShareUrl('challenge', Number(challengeId))} />
            </S.div.Column>
          </S.div.Card>
        </S.div.FixedModal>
      </Modal>
    )
  );
};

export default ChallengeModal;
