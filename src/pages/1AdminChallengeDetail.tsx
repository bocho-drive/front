import { useNavigate } from 'react-router-dom';
import { useChallengePost } from '@/@features/Admin/Challenge/useChallengePost';
// import PostDetail from '@/components/molecules/Post/PostDetail';
import * as S from '@/styles/index.style';
import Sidebar from '@/components/atoms/Sidebar';

const AdminChallengeDetail = () => {
  // const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPostById, deletePost } = useChallengePost();
  const post = getPostById(Number(1));

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleToList = () => navigate('/admin/challenges');

  const handlePostDelete = () => {
    deletePost(post.id);
    navigate('/admin/challenges');
  };

  return (
    <S.div.Container $width={100}>
      <S.div.Row $width={90} $justify="center">
        <Sidebar />
        {/* <PostDetail post={post} /> */}
        <S.div.Row $gap={10} $justify="center">
          <S.button.Button onClick={handleToList}>목록으로</S.button.Button>
          <S.button.Button onClick={handlePostDelete}>글 삭제</S.button.Button>
        </S.div.Row>
        <S.hr.Hr />
      </S.div.Row>
    </S.div.Container>
  );
};

export default AdminChallengeDetail;
