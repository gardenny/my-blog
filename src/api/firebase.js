import { initializeApp } from 'firebase/app';
import { get, getDatabase, ref, set } from 'firebase/database';
import { getDownloadURL, getStorage, uploadBytes } from 'firebase/storage';
import { ref as storageRef } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

// 게시글 업로드
export const addPost = post => {
  return set(ref(database, `posts/${post.id}`), post);
};

export const getPosts = async () => {
  const snapshot = await get(ref(database, 'posts'));
  const items = snapshot.val() || {};
  return Object.values(items);
};

// 이미지 스토리지에 업로드
export const addImage = async file => {
  return uploadBytes(storageRef(storage, file.name), file).then(snapshot => {
    console.log(snapshot);
    getDownloadURL(snapshot.ref).then(url => console.log(url));
  });
};
