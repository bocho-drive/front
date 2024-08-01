import { create } from 'zustand';

interface Comment {
  id: number;
  text: string;
  author: string;
  date: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
  views: number;
  isChecked: boolean;
  commentList: Comment[];
}

interface Props {
  posts: Post[];
}

interface Actions {
  addPost: (post: Post) => void;
  deletePost: (id: number) => void;
  getPostById: (id: number) => Post | undefined;
}

export const useChallengePost = create<Props & Actions>((set, get) => ({
  posts: [],
  
  addPost: (post) => {
    const { posts } = get();
    set({ posts: [...posts, post] });
  },

  deletePost: (id) => {
    const { posts } = get();
    set({ posts: posts.filter(post => post.id !== id) });
  },

  getPostById: (id) => {
    const { posts } = get();
    return posts.find(post => post.id === id);
  },
}));
