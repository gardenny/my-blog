import React from 'react';
import styles from './PostItem.module.css';
import { useNavigate } from 'react-router-dom';

import PostInfo from '../../components/PostInfo/PostInfo';
import getStringDate from '../../util/data';

export default function PostItem({ posts: { id, image, category, date, title, description } }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.item} onClick={() => navigate(`/posts/${id}`)}>
        <div>
          <PostInfo category={category} date={getStringDate(new Date(date))} />
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <div className={styles.image_wrap}>{image && <img className={styles.image} src={image} alt={category} />}</div>
      </div>
    </>
  );
}
