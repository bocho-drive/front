import * as yup from 'yup';

const title = yup.string().required('제목을 입력해주세요.');
const isVote = yup.boolean();

export const communitySchema = yup.object().shape({
  title,
  isVote,
});
export type CommunitySchema = yup.InferType<typeof communitySchema>;
