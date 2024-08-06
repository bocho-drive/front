import { ChangeEvent } from 'react';
import { usePost } from '@/@features/Admin/Post/usePost';
import * as S from '@/styles/index.style';

const PostListHeader: React.FC = () => {
  const { allChecked, handleToggleAll, handleSort, handleDelete } = usePost();

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    handleSort(value);
  };

  return (
    <S.div.Header>
      <S.div.Row $align="center" style={{ padding: '10px' }}>
        <S.input.Checkbox
          id="check"
          type="checkbox"
          checked={allChecked}
          onChange={() => handleToggleAll(!allChecked)}
        />
        <label htmlFor="check">전체선택</label>
      </S.div.Row>
      <S.div.Row $gap={10}>
        <S.select.Select $size="small" onChange={handleSortChange}>
          <option value="" disabled selected>
            정렬 기준
          </option>
          <option value="likes">추천순</option>
          <option value="comments">댓글순</option>
        </S.select.Select>
      </S.div.Row>
      <S.button.Button $size="small" onClick={handleDelete}>
        삭제
      </S.button.Button>
    </S.div.Header>
  );
};

export default PostListHeader;
