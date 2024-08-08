import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import ToastEditor from '@/components/atoms/ToastEditor';
import * as S from '@/styles/index.style';
// import { useChallengePost } from '@/@features/Admin/Challenge/useChallengePost';
import Sidebar from '@/components/atoms/Sidebar';
import ToastEditor from '@/components/atoms/ToastEditor';
import { Editor } from '@toast-ui/react-editor';
import { postChallenge } from '@/@features/Challenge/api';

// Controlled
// useState를 이용해서 상태를 관리하는 방식

// Un-Controlled
// useRef(=참조)를 이용해서 상태를 관리하는 방식

const AdminChallengeNew = () => {
  const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  const editorRef = useRef<Editor>(null);
  // const { addPost } = useChallengePost();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const content = editorRef.current?.getInstance().getMarkdown();
    // const newPost = {
    //   id: Date.now(),
    //   title,
    //   content,
    //   author: 'Admin',
    //   date: new Date().toLocaleString(),
    //   likes: 0,
    //   comments: 0,
    //   views: 0,
    //   isChecked: false,
    //   commentList: [],
    // };
    // addPost(newPost);
    await postChallenge({
      title,
      content,
    });
    navigate('/admin/challenge');
  };

  return (
    <S.div.Container $width={100}>
      <S.div.Row $gap={40} $width={90} $justify="center">
        <Sidebar />
        <S.div.Column $padding={40} $gap={20}>
          <S.input.Input $size="large" placeholder="제목을 입력해주세요." value={title} onChange={(e) => setTitle(e.target.value)} />
          <ToastEditor initialValue=" " ref={editorRef} />
          <S.button.Button $size="large" onClick={handleSubmit}>
            등록
          </S.button.Button>
        </S.div.Column>
      </S.div.Row>
    </S.div.Container>
  );
};

export default AdminChallengeNew;
