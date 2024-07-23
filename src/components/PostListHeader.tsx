import React, { useState } from 'react';
import styled from 'styled-components';

interface PostListHeaderProps {
  onSort: (criteria: string) => void;
  onDelete: () => void;
  onToggleAll: (checked: boolean) => void;
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  margin-left: 10px;
`;

const PostListHeader: React.FC<PostListHeaderProps> = ({ onSort, onDelete, onToggleAll }) => {
  const [checked, setChecked] = useState(false);

  const handleToggleAll = () => {
    setChecked(!checked);
    onToggleAll(!checked);
  };

  return (
    <Header>
      <div>
        <Checkbox
          type="checkbox"
          checked={checked}
          onChange={handleToggleAll}
        />
        체크박스
      </div>
      <div>
        <Button onClick={() => onSort('likes')}>추천수로 정렬</Button>
        <Button onClick={() => onSort('comments')}>댓글수로 정렬</Button>
      </div>
      <div>
        <Button onClick={onDelete}>삭제</Button>
      </div>
    </Header>
  );
};

export default PostListHeader;
