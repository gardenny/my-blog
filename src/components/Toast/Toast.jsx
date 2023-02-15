import styles from './Toast.module.css';
import { useDispatch } from 'react-redux';
import { deleteToast } from '../../store/toastSlice';
import { AiOutlineClose } from 'react-icons/ai';

export default function Toast({ toast }) {
  const { type, text } = toast;
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteToast());

  return (
    <div className={`${styles.toast} ${type || 'success'}`} onClick={handleDelete}>
      <span>{text}</span>
      <AiOutlineClose className={styles.close} />
    </div>
  );
}
