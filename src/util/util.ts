import { ModalType } from '@/components/templates/Modal/useModal';

/** 카카오톡 공유하기용, modal url 만들기 */
export const getModalShareUrl = (type: ModalType, id: number) => {
  let { origin } = window.location;

  origin += '/' + type;

  const url = new URL(origin);
  url.searchParams.append('modalId', id.toString());
  url.searchParams.append('modalType', type);

  return url.href;
};

/**
 * date string => 오늘 오후 2시 30분 or 어제 오후 2시 30분 or 2021-01-01 오후 2시 30분
 * 현재 시간과 비교해서 오늘인지 어제인지 표시하고, 그 외에는 날짜만 표시
 */
export const getDateString = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();

  const isToday = date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth() && date.getDate() === now.getDate();
  const isYesterday = date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth() && date.getDate() === now.getDate() - 1;

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const hour = hours > 12 ? hours - 12 : hours;
  const ampm = hours >= 12 ? '오후' : '오전';

  if (isToday) {
    return `오늘 ${ampm} ${hour}시 ${minutes}분`;
  } else if (isYesterday) {
    return `어제 ${ampm} ${hour}시 ${minutes}분`;
  } else {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${ampm} ${hour}시 ${minutes}분`;
  }
};
