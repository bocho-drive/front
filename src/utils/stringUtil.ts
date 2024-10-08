import { Category } from '@/@features/Community/type';
import { URLS } from '@/App';

/**
 * date string => 오늘 오후 2시 30분 or 어제 오후 2시 30분 or 2021-01-01 오후 2시 30분
 * 현재 시간과 비교해서 오늘인지 어제인지 표시하고, 그 외에는 날짜만 표시
 */
export const getDateString = (dateString: string): string => {
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

/** 유튜브 썸네일 url */
export const getYoutubeThumbnailUrl = (url: string): string => {
  const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return videoIdMatch ? `https://img.youtube.com/vi/${videoIdMatch[1]}/hqdefault.jpg` : 'https://via.placeholder.com/300';
};

/** 유튜브 ID 추출 */
export const getYoutubeId = (url: string): string => {
  const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return videoIdMatch ? videoIdMatch[1] : '';
};

/** 오후/오전 00:00 */
export const getAmPmTime = (date: Date | string): string => {
  if (typeof date === 'string') date = new Date(date);
  if (date instanceof Date === false) return '';
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const hour = hours > 12 ? hours - 12 : hours;
  const ampm = hours >= 12 ? '오후' : '오전';

  return `${ampm} ${hour}:${minutes}`;
};

/** 커뮤니티 카테고리와 ID값을 받아, 화면 URL생성 */
export const getCommunityLink = (category: Category, id?: number): string => {
  let link = '';
  switch (category) {
    case 'GENERAL':
    case 'VOTE':
      link = URLS.COMMUNITY;
      break;
    case 'TIP':
      link = URLS.TIP;
      break;
    case 'CHALLENGE_VERIFY':
      link = URLS.CHALLENGE_VERIFIES;
      break;
  }

  return id ? `${link}/${id}` : link;
};
