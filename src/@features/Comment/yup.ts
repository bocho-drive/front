import * as yup from 'yup';

const content = yup.string().required('내용을 입력해주세요.');

export const commentSchema = yup.object().shape({
  content,
});
export type CommentSchema = yup.InferType<typeof commentSchema>;
