import { initializeApp } from 'firebase/app';
import { get, getDatabase, ref as dbRef, set } from 'firebase/database';
import { getDownloadURL, getStorage, uploadBytes, ref as storageRef } from 'firebase/storage';

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

// 모든 게시글 최신 날짜순으로 정렬하여 가져오기
export const getAllPosts = async () => {
  return get(dbRef(database, 'posts')).then(snapshot => {
    const items = snapshot.val() || {};
    return Object.values(items).sort((a, b) => b.date - a.date);
  });
};

// 이미지 스토리지에 업로드
export const getCoverImageUrl = async file => {
  return uploadBytes(storageRef(storage, file.name), file).then(snapshot => getDownloadURL(snapshot.ref));
};

// 게시글 업로드
export const addNewPost = async posts => {
  return set(dbRef(database, `posts/${posts.id}`), posts);
};
