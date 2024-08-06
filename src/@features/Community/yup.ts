import * as yup from 'yup';

const title = yup.string().required('제목을 입력해주세요.');
const content = yup.string().required('내용을 입력해주세요.');
const isVote = yup.boolean();

export const communitySchema = yup.object().shape({
  title,
  content,
  isVote,
});
export type CommunitySchema = yup.InferType<typeof communitySchema>;
