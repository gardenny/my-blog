import { useLocation } from 'react-router-dom';
import PostEditor from '../../components/PostEditor/PostEditor';

export default function Edit() {
  const {
    state: { content },
  } = useLocation();

  return <PostEditor isEdit={true} targetPost={content} />;
}
