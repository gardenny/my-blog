import React, { useEffect, useState } from 'react';
import styles from './PostDetail.module.css';
import { useNavigate, useParams } from 'react-router-dom';

// Toast 에디터
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism-dark.css';

import usePost from '../../hooks/usePost';
import { usePostContext } from '../../context/PostProvider';
import getStringDate from '../../util/data';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import NotFound from '../NotFound';
import PostInfo from '../../components/PostInfo/PostInfo';
import Button from '../../components/Button/Button';
import Profile from '../../components/Profile/Profile';

export default function PostDetail() {
  const [content, setContent] = useState('');
  const { postId } = useParams();
  const { isLoading, error, posts } = usePostContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (posts) {
      const targetPost = posts.find(post => post.id === postId);
      setContent(targetPost);
    }
  }, [posts, postId]);

  const { id, category, date, title, image, body } = content;
  const { onRemove } = usePost();

  const goEdit = () => navigate(`/posts/${id}/edit`, { state: { content } });
  const handleRemove = () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      onRemove.mutate(id);
      alert('게시글이 삭제되었습니다.');
      navigate('/', { replace: true });
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <NotFound />;
  return (
    <>
      <div className={styles.head}>
        <div className={styles.meta}>
          <PostInfo category={category} date={getStringDate(new Date(date))} />
          <div className={styles.btn_wrap}>
            <Button text={'수정하기'} padding="0.2rem" fontSize="0.75rem" onClick={goEdit} />
            <Button text={'삭제하기'} padding="0.2rem" fontSize="0.75rem" onClick={handleRemove} />
          </div>
        </div>
        <h1 className={styles.title}>{title}</h1>
        {image && (
          <div className={styles.image_wrap}>
            <img className={styles.image} src={image} alt={category} />
          </div>
        )}
      </div>
      <Viewer plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} initialValue={body || ''} theme="dark" />
      <Profile />
    </>
  );
}
