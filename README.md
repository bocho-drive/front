# 🚗 보초 운전 🚕

> 운전을 잘하고 싶은 사람들을 위한 커뮤니티

> 이곳에서 더욱 깔끔하게 보실 수 있어요 >>> [서비스 소개 브로셔 보기 🔗](https://dolphin-pc.notion.site/8-13-21-be75fecc932b4a8b88d86d2b1835252c?pvs=4) <<<

## 📌 프로젝트 소개

- **Service Link : https://www.bocho.p-e.kr**
- **GitHub Link : https://github.com/bocho-drive**
- **Project Notion Link : https://www.notion.so/e4ebb89570f24cdab88acbaf40f86f81?pvs=21**
- 📆 프로젝트 기간 : 2024.07.19 ~ 2024.08.15

### 🚜 개발 팀원

<table>
  <tr>
    <td align="center"><a href="https://github.com/Dolphin-PC"><b>박찬영</b></a><br /></td>
    <td align="center"><a href="https://github.com/hyeon9808"><b>홍채현</b></a><br /></td>
    <td align="center"><a href="https://github.com/whtndls"><b>조수인</b></a><br /></td>
    <td align="center"><a href="https://github.com/young219257"><b>김영아</b></a><br /></td>
    <td align="center"><a href="https://github.com/hyoyeolking"><b>전효열</b></a><br /></td>
  </tr>
  <tr>
      <td align="center"><img src="https://github.com/user-attachments/assets/683f52f8-d8e4-4e9e-ac1f-a5ed7d4b032a" width="130px;" alt=""/><br /><sub></td>
      <td align="center"><img src="https://github.com/user-attachments/assets/a4aa44bc-4d59-46e7-8b74-b18d94a3186e" width="130px;" alt=""/><br /></td>
      <td align="center"><img src="https://github.com/user-attachments/assets/03eb0bf2-0ac1-4c7f-8f2d-06243c5be806" width="130px;" alt=""/><br /></td>
      <td align="center"><img src="https://github.com/user-attachments/assets/4bb46790-6183-44cc-b51b-270d36c71710" width="130px;" alt=""/><br /></td>
      <td align="center"><img src="https://github.com/user-attachments/assets/9ebc81f2-52ba-4b97-b6d3-07c4c21fe1f0" width="130px;" alt=""/><br /></td>
    </tr>
  <tr>
    <td align="center">FrondEnd/Leader</td>
    <td align="center">FrondEnd</td>
    <td align="center">BackEnd/Vice Leader</td>
    <td align="center">BackEnd</td>
    <td align="center">BackEnd</td>
  </tr>
</table>


## 🏆 기술적인 도전

<details>
  <summary>1. Spring Security OAuth + SNS 소셜로그인</summary>

- 간편한 로그인을 통해 서비스를 이용할 수 있도록 SNS서비스를 도입했습니다.
- SNS로그인을 통해 AT토큰과 RT토큰을 발급받아, 서비스 로그인을 처리합니다.
![image](https://github.com/user-attachments/assets/4470233e-b4ea-43a3-bfcb-7d8ae62027a2)
▶️ 자세한 설명은‣ https://dolphin-pc.notion.site/7379f6ae257940bc8e14d408a3386446?pvs=4

  
</details>

<details>
  <summary>2. Refresh Token을 이용한 Silent Refresh</summary>

  
## 📌 도입배경

- JWT토큰은 **stateless**하기에, 토큰이 탈취되어도 서버는 이를 알지 못합니다. 이를 위해 토큰의 만료시간을 짧게 가져가는 것이 보안적으로 안전하다고 판단이 들었습니다. 하지만, 토큰의 만료시간이 짧다면 정상적인 사용자들은 **로그인을 자주 시도**해야 하는 번거로움이 생깁니다.

### 그래서, Refresh Token을 도입하기로 했습니다.

- **Refresh Token**은 Access Token을 재발급하기 위한 용도로 사용되며, **1달의 만료시간**을 가집니다.
    - 프론트에서 조작할 필요가 없기에 http요청시 자동으로 전송되는 **Cookie**에 담아 저장합니다.
    - 또한, **Http-Only**를 적용하여, **XSS**공격에 안전하게 합니다.
- **Access Token**은 **1시간의 만료시간**을 가지며, **Local Storage**에 저장했습니다.
    - 백엔드 API에 따라 header에 토큰값이 담기지 않아야 하는 상황이 있기에, 조작이 용이한 Local Storage에 저장했습니다.
- AT토큰과 RT토큰을 매 API요청마다 함께 전송하며, 서버에서 `401` 에러 발생 시 **토큰갱신** or **토큰만료** 여부를 결정짓습니다.
    - error의 body에 토큰이 있는 경우 → AT토큰을 갱신하고, 원 요청을 다시 전송합니다.
    - error의 body에 토큰이 없는 경우 → 3번의 재시도 요청 초과 시, 로그아웃 처리를 진행합니다.
    
    ```mermaid
    sequenceDiagram
        participant Client
        participant Server
    
        Client->>Server: RT와 AT를 포함하여 API 요청
        Server->>Server: AT 만료여부 체크
        alt AT 유효
            Server->>Client: 원 요청 수행
        else AT 만료
            Server->>Server: RT 만료여부 체크
            alt RT 유효
                Server->>Client: 응답 body에 AT 재발급 처리
                Client->>Client: API 401 에러 Check <br/> (body에 AT 있음)
                Client->>Client: body에 있는 AT로 토큰 갱신
                Client->>Server: 원 요청 전달 <br/> axios.requert(error.config)
            else RT 만료
                Server->>Client: 응답 body::undefined
                Client->>Client: API 401 에러 Check <br/> (body 값 없음)
                alt 재발급 실패 횟수 3회 미만
    	            Client->>Server: 서버에 AT 재발급 요청
    		        else 재발급 실패 횟수 3회 초과 
    			        Client->>Client: 사용자 정보 만료 로그아웃 처리
    		        end
            end
        end
    
    ```
    
    ▶️ 자세한 설명은 ‣ https://dolphin-pc.notion.site/7ee13671e7024962b6abde78a903661b?pvs=4
    
</details>

<details>
  <summary>3. 카카오톡 공유, URL로 모달열기</summary>

  
- **Kakao SDK 설치** 및 **Kakao객체를 초기화**한 다음, `sendDefault`메소드를 통해 현재 URL을 공유합니다.   
- 하지만, Modal의 경우 내부 State로 관리가 되고 있기에 URL만으로는, 모달이 열리지 않습니다.
  ![image](https://github.com/user-attachments/assets/9e3d0bd1-56fc-44f1-b9e3-a5bdd8b26aec)

    
    ### SearchParam을 통해, 모달을 관리하는 방법을 사용했습니다.
    
    - Modal을 공유할 때는 `modalId` `modalType` 을 **queryParam**으로 생성한 URL을 공유합니다.
    예시) https://www.bocho.p-e.kr/video?modalId=38&modalType=video
    - 해당 URL의 **SearchParam**을 읽어, 해당하는 모달을 열어주는 로직을 추가했습니다.
        
        ```tsx
          const [searchParams, setSearchParams] = useSearchParams();
        
          // * URL에 modalId, modalType이 있을 경우 모달 열기
          useEffect(() => {
            const modalId = searchParams.get('modalId');
            const modalType = searchParams.get('modalType');
            handleOpen(Number(modalId), modalType as ModalType);
          }, [searchParams, handleOpen]);
        ```
        
        ![image](https://github.com/user-attachments/assets/7e5312d5-7f2e-453d-831c-51b845d3967a)

</details>

<details>
  <summary>4. ImagePlaceholder</summary>

  
- Loading 시간이 긴 이미지를 대체하는 **PlaceHolder**컴포넌트를 만들어, 사용자에게 **로딩중** 이라는 메시지를 전달합니다.
    
    ![image](https://github.com/user-attachments/assets/4b4e33a4-712f-4a40-9a43-7d25b26e7224)

    
- **img** 태그의 `onLoad`메소드를 이용하여 로딩상태를 구현했습니다.

```
interface Props {
  children: ReactElement<HTMLImageElement>;
}
const ImagePlaceholder = ({ children }: Props) => {
  const { width, height } = children.props;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <Fragment>
      {isLoading && (
        <Placeholder width={width} height={height}>
          <Loading />
        </Placeholder>
      )}

      {/* img 태그의 onLoad함수를 사용하기 위해, createElement를 사용했습니다. */}
      {/* props로 img태그 설정에 필요한 요소를 받아와 img태그를 직접 만드는 방법이 있겠지만, 
          활용하는 입장에서 속성이 추가될때마다 props가 추가되지 않도록 하고 싶었습니다 */}
      {React.createElement(children.type, {
        ...children.props,
        onLoad: () => setIsLoading(false),
        style: { display: isLoading ? 'none' : 'block' },
      })}
    </Fragment>
  );
};
```

</details>

<details>
  <summary>5. 인피니티 스크롤</summary>

  
![image](https://github.com/user-attachments/assets/f5a70fae-bdd7-4135-baaf-591a922a5e82)


- 한 번에 많은 데이터를 불러올 경우, **`네트워크지연`**, **`렌더링지연`**의 문제를 초래합니다.
이를 방지하고자 **Pagination**을 도입하였고, Scroll만 내려도 자동으로 데이터를 불러오는 **Infinite Scroll**을 구현했습니다.
- Tanstack Query의 **useInfiniteQuery**를 활용해 Pagination 조작을 수행했습니다.
    
    ```tsx
    export const useCommunityListSuspenseInfiniteQuery = (category: Category) => {
      return useSuspenseInfiniteQuery({
        queryKey: ['infinite', 'communityList', category],
        initialPageParam: 0,
        queryFn: ({ pageParam = 0 }) => getCommunityList({ category, page: pageParam, size: 10 }),
    
        getNextPageParam: (lastPage) => {
          const { size, number, totalElements } = lastPage.page;
          if (size * (number + 1) >= totalElements) return undefined;
    
          return lastPage.page.number + 1;
        },
      });
    };
    ```
    
- **useScroll** 커스텀 훅을 통해 Scroll이 바닥에 닿을 때, **fetchNextPage**로 다음 데이터를 불러옵니다.
    
    ```tsx
    import { InfiniteQueryObserverResult } from '@tanstack/react-query';
    import { useEffect } from 'react';
    import _ from 'lodash';
    
    interface Props {
      length: number;
      fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
      hasNextPage: boolean;
      marginBottom?: number;
    }
    
    const useScroll = ({ length, fetchNextPage, hasNextPage, marginBottom = 0 }: Props):void => {
      /**
       * 스크롤이 생길때까지 계속 fetch
       *  - length를 받는 이유는 데이터를 계속해서 fetch하기 위함
       *  - 계속해서 받다가, [clientHeight >= scrollHeight]:스크롤이 생기면 끝
       */
      useEffect(() => {
        const { scrollHeight, clientHeight } = document.documentElement;
        if (clientHeight >= scrollHeight && hasNextPage) {
          fetchNextPage();
        }
      }, [length, fetchNextPage, hasNextPage]);
    
      /** 스크롤이 닿기 전, 데이터 fetch */
      useEffect(() => {
        const scrollFetch = () => {
          const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
          if (clientHeight + scrollTop >= scrollHeight - marginBottom) {
            if (hasNextPage) fetchNextPage();
          }
        };
    
        const handleScroll = _.throttle(scrollFetch, 300);
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, [hasNextPage, fetchNextPage, marginBottom]);
    };
    
    export default useScroll;
    
    ```
</details>

    

## 💥 트러블 슈팅
<details>
  <summary>1. 웹소켓, Authorization검증</summary>

  
## 📌 배경, Spring Security Context
- 웹소켓 연결 후, 사용자 정보를 불러오기 위해, `SecurityContextHolder.getContext().getAuthentication()` 를 사용했지만, null로 처리가 되고 있었습니다. 관련된 글을 참고해보니, Spring의 멀티 Thread환경으로 인해 **SecurityContextHolder의 context**가 공유되지 않다는 것을 알 수 있었습니다.

## 🎉 해결, WebSocketSession

- 다른 방식으로 사용자 정보를 불러오고자, WebSocketSession객체 안을 Debug해보니, 유저정보가 담겨있었습니다.
    
    ![image](https://github.com/user-attachments/assets/181adbcd-0adc-4e8b-8ea0-10286f7110cf)

    
- 이를 토대로, WebSocketSession객체에서 유저정보를 가져오는 메소드를 만들었습니다.
    
    ```java
    /** 웹소켓 세션에서 사용자 정보를 가져오는 메서드 */
    public CustomUserDetails getUserDetails(WebSocketSession session) {
        Principal principal = session.getPrincipal();
        if (principal instanceof UsernamePasswordAuthenticationToken) {
            UsernamePasswordAuthenticationToken token = (UsernamePasswordAuthenticationToken) principal;
            return (CustomUserDetails) token.getPrincipal();
        }
        return null;
    }
    ```
    
- 이렇게 구현한 뒤, Postman으로 테스트를 해보니 잘 적용이 되었습니다.
    
    ![image](https://github.com/user-attachments/assets/1c37e7d8-d491-4716-9a25-565c9f0bffe8)

    

## 💥 다시 문제발생, 웹소켓 헤더 사용 불가
- 웹소켓 테스트 당시만 해도, **Postman으로 Header에 토큰값**을 담아줄 수 있어 WebSocketSession객체에서 사용자 정보를 가져올 수 있었습니다. 하지만, 웹소켓을 개발/구현하면서 **헤더에 값을 추가할 수 없다는 사실**을 알게 되었습니다.
- 이를 해결하기 위해서는 2가지의 선택지가 있었습니다.
    1. **STOMP** : STOMP 프로토콜을 사용한다면, 웹소켓 Connection시 헤더에 값을 담아줄 수 있었습니다.
    2. **ApprovalKey** : 메시지 전송마다 담아줄 Key를 발급받아, 소켓 연결 및 메시지 전송하는 방식
    
    이에 저희는 STOMP라이브러리를 설치하지 않고, **ApprovalKey**를 발급받아 메시지를 전송하는 방식을 채택했습니다.
    
    ```mermaid
    sequenceDiagram
        participant Client
        participant Server
    
        Client->>Server: ApprovalKey 발급 요청
        Server-->>Client: ApprovalKey 응답
        Client->>Server: 웹소켓 Connection
        Client->>Server: 발급받은 ApprovalKey를 포함하여 웹소켓 메시지 전송
        Server->>Server: 키 검증 후, 메시지 저장 및 broadcast
    
    ```
    
</details>

<details>
  <summary>2. React앱 Amplify 배포, 새로고침 시 오류</summary>

  
## **📌 상황**

- React App을 Amplify에 배포한 뒤, 페이지에서 새로고침을 진행하면 URL에 `/`가 따라붙었고, 콘솔에는 404에러가 출력되었습니다.

## 🎉 해결

- Amplify의 [Redirection] 메뉴의 설정을 다음과 같이 설정해주었습니다.
    - `</^((?!\.(css\|gif\|ico\|jpg\|js\|png\|svg\|txt)).)*$/>` 추가
    
    ![image](https://github.com/user-attachments/assets/ef97a60e-f5f5-46dc-9d44-8e6ed7e1e0a5)

    
- 오류의 원인은 React앱의 **SPA라우팅**과 Amplify의 **라우팅**의 차이점으로 인해 발생했습니다.
    - React앱은 하나의 index(/)로부터 페이지가 시작되지만, Amplify는 정적페이지를 호스팅하기 위한 것으로 **MPA라우팅**에 적합합니다.
    - 이를 위해, `/` 경로 뒤에 붙는 것들에 200 rewrite가 되도록 설정해주지만, 위에 설정한 정규식 규칙에 따라 해당파일명은 Redirection에 걸리지 않도록 합니다.

</details>

### ⚙️ Service Architecture
<img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F231a861b-88a7-4a1d-bfa3-082686e82101%2F6922aaf2-60ed-4652-89f2-a25edab9df12%2Fimage.png?table=block&id=775dbeab-50e9-4973-966f-f097bc7e649c&spaceId=231a861b-88a7-4a1d-bfa3-082686e82101&width=2000&userId=80550774-935f-4f12-afd4-6fb636b2c2ea&cache=v2" />

### 🔨 Service Tools

#### Front

<span><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"></span>
<span><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"></span>
<span><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"></span>
<br/>
<span><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=purple"></span>
<span><img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"></span>
<span><img src="https://img.shields.io/badge/Zustand-F3DF49?style=for-the-badge&logo=zustand&logoColor=white"></span>
<span><img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white"></span>
<span><img src="https://img.shields.io/badge/ReactHookForm-EC5990?style=for-the-badge&logo=ReactHookForm&logoColor=white"></span>

#### Etc

<span><img src="https://img.shields.io/badge/AwsAmplify-FF9900?style=for-the-badge&logo=AwsAmplify&logoColor=white"></span>

### ✅ 프로젝트 실행 방법

1. Node 설치 확인

   - `node -v` : v22.0.0
   - 설치방법 : https://nodejs.org/en/download/package-manager 참고

2. Yarn 설치 확인

   - `yarn -v` : 1.22.21
   - 설치방법 : https://www.heropy.dev/p/ijqX9h 참고

3. 의존성(depencies) 설치

   - `yarn install`

4. .env작성

```
VITE_SHARE_KAKAO_LINK_KEY=

VITE_API_URL=http://localhost:3000
VITE_API_TOKEN_URL=http://localhost:3000/api
VITE_API_ADMIN_URL=http://localhost:3000/auth
VITE_KAKAO_LOGIN_URL=http://localhost:3000/oauth2/authorization/kakao
VITE_GOOGLE_LOGIN_URL=http://localhost:3000/oauth2/authorization/google
VITE_SOCKET_URL=ws://localhost:3000/api/chat/msg
```

4. React APP실행
   - `yarn dev`
   - 포트번호(5173) 확인하여, 브라우저 실행
