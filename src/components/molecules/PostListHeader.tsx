import { useState } from 'react';
import { usePost } from '@/@features/Admin/Post/usePost';

import * as S from '@/styles/index.style';

const PostListHeader = () => {
  const [checked, setChecked] = useState(false);

  const { handleToggleAll: onToggleAll, handleSort, handleDelete } = usePost((state) => state);

  const handleToggleAll = () => {
    setChecked((previous) => !previous);
    onToggleAll(!checked);
  };

  return (
    <S.div.Header>
      <S.div.Row $align="center" style={{ padding: '10px' }}>
        <S.input.Checkbox id="check" type="checkbox" checked={checked} onChange={handleToggleAll} />
        <label htmlFor="check">전체선택</label>
      </S.div.Row>
      <S.div.Row $gap={10}>
        <S.button.Button $size="small" onClick={() => handleSort('likes')}>
          추천수로 정렬
        </S.button.Button>
        <S.button.Button $size="small" onClick={() => handleSort('comments')}>
          댓글수로 정렬
        </S.button.Button>
      </S.div.Row>
      <S.button.Button $size="small" onClick={handleDelete}>
        삭제
      </S.button.Button>
    </S.div.Header>
  );
};

export default PostListHeader;
