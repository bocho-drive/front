import * as S from '@/styles/index.style';

interface Props {
  text: string;
}
const LineText = ({ text }: Props) => {
  return (
    <S.div.Row $align="center">
      <S.hr.Hr />
      <S.h.H5 style={{ margin: '0 10px' }}>{text}</S.h.H5>
      <S.hr.Hr />
    </S.div.Row>
  );
};

export default LineText;
