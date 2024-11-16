# base-react  
이 프로젝트는 기본적인 React 프로젝트 설정입니다.  
**수정날짜:** 2024-11-16

# Directory
    my-react-app/
    ├── public/
    │   └── index.html        # 앱의 기본 HTML 파일
    ├── src/
    │   ├── assets/
    │   │   ├── css/          # 스타일 시트 폴더
    │   │   └── img/          # 이미지 폴더
    │   ├── components/       # 재사용 가능한 컴포넌트 폴더
    │   ├── hooks/            # 커스텀 훅을 정의하는 폴더
    │   ├── pages/            # 각 페이지 컴포넌트
    │   │   └── page/         # 페이지별 디렉토리
    │   ├── redux/            # 상태 관리 관련 파일 (스토어 설정)
    │   ├── router/           # 라우팅 관련 설정
    │   ├── types/            # 타입스크립트 타입 정의 (선택 사항)
    │   ├── utils/            # 유틸리티 함수들
    │   ├── App.jsx           # 메인 애플리케이션 컴포넌트
    │   ├── index.js          # 애플리케이션 엔트리 포인트
    │   └── styles.css        # 전역 스타일 파일
    ├── package.json          # 프로젝트 의존성 및 설정
    └── README.md             # 프로젝트 설명서

# Create
    npx create-react-app base-react

# Start & Build
    npm start
    npm run build

# Install npm
    Axios (서버 통신)
        - npm install axios

    Redux (상태 관리)
        - npm install react-redux
        - npm i @reduxjs/toolkit 

    React Router (라우터)
        - npm i react-router-dom 