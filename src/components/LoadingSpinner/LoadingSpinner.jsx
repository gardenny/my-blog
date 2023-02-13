import { ThreeDots } from 'react-loader-spinner';
import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <ThreeDots color="#804752" />
    </div>
  );
}
