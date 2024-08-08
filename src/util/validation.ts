/** @desc 유효 URL검증 */
export const validationUri = (uri: string) => {
  if (uri === undefined || uri === null || uri === '') return false;

  return /^https?:\/\/\S+$/.test(uri);
};
