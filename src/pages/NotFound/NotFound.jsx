import styles from './NotFound.module.css';
import { BiMessageAltError } from 'react-icons/bi';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className={styles.container}>
      <BiMessageAltError fontSize={100} />
      <p className={styles.comment}>
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        입력하신 주소가 정확한지 다시 한 번 확인해주세요.
      </p>
      <Button text="홈으로 가기" onClick={() => navigate('/')} />
    </section>
  );
}
