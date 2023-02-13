import React from 'react';
import styles from './Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profile}>
      <img className={styles.image} src="/profile.jpeg" alt="profile" />
      <span className={styles.author}>@IMJOne</span>
      <p className={styles.description}>I’m Front-end developer with enjoys coding</p>
    </div>
  );
}
