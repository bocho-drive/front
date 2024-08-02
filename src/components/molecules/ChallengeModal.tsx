import * as S from '@/styles/index.style';
import Modal from '../templates/Modal/Modal';
import KakaoShareButton from '../atoms/KakaoShareButton';

import { getModalShareUrl } from '@/util/util';
import { Challenge } from '@/@features/Challenge/type';

interface Props {
  challenge: Challenge;
}

const ChallengeModal = ({ challenge }: Props) => {
  return (
    <Modal type="challenge" id={Number(challenge.id)}>
      <S.div.FixedModal $width={500}>
        <S.div.Card>
          <S.div.Column $justify="center" $align="center" $gap={10}>
            <S.div.Gap $height={10} />
            <S.h.H1>{challenge.title}</S.h.H1>
            <S.p.P>{challenge.content}</S.p.P>

            {status === 'NOT_STARTED' && <S.button.Button>도전하기</S.button.Button>}
            {status === 'CHALLENGING' && <S.button.Button>인증하기</S.button.Button>}
            {status === 'CLEAR' && <S.button.Button>내 인증글 보기</S.button.Button>}
            <KakaoShareButton title={challenge.title} displayIcon={true} url={getModalShareUrl('challenge', Number(challenge.id))} />
          </S.div.Column>
        </S.div.Card>
      </S.div.FixedModal>
    </Modal>
  );
};

export default ChallengeModal;
