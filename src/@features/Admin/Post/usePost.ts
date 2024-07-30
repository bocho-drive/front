import { create } from "zustand";

interface Post {
    id: number;
    title: string;
    likes: number;
    comments: number;
    isChecked: boolean;
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
}

export const usePost = create<Props & Actions>((set, get) => ({
    posts: [
        { id: 1, title: 'Post 1', likes: 10, comments: 2, isChecked: false },
        { id: 2, title: 'Post 2', likes: 5, comments: 4, isChecked: false },
        { id: 3, title: 'Post 3', likes: 8, comments: 1, isChecked: false },
        { id: 4, title: 'Post 4', likes: 6, comments: 3, isChecked: false },
        { id: 5, title: 'Post 5', likes: 4, comments: 5, isChecked: false },
        { id: 6, title: 'Post 6', likes: 7, comments: 2, isChecked: false },
        { id: 7, title: 'Post 7', likes: 2, comments: 7, isChecked: false },
        { id: 8, title: 'Post 8', likes: 3, comments: 4, isChecked: false },
        { id: 9, title: 'Post 9', likes: 9, comments: 3, isChecked: false },
        { id: 10, title: 'Post 10', likes: 1, comments: 8, isChecked: false },
        { id: 11, title: 'Post 11', likes: 5, comments: 6, isChecked: false },
    ],
    currentPage: 1,
    postsPerPage: 10,
    totalPages: 2,
    allChecked: false,

    setPosts: (posts) => {
        const postsPerPage = get().postsPerPage;
        const totalPages = Math.ceil(posts.length / postsPerPage);
        const allChecked = posts.length > 0 && posts.every(post => post.isChecked);
        set({ posts, totalPages, allChecked });
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
    }
}));
