// import { logoutToast, needLoginToast } from '@/components/atoms/Toast/useToast';
// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
// import { LoginRes } from './type';

// interface Props {
//   /** 인가 유효 여부 */
//   isAuth: boolean;
//   loginInfo: LoginRes | null;
// }

// interface Actions {
//   handleLogin: (loginInfo: LoginRes) => void;
//   handleLogout: () => void;
//   confirmAuth: () => boolean;
// }

// /** @deprecated */
// export const useAuth = create(
//   persist<Props & Actions>(
//     (set, get) => ({
//       isAuth: false,
//       loginInfo: null,

//       handleLogin: (loginInfo) => {
//         set({ isAuth: true, loginInfo });
//       },
//       handleLogout: () => {
//         set({ isAuth: false, loginInfo: null });
//         logoutToast();
//       },

//       confirmAuth: () => {
//         const { isAuth } = get();
//         if (!isAuth) needLoginToast();
//         return isAuth;
//       },
//     }),
//     { name: 'auth' }
//   )
// );
