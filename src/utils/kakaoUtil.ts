import { validationUri } from './validationUtil';
import { ModalType } from '@/components/templates/Modal/useModal';

interface KakaoProps {
  url: string;
  title: string;
  imageUrl?: string;
  description?: string;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export const shareKakao = ({ url, title, imageUrl = '', description = '' }: KakaoProps) => {
  if (validationUri(url) === false) throw new Error('url is not valid');

  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(import.meta.env.VITE_SHARE_KAKAO_LINK_KEY);
    }

    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    });
  }
};

/** 카카오톡 공유하기용, modal url 만들기 */
export const getModalShareUrl = (type: ModalType, id: number) => {
  let { origin } = window.location;

  origin += '/' + type;

  const url = new URL(origin);
  url.searchParams.append('modalId', id.toString());
  url.searchParams.append('modalType', type);

  return url.href;
};
