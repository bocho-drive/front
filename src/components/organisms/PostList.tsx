// import { useState } from 'react';
import PostListHeader from '../molecules/PostListHeader';

import * as S from '@/styles/index.style';
import { usePost } from "@/@features/Admin/Post/usePost"

// interface Post {
//   id: number;
//   title: string;
//   likes: number;
//   comments: number;
//   isChecked: boolean;
// }


const PostList = () => {
  const {posts, handleToggle} = usePost()
  // const [posts, setPosts] = useState<Post[]>([
  //   { id: 1, title: 'Post 1', likes: 10, comments: 2, isChecked: false },
  //   { id: 2, title: 'Post 2', likes: 5, comments: 4, isChecked: false },
  //   { id: 3, title: 'Post 3', likes: 8, comments: 1, isChecked: false },
  //   // 예시
  // ]);

  // const handleSort = (criteria: string) => {
  //   const sortedPosts = [...posts].sort((a, b) => {
  //     if (criteria === 'likes') {
  //       return b.likes - a.likes;
  //     } else if (criteria === 'comments') {
  //       return b.comments - a.comments;
  //     }
  //     return 0;
  //   });
  //   setPosts(sortedPosts);
  // };

  // const handleDelete = () => {
  //   const remainingPosts = posts.filter((post) => !post.isChecked);
  //   setPosts(remainingPosts);
  // };

  // const handleToggleAll = (checked: boolean) => {
  //   const updatedPosts = posts.map((post) => ({ ...post, isChecked: checked }));
  //   setPosts(updatedPosts);
  // };

  // const handleToggle = (id: number) => {
  //   const updatedPosts = posts.map((post) => (post.id === id ? { ...post, isChecked: !post.isChecked } : post));
  //   setPosts(updatedPosts);
  // };

  return (
    <S.div.PostListContainer>
      <PostListHeader />
      {posts.map((post) => (
        <S.div.PostItem key={post.id}>
          <div>
            <S.input.Checkbox type="checkbox" checked={post.isChecked} onChange={() => handleToggle(post.id)} />
            {post.title}
          </div>
          <div>추천수: {post.likes}</div>
          <div>댓글수: {post.comments}</div>
        </S.div.PostItem>
      ))}
    </S.div.PostListContainer>
  );
};

export default PostList;
