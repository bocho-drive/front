import { ModalType } from '@/components/templates/Modal/useModal';

export const getModalShareUrl = (type: ModalType, id: number) => {
  let { origin } = window.location;

  origin += '/' + type;

  const url = new URL(origin);
  url.searchParams.append('modalId', id.toString());
  url.searchParams.append('modalType', type);

  return url.href;
};
