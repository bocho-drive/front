import PostListHeader from '../molecules/PostListHeader';
import * as S from '@/styles/index.style';
import { usePost } from '@/@features/Admin/Post/usePost';
import { useNavigate } from 'react-router-dom';
import { getCommunityList } from '@/@features/Community/api';
import { useCallback, useEffect } from 'react';

const PostList = () => {
  const { posts, setPosts, currentPage, handleToggle, setCurrentPage, totalPages, setTotalPages } = usePost();
  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleToAdminDetail = (id: number) => navigate(`/admin/${id}`);

  const fetchPosts = useCallback(async () => {
    const data = await getCommunityList({
      page: currentPage - 1,
    });
    if (data) {
      setTotalPages(data.page.totalPages);
      const posts = data.content.map((post) => ({
        id: post.id,
        title: post.title,
        viewCount: post.viewCount,
        verifiedYN: post.verifiedYN,
        createdAt: post.createdAt,
        isChecked: false,
        likes: 0,
        comments: 0,
      }));
      setPosts(posts);
    }
  }, [currentPage, setPosts, setTotalPages]);

  useEffect(() => {
    fetchPosts();
  }, [currentPage, fetchPosts]);

  return (
    <S.div.PostListContainer>
      <PostListHeader />
      {posts.map((post) => (
        <S.div.PostItem key={post.id}>
          <div>
            <S.input.Checkbox id={`post-${post.id}`} type="checkbox" checked={post.isChecked} onChange={() => handleToggle(post.id)} />
            <label onClick={() => handleToAdminDetail(post.id)} style={{ cursor: 'pointer' }}>
              {post.title}
            </label>
          </div>
          <div>조회: {post.viewCount}</div>
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

export default PostList;
