import * as yup from 'yup';

const email = yup.string().email('이메일 형식이 아닙니다.').required('이메일을 입력해주세요.');
const password = yup.string().required('비밀번호를 입력해주세요.').min(8, '비밀번호는 8글자 이상이어야 합니다.').max(20, '비밀번호는 20글자 이하이어야 합니다.');
const nickname = yup.string().required('닉네임을 입력해주세요.');
const isTeacher = yup.boolean();

export const registerSchema = yup.object().shape({
  email,
  password,
  nickname,
  isTeacher,
});
export type RegisterSchema = yup.InferType<typeof registerSchema>;

export const loginSchema = yup.object().shape({
  email,
  password,
});
export type LoginSchema = yup.InferType<typeof loginSchema>;
