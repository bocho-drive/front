import { validationUri } from './validation';

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
      kakao.init(import.meta.env.VITE_SHARE_KAKAO_LINK_KEY); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }

    kakao.Link.sendDefault({
      objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title, // 제목
        description,
        imageUrl, // 이미지 url
        link: {
          mobileWebUrl: url, // 인자값으로 받은 url(uri 형태)
          webUrl: url,
        },
      },
      //   buttons: [
      //     {
      //       title: 'title',
      //       link: {
      //         mobileWebUrl: url,
      //         webUrl: url,
      //       },
      //     },
      //   ],
    });
  }
};
