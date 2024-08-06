import * as S from '@/styles/index.style';

const SearchBar = () => {
  return (
    <S.div.SearchBarContainer>
      <S.input.Input type="text" placeholder="글 제목 or 내용 검색창" $fullWidth $size="large" />
    </S.div.SearchBarContainer>
  );
};

export default SearchBar;
