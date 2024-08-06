import ReactDOM from 'react-dom';

import * as S from '@/styles/index.style';
import Loading from '@/components/atoms/Loading';
import { useLoadingModal } from './useLoadingModal';

const docId = 'modal-target';

const LoadingModal = () => {
  const modalRoot = document.getElementById(docId) as HTMLElement;
  const isLoading = useLoadingModal((state) => state.isLoading);

  return (
    isLoading &&
    ReactDOM.createPortal(
      <S.div.Overlay>
        <S.div.FixedModal style={{ backgroundColor: 'transparent' }}>
          <Loading />
        </S.div.FixedModal>
      </S.div.Overlay>,
      modalRoot
    )
  );
};

export default LoadingModal;
