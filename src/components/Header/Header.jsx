import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

import { RxGithubLogo, RxNotionLogo } from 'react-icons/rx';
import { BsPencil } from 'react-icons/bs';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <img className={styles.profile} src="/profile.jpeg" alt="profile" />
        <span className={styles.author}>@IMJOne</span>
        <Link to={'/'}>
          <h1 className={styles.title}>제이원 개발 블로그</h1>
        </Link>
        <p className={styles.description}>I’m Front-end developer with enjoys coding</p>
        <div className={styles.bottom}>
          <div className={styles.link_wrap}>
            <a href="https://github.com/IMJOne" target="_blank" rel="noreferrer" className={styles.link}>
              <RxGithubLogo />
            </a>
            <a
              href="https://www.notion.so/imjone/Front-end-e2a9e223ccc347888fcaa8956ed1a1c7?pvs=4"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <RxNotionLogo />
            </a>
          </div>
          <Link to={'/new'} className={styles.new}>
            <BsPencil />
            글쓰기
          </Link>
        </div>
      </nav>
    </header>
  );
}
