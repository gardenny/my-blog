import React from 'react';
import styles from './Button.module.css';

export default function Button({ text, onClick, ...props }) {
  return (
    <button className={styles.button} style={{ ...props }} onClick={onClick}>
      {text}
    </button>
  );
}
