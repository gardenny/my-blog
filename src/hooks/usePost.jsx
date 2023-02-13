import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewPost, removePost } from '../api/firebase';

export default function usePost() {
  const queryQlient = useQueryClient();

  const onAdd = useMutation(posts => addNewPost(posts), {
    onSuccess: () => queryQlient.invalidateQueries('posts'),
  });

  const onRemove = useMutation(postId => removePost(postId), {
    onSuccess: () => queryQlient.invalidateQueries('posts'),
  });

  return { onAdd, onRemove };
}
