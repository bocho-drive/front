import PostListHeader from '../molecules/PostListHeader';
import * as S from '@/styles/index.style';
import { usePost } from '@/@features/Admin/Post/usePost';
import { useLocation, useNavigate } from 'react-router-dom';

const PostList = () => {
  const { posts, currentPage, postsPerPage, totalPages, handleToggle, setCurrentPage } = usePost();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const navigate = useNavigate();
  const { search } = useLocation();

  const handleToAdminDetail = () => navigate('/admin/detail' + search);

  return (
    <S.div.PostListContainer>
      <PostListHeader />
      {currentPosts.map((post) => (
        <S.div.PostItem key={post.id}>
          <div>
            <S.input.Checkbox
              id={`post-${post.id}`}
              type="checkbox"
              checked={post.isChecked}
              onChange={() => handleToggle(post.id)}
            />
            <label onClick={() => handleToAdminDetail()} style={{ cursor: 'pointer' }}>
              {post.title}
            </label>
          </div>
          <div>추천: {post.likes}</div>
          <div>댓글: {post.comments}</div>
        </S.div.PostItem>
      ))}
      <S.div.Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <S.button.PageButton
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            active={index + 1 === currentPage}
          >
            {index + 1}
          </S.button.PageButton>
        ))}
      </S.div.Pagination>
    </S.div.PostListContainer>
  );
};

export default PostList;
