import { useState } from 'react';
import { usePost } from '@/@features/Admin/Post/usePost';

import * as S from '@/styles/index.style';

// interface PostListHeaderProps {
//   onSort: (criteria: string) => void;
//   onDelete: () => void;
//   onToggleAll: (checked: boolean) => void;
// }

const PostListHeader = () => {
  const [checked, setChecked] = useState(false);

  const { handleToggleAll: onToggleAll, handleSort, handleDelete } = usePost((state) => state);

  const handleToggleAll = () => {
    setChecked((previous) => !previous);
    onToggleAll(!checked);
  };

  return (
    <S.div.Header>
      <div>
        <S.input.Checkbox type="checkbox" checked={checked} onChange={handleToggleAll} />
        체크박스
      </div>
      <div>
        <S.button.AdminButton onClick={() => handleSort('likes')}>추천수로 정렬</S.button.AdminButton>
        <S.button.AdminButton onClick={() => handleSort('comments')}>댓글수로 정렬</S.button.AdminButton>
      </div>
      <div>
        <S.button.AdminButton onClick={handleDelete}>삭제</S.button.AdminButton>
      </div>
    </S.div.Header>
  );
};

export default PostListHeader;
