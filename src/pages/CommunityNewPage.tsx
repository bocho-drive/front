import ToastEditor from '@/components/atoms/ToastEditor';
import CommunityLayout from '@/components/templates/CommunityLayout';
import * as S from '@/styles/index.style';

const CommunityNewPage = () => {
  return (
    <CommunityLayout>
      <S.div.Column $gap={20}>
        <S.input.Input $size="large" placeholder="제목을 입력해주세요." />
        <ToastEditor />
        <S.button.Button $size="large">등록</S.button.Button>
      </S.div.Column>
    </CommunityLayout>
  );
};

export default CommunityNewPage;
