import PostListHeader from '../molecules/PostListHeader';

import * as S from '@/styles/index.style';
import { usePost } from '@/@features/Admin/Post/usePost';

const PostList = () => {
  const { posts, handleToggle } = usePost();

  return (
    <S.div.PostListContainer>
      <PostListHeader />
      {posts.map((post) => (
        <S.div.PostItem key={post.id}>
          <div>
            <S.input.Checkbox id={String(post.id)} type="checkbox" checked={post.isChecked} onChange={() => handleToggle(post.id)} />
            <label htmlFor={String(post.id)}>{post.title}</label>
          </div>
          <div>추천수: {post.likes}</div>
          <div>댓글수: {post.comments}</div>
        </S.div.PostItem>
      ))}
    </S.div.PostListContainer>
  );
};

export default PostList;
