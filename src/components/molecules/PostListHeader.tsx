import React, { useState } from 'react';

import * as S from '@/styles/index.style';

interface PostListHeaderProps {
  onSort: (criteria: string) => void;
  onDelete: () => void;
  onToggleAll: (checked: boolean) => void;
}


const PostListHeader: React.FC<PostListHeaderProps> = ({ onSort, onDelete, onToggleAll }) => {
  const [checked, setChecked] = useState(false);

  const handleToggleAll = () => {
    setChecked(!checked);
    onToggleAll(!checked);
  };

  return (
    <S.div.Header>
      <div>
        <S.input.Checkbox
          type="checkbox"
          checked={checked}
          onChange={handleToggleAll}
        />
        체크박스
      </div>
      <div>
        <S.button.AdminButton onClick={() => onSort('likes')}>추천수로 정렬</S.button.AdminButton>
        <S.button.AdminButton onClick={() => onSort('comments')}>댓글수로 정렬</S.button.AdminButton>
      </div>
      <div>
        <S.button.AdminButton onClick={onDelete}>삭제</S.button.AdminButton>
      </div>
    </S.div.Header>
  );
};

export default PostListHeader;
