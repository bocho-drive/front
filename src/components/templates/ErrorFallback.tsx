import { ErrorResponse } from '@/config/axios';
import * as S from '@/styles/index.style';

interface Props {
  error: ErrorResponse<unknown>;
  resetErrorBoundary: () => void;
}

const ErrorFallbackUI = ({ error, resetErrorBoundary }: Props) => {
  return (
    <S.div.Column $gap={20}>
      <S.h.H1>{error.msg}</S.h.H1>
      <S.a.Link to="/" $outline>
        Go to Home
      </S.a.Link>
      <S.button.Button $colors="warning" onClick={resetErrorBoundary}>
        다시 시도하기
      </S.button.Button>
    </S.div.Column>
  );
};

export default ErrorFallbackUI;
