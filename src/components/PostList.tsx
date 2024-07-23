import React, { useState } from 'react';
import styled from 'styled-components';
import PostListHeader from './PostListHeader';

interface Post {
  id: number;
  title: string;
  likes: number;
  comments: number;
  isChecked: boolean;
}

const PostListContainer = styled.div`
  border: 1px solid #ccc;
`;

const PostItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'Post 1', likes: 10, comments: 2, isChecked: false },
    { id: 2, title: 'Post 2', likes: 5, comments: 4, isChecked: false },
    { id: 3, title: 'Post 3', likes: 8, comments: 1, isChecked: false },
    // 예시
  ]);

  const handleSort = (criteria: string) => {
    const sortedPosts = [...posts].sort((a, b) => {
      if (criteria === 'likes') {
        return b.likes - a.likes;
      } else if (criteria === 'comments') {
        return b.comments - a.comments;
      }
      return 0;
    });
    setPosts(sortedPosts);
  };

  const handleDelete = () => {
    const remainingPosts = posts.filter(post => !post.isChecked);
    setPosts(remainingPosts);
  };

  const handleToggleAll = (checked: boolean) => {
    const updatedPosts = posts.map(post => ({ ...post, isChecked: checked }));
    setPosts(updatedPosts);
  };

  const handleToggle = (id: number) => {
    const updatedPosts = posts.map(post => 
      post.id === id ? { ...post, isChecked: !post.isChecked } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <PostListContainer>
      <PostListHeader 
        onSort={handleSort}
        onDelete={handleDelete}
        onToggleAll={handleToggleAll}
      />
      {posts.map(post => (
        <PostItem key={post.id}>
          <div>
            <Checkbox
              type="checkbox"
              checked={post.isChecked}
              onChange={() => handleToggle(post.id)}
            />
            {post.title}
          </div>
          <div>추천수: {post.likes}</div>
          <div>댓글수: {post.comments}</div>
        </PostItem>
      ))}
    </PostListContainer>
  );
};

export default PostList;
