import React from 'react';
import styles from './Header.module.css';
import { RxGithubLogo, RxNotionLogo } from 'react-icons/rx';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.title}>제이원 개발 블로그</h1>
        <p className={styles.description}>I’m Front-end developer with enjoys coding</p>
        <div className={styles.icons}>
          <a href="https://github.com/IMJOne" target="_blank" rel="noreferrer" className={styles.icon}>
            <RxGithubLogo />
          </a>
          <a
            href="https://www.notion.so/imjone/Front-end-e2a9e223ccc347888fcaa8956ed1a1c7?pvs=4"
            target="_blank"
            rel="noreferrer"
            className={styles.icon}
          >
            <RxNotionLogo />
          </a>
        </div>
      </nav>
    </header>
  );
}
