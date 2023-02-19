![blog](https://user-images.githubusercontent.com/110226567/219267513-bf2ba964-d65a-45ef-8996-88942cd60e8a.png)

# ✏️ My Blog

나만의 개발 블로그 사이트 👉 [Demo](https://jone-dev-blog.netlify.app)

<br />

## 📢 프로젝트 개요

그동안 공부한 내용들을 토대로 조금 의미 있는 프로젝트를 진행해보고 싶었던 찰나,<br />
문득 개발자라면 블로그 사이트 하나 정도는 있어야 하지 않나.. 하는 생각이 들었습니다.<br />
조만간 velog를 시작할 예정이긴 하지만, 직접 구현해보고 싶은 욕심이 들어 제작하게 되었습니다.

<br />

## 🗨️ 사용 기술

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=ReactRouter&logoColor=white"/>
  <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=ReactQuery&logoColor=white"/>
  <img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=PostCSS&logoColor=white"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white"/>
</p>

<br />

## 📋 주요 기능

- 새로운 포스트 작성 및 수정 / 삭제
- 제목 단위로 검색하여 원하는 포스트 열람
- 라이브러리를 활용하여 마크다운 언어 표현
- 포스트 작업 결과에 따른 토스트 팝업창 노출
- 파이어베이스와 연동하여 데이터 실시간 업데이트

<br />

## 💻 소스 코드

전체 코드 보러 가기 👉 [Notion](https://www.notion.so/imjone/Blog-1069c963a9d646368e3415bff6739ac7?pvs=4)

### 📍 마크다운 에디터 컴포넌트

Toast UI Editor 라이브러리를 활용하여 마크다운 언어를 표현하였습니다.<br />
제목 크기, 글자 색상 및 코드 블럭 등 다양한 툴을 이용하여 포스트를 작성할 수 있습니다.

```javascript
// PostEditor.jsx

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

// 툴바 옵션 설정
const toolbarItems = [
  ['heading', 'bold', 'italic', 'strike'],
  ['hr', 'quote'],
  ['ul', 'ol', 'code', 'codeblock'],
];

<Editor
  initialEditType="wysiwyg"
  hideModeSwitch={true}
  toolbarItems={toolbarItems}
  autofocus={false}
></Editor>;
```

### 📍 마크다운 뷰어 컴포넌트

Toast UI Editor 라이브러리에서 제공하는 `Viewer` 컴포넌트를 렌더링합니다.<br />
포스트 상세 페이지에서 작성된 마크다운 콘텐츠를 그대로 확인해볼 수 있습니다.

```javascript
// PostDetail.jsx

import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

const { id, category, date, title, image, body } = content;

<Viewer
  plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
  initialValue={body || ''}
/>;
```

### 📍 마크다운 콘텐츠 수정

컴포넌트 렌더링 시 `setMarkdown` 메소드를 통해 에디터의 초기 콘텐츠를 세팅합니다.<br />
수정 모드일 경우 기존의 내용을 그대로 불러오며, 내용을 자유롭게 수정할 수 있습니다.

```javascript
// PostEditor.jsx

const [content, setContent] = useState(isEdit ? targetPost : initialContent);
const { id, image, category, title, description, body } = content;

useEffect(() => {
  if (isEdit) {
    const editorInstance = editorRef.current.getInstance();
    const currentMarkdown = editorInstance.getMarkdown();
    if (currentMarkdown !== body) editorInstance.setMarkdown(body);
  }
}, [isEdit, body]);
```

<br />

## 😊 배운 점 및 느낀 점

- 리덕스 툴킷을 처음으로 사용해볼 수 있어 좋은 경험이었습니다.
- 글로벌 상태 관리에 대한 지식과 숙련도가 더 필요하다고 느꼈습니다.
- 에러를 잡아나가는 과정에서 능동적 문제 해결 능력을 기를 수 있었습니다.
- 프로젝트의 기획부터 기능까지 직접 고민하고 구현해나가며 큰 성취감을 얻었습니다.
