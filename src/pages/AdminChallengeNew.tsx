import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import ToastEditor from '@/components/atoms/ToastEditor';
import * as S from '@/styles/index.style';
import { useChallengePost } from '@/@features/Admin/Challenge/useChallengePost';
import Sidebar from '@/components/atoms/Sidebar';

const AdminChallengeNew = () => {
  const [title, setTitle] = useState('');
  const [content] = useState('');
  const { addPost } = useChallengePost();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      author: 'Admin',
      date: new Date().toLocaleString(),
      likes: 0,
      comments: 0,
      views: 0,
      isChecked: false,
      commentList: [],
    };
    addPost(newPost);
    navigate('/admin/challenges');
  };

  return (
    <S.div.Container $width={100}>
      <S.div.Row $width={90} $justify="center">
        <Sidebar />
      <S.div.Column $gap={20}>
        <S.input.Input
          $size="large"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <ToastEditor
          value={content}
          onChange={(value) => setContent(value)}
        /> */}
        <S.button.Button $size="large" onClick={handleSubmit}>
          등록
        </S.button.Button>
      </S.div.Column>
      </S.div.Row>
    </S.div.Container>
  );
};

export default AdminChallengeNew;
