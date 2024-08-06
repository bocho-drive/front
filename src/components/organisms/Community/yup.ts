import * as yup from 'yup';

const title = yup.string().required('제목을 입력해주세요.');

export const postSchema = yup.object().shape({
  title,
});
export type PostSchema = yup.InferType<typeof postSchema>;
