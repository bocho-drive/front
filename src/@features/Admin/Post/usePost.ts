import {create} from "zustand"

interface Post {
    id: number;
    title: string;
    likes: number;
    comments: number;
    isChecked: boolean;
  }

interface Props {
    posts : Post[]
}
interface Actions {
    setPosts: (posts : Post[]) => void;
    handleSort: (criteria: string) => void;
    handleDelete: () => void;
    handleToggleAll : (checked: boolean) => void;
    handleToggle: (id: number) => void;
}

export const usePost = create<Props & Actions>((set,get) => ({
    posts: [
        { id: 1, title: 'Post 1', likes: 10, comments: 2, isChecked: false },
        { id: 2, title: 'Post 2', likes: 5, comments: 4, isChecked: false },
        { id: 3, title: 'Post 3', likes: 8, comments: 1, isChecked: false },
    ],

    setPosts: (posts) => set({posts: posts}),

    handleSort: (criteria) => {
        const {posts, setPosts} = get();

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
        const {posts, setPosts} = get();
        const remainingPosts = posts.filter((post) => !post.isChecked);
        setPosts(remainingPosts);
    },
    handleToggleAll: (checked) => {
        const {posts, setPosts} = get();
        const updatedPosts = posts.map((post) => ({ ...post, isChecked: checked }));
        setPosts(updatedPosts);
    },
    handleToggle : (id) => {
        const {posts, setPosts} = get();
        const updatedPosts = posts.map((post) => (post.id === id ? { ...post, isChecked: !post.isChecked } : post));
        setPosts(updatedPosts);
    }
}))


