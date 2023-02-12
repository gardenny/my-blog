import React from 'react';
import styles from './PostCard.module.css';
import getStringDate from '../../util/data';

export default function PostCard({ posts }) {
  return (
    <>
      {posts.map(({ id, image, category, date, title, description }) => (
        <li className={styles.card} key={id}>
          <div className={styles.container}>
            <span className={styles.category}>{category}</span>
            <span className={styles.date}>{getStringDate(new Date(date))}</span>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
          </div>
          <div className={styles.image_wrap}>
            {image && <img className={styles.image} src={image} alt={category} />}
          </div>
        </li>
      ))}
    </>
  );
}
