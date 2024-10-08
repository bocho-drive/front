import PostListHeader from '../molecules/PostListHeader';
import * as S from '@/styles/index.style';
import { Post, usePost } from '@/@features/Admin/Post/useChallengePost';
import { useNavigate } from 'react-router-dom';
import { getChallengeList } from '@/@features/Challenge/api';
import { useEffect } from 'react';

const ChallengePostList = () => {
  const { posts, setPosts, currentPage, handleToggle, setCurrentPage, totalPages, setTotalPages } = usePost();
  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleToChallengeDetail = (id: number) => navigate(`/admin/challenge/${id}`);

  const fetchPosts = async () => {
    const data = await getChallengeList({
      page: currentPage - 1,
    });
    if (data) {
      setTotalPages(data.page.totalPages);
      const posts: Post[] = data.content.map((post) => ({
        id: Number(post.id),
        title: post.title,
        createdAt: post.createdAt,
        isChecked: false,
        likes: 0,
        comments: 0,
      }));
      setPosts(posts);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  return (
    <S.div.PostListContainer>
      <PostListHeader />
      {posts.map((post) => (
        <S.div.PostItem key={post.id}>
          <div>
            <S.input.Checkbox id={`post-${post.id}`} type="checkbox" checked={post.isChecked} onChange={() => handleToggle(post.id)} />
            <label onClick={() => handleToChallengeDetail(post.id)} style={{ cursor: 'pointer' }}>
              {post.title}
            </label>
          </div>
          <div>댓글: {post.comments}</div>
        </S.div.PostItem>
      ))}
      <S.div.Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <S.button.PageButton key={index + 1} onClick={() => handlePageChange(index + 1)} active={index + 1 === currentPage}>
            {index + 1}
          </S.button.PageButton>
        ))}
      </S.div.Pagination>
    </S.div.PostListContainer>
  );
};

export default ChallengePostList;
