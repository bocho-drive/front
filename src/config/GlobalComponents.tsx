import Toast from '@/components/atoms/Toast/Toast';
import LoadingModal from '@/components/templates/LoadingModal/LoadingModal';
import { Fragment } from 'react/jsx-runtime';

const GlobalComponents = () => {
  return (
    <Fragment>
      <Toast />
      <LoadingModal />
    </Fragment>
  );
};

export default GlobalComponents;
