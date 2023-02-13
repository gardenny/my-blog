import styles from './PostInfo.module.css';

export default function PostInfo({ category, date }) {
  return (
    <div className={styles.info}>
      <span className={styles.category}>{category}</span>
      <span className={styles.date}>{date}</span>
    </div>
  );
}
