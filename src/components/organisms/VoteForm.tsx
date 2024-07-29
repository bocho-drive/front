import * as S from '@/styles/index.style';

const VoteForm = () => {
  return (
    <S.div.Card>
      <S.div.Column $gap={20}>
        <div>
          <S.h.H3>투표</S.h.H3>
          <S.p.P>12명 참여</S.p.P>
        </div>

        <form>
          <S.div.Column $align="flex-start" $gap={10}>
            <S.div.Row $gap={10} $width={100}>
              <S.input.Radio id="vote-y" type="radio" name="vote" />
              <S.label.LabelCard htmlFor="vote-y">찬성</S.label.LabelCard>
            </S.div.Row>

            <S.div.Row $gap={10} $width={100}>
              <S.input.Radio id="vote-n" type="radio" name="vote" />
              <S.label.LabelCard htmlFor="vote-n">반대</S.label.LabelCard>
            </S.div.Row>
            <S.div.Row $gap={10} $width={100} $justify="flex-end">
              <S.button.Button type="reset">선택취소</S.button.Button>
              <S.button.Button type="submit">투표하기</S.button.Button>
            </S.div.Row>
          </S.div.Column>
        </form>
      </S.div.Column>
    </S.div.Card>
  );
};

export default VoteForm;
