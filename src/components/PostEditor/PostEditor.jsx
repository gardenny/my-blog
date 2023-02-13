import { useState, useRef } from 'react';
import styles from './PostEditor.module.css';

import { useNavigate } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import uuid from 'react-uuid';

// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

// color-syntax 플러그인
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import 'tui-color-picker/dist/tui-color-picker.css';

// code-syntax-highlight 플러그인
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs'; // prism 테마 추가
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism-dark.css';

import Button from '../Button/Button';
import { getCoverImageUrl } from '../../api/firebase';
import usePost from '../../hooks/usePost';

const optionList = ['html', 'css', 'javascript', 'react', 'git', 'project', 'web', 'tip', 'error', 'setting', 'etc'];
const toolbarItems = [
  // 툴바 옵션 설정
  ['heading', 'bold', 'italic', 'strike'],
  ['hr', 'quote'],
  ['ul', 'ol', 'code', 'codeblock'],
];

export default function PostEditor() {
  const [content, setContent] = useState({ category: optionList[0], title: '', description: '', body: '' });
  const { image, category, title, description, body } = content;

  const { onAdd } = usePost();
  const navigate = useNavigate();

  const titleRef = useRef();
  const editorRef = useRef();

  const uploadImage = e => {
    const file = e.target.files[0];
    getCoverImageUrl(file).then(url => setContent({ ...content, image: url }));
  };

  const handleContent = e => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  };

  const handleEditor = () => {
    const text = editorRef.current.getInstance().getMarkdown();
    setContent({ ...content, body: text });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (title.trim().length <= 0) {
      alert('제목을 입력해주세요.');
      titleRef.current.focus();
      return;
    }
    if (body.trim().length === 0) {
      alert('내용을 입력해주세요.');
      editorRef.current.getInstance().focus();
      return;
    }

    if (window.confirm('새 게시글을 작성하시겠습니까?')) {
      onAdd.mutate({
        id: uuid(),
        image: image || null,
        category,
        title,
        description: description || null,
        body,
        date: new Date().getTime(),
      });
      alert('게시글이 작성되었습니다.');
      navigate('/', { replace: true });
    }
  };

  return (
    <form className={styles.form}>
      <div>
        <label className={styles.label}>
          {image ? <img className={styles.image} src={image} alt={title} /> : <FaCamera className={styles.icon} />}
          <input className={styles.input_file} type="file" name="image" accept="image/*" onChange={uploadImage} />
        </label>
      </div>
      <div>
        <h3>분류</h3>
        <select className={styles.select} name="category" onChange={handleContent}>
          {optionList.map((option, index) => (
            <option key={index}>{option.toLocaleUpperCase()}</option>
          ))}
        </select>
      </div>
      <div>
        <h3>제목</h3>
        <input className={styles.input_text} type="text" name="title" ref={titleRef} onChange={handleContent} />
      </div>
      <div>
        <h3>설명</h3>
        <input className={styles.input_text} type="text" name="description" onChange={handleContent} />
      </div>
      <div>
        <h3>내용</h3>
        <Editor
          plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
          initialEditType="wysiwyg"
          hideModeSwitch={true}
          toolbarItems={toolbarItems}
          autofocus={false}
          language="ko-KR"
          theme="dark"
          height="500px"
          ref={editorRef}
          onChange={handleEditor}
        ></Editor>
      </div>
      <Button text={'게시글 작성하기'} onClick={handleSubmit} />
    </form>
  );
}
