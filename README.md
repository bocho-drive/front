# 🚗 보초 운전 🚕

> 운전을 잘하고 싶은 사람들을 위한 커뮤니티

> **[서비스 소개 브로셔 보기 🔗](https://dolphin-pc.notion.site/8-13-21-be75fecc932b4a8b88d86d2b1835252c?pvs=4)**

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

### ⚙️ Service Architecture

(추가 예정)

### 🔨 Service Tools

#### Front

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<br/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=purple">
<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">
<img src="https://img.shields.io/badge/Zustand-F3DF49?style=for-the-badge&logo=zustand&logoColor=white">
<img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white">
<img src="https://img.shields.io/badge/ReactHookForm-EC5990?style=for-the-badge&logo=ReactHookForm&logoColor=white">

#### Etc

<img src="https://img.shields.io/badge/AwsAmplify-FF9900?style=for-the-badge&logo=AwsAmplify&logoColor=white">

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
