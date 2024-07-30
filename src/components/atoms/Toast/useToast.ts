import { toast } from 'react-toastify';

/**
 * @see https://fkhadra.github.io/react-toastify/positioning-toast
 */

export const defaultToast = (message: string) =>
  toast(message, {
    position: 'top-center',
  });
export const successToast = (message: string) =>
  toast.success(message, {
    position: 'bottom-right',
    autoClose: 1000,
  });

export const errorToast = (message: string) =>
  toast.error(message, {
    position: 'top-center',
    autoClose: 1000,
  });

export const logoutToast = () => successToast('로그아웃 되었습니다.');
export const loginToast = () => successToast('로그인 되었습니다.');

export const needLoginToast = () => errorToast('로그인이 필요합니다.');
