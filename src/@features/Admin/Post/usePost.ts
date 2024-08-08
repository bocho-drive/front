import { create } from 'zustand';

// export interface CommunityRes {
//     id: number;
//     title: string;
//     viewCount: number;
//     verifiedYN: boolean;
//     createdAt: string;
//   }

export interface Post {
  // api
  id: number;
  title: string;
  viewCount: number;
  verifiedYN: boolean;
  createdAt: string;

  // 클라이언트
  isChecked: boolean;
  likes: number;
  comments: number;
}

interface Props {
  posts: Post[];
  currentPage: number;
  postsPerPage: number;
  totalPages: number;
  allChecked: boolean;
}

interface Actions {
  setPosts: (posts: Post[]) => void;
  handleSort: (criteria: string) => void;
  handleDelete: () => void;
  handleToggleAll: (checked: boolean) => void;
  handleToggle: (id: number) => void;
  setCurrentPage: (page: number) => void;
  setTotalPages: (totalPages: number) => void;
}

export const usePost = create<Props & Actions>((set, get) => ({
  posts: [],
  currentPage: 1,
  postsPerPage: 10,
  totalPages: 0,
  allChecked: false,

  setPosts: (posts) => {
    // const postsPerPage = get().postsPerPage;
    // const totalPages = Math.ceil(posts.length / postsPerPage);
    const allChecked = posts.length > 0 && posts.every((post) => post.isChecked);
    set({ posts, allChecked });
  },

  handleSort: (criteria) => {
    const { posts, setPosts } = get();

    const sortedPosts = [...posts].sort((a, b) => {
      if (criteria === 'likes') {
        return b.likes - a.likes;
      } else if (criteria === 'comments') {
        return b.comments - a.comments;
      }
      return 0;
    });
    setPosts(sortedPosts);
  },

  handleDelete: () => {
    const { posts, setPosts } = get();
    const remainingPosts = posts.filter((post) => !post.isChecked);
    setPosts(remainingPosts);
  },

  handleToggleAll: (checked) => {
    const { posts, setPosts } = get();
    const updatedPosts = posts.map((post) => ({ ...post, isChecked: checked }));
    setPosts(updatedPosts);
  },

  handleToggle: (id) => {
    const { posts, setPosts } = get();
    const updatedPosts = posts.map((post) => (post.id === id ? { ...post, isChecked: !post.isChecked } : post));
    setPosts(updatedPosts);
  },

  setCurrentPage: (page) => {
    const { totalPages } = get();
    if (page > 0 && page <= totalPages) {
      set({ currentPage: page });
    }
  },

  setTotalPages: (totalPages) => {
    set({ totalPages });
  },
}));
