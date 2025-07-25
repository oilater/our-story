# 단계별 회원가입 폼 구현 

## 프리뷰

https://github.com/user-attachments/assets/6a2e4425-dabc-471f-bcbd-17ac89b31f1c


## 프로젝트 실행 방법

### 설치
```bash
pnpm install
```

### 개발 서버 실행
```bash
pnpm dev
```


## 기술 스택 및 선택 이유

### React
- 컴포넌트 기반 UI 개발을 위해 사용했습니다.

### TypeScript
- 타입 안전성을 보장해 에러를 사전에 방지하기 위해 사용했습니다.

### Emotion
- CSS-in-JS 방식으로 컴포넌트와 스타일의 결합도를 높이고, 가장 익숙한 라이브러리라 css prop 방식으로 사용했습니다.

### Jotai
- 가벼운 상태 관리 라이브러리이며, 단계별 화면에서 편하게 Step에 접근하기 위해 사용했습니다.

### react-hook-Form
- 폼 상태 관리 및 유효성 검사를 효율적으로 하고, 성능을 최적화하기 위해 사용했습니다.

### GSAP
- State에 따른 컴포넌트 전환 시 enter/exit 애니메이션을 주기 위해 사용했습니다.
- 또한 useGSAP 훅을 통해 편리하게 애니메이션을 제어할 수 있어서 사용했습니다.


### pnpm
- npm보다 빠른 패키지 설치와 엄격하게 의존성을 관리해서 사용했습니다.
