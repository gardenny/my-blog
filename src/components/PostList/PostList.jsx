import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import { getAllPosts } from '../../api/firebase';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(response => setPosts(response));
  }, []);

  return <PostCard posts={posts} />;
}
