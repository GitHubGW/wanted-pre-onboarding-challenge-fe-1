<div align="center">
  <img height="100" src="./readme/wanted_logo.png" />
  <h3>프리온보딩 프론트엔드 챌린지 1월</h3>
  <br /><br />
</div>

## 목차

- 🚀 [프로젝트 실행](#프로젝트-실행)
- 🔥 [사용한 기술](#사용한-기술)
- 📑 [프로젝트 구조](#프로젝트-구조)
- ⚙ [주요 기능](#주요-기능)
- 🧷 [API 스펙](#API-스펙)

## 프로젝트 실행

1. `git clone https://github.com/GitHubGW/wanted-pre-onboarding-challenge-fe-1`를 통해 리포지토리를 클론합니다.
2. `npm install`을 통해 필요한 라이브러리를 설치합니다.
3. `npm start`를 통해 프로젝트를 실행합니다.

```
git clone https://github.com/GitHubGW/wanted-pre-onboarding-challenge-fe-1
npm install
npm start
```

## 사용한 기술

- `React`

  - React는 주로 SPA를 위한 사용자 인터페이스를 만드는 데 사용되는 Javascript 라이브러리입니다.
  - 단방향 데이터 흐름을 통해 데이터 흐름 및 변화를 예측하기 쉽고, 컴포넌트 기반 구조를 통해 재사용성과 코드 관리 및 유지보수를 위해 사용하였습니다.

- `NextJS`

  - Next.js는 서버사이드 렌더링, 정적 페이지 생성 등 리액트 기반 웹 애플리케이션 기능을 위한 웹 개발 프레임워크입니다.

- `Typescript`

  - Typescript는 Javascript 슈퍼셋 언어입니다.
  - 타입을 미리 지정해서 런타임 이전 단계에서 미리 에러를 확인할 수 있고, 코드 자동 완성 및 디버깅을 위해 사용하였습니다.

- `React Query`

  - React Query는 데이터 Fetching, 캐싱, 동기화, 서버 쪽 데이터 업데이트 등을 위한 라이브러리입니다.
  - 각 페이지에서 공통으로 사용하는 전역 상태가 적고 서버 쪽 데이터들을 간편하고 효율적으로 관리하기 위해 사용하였습니다.

- `React Hook Form`

  - React Hook Form은 React에서 Form을 제어하고 유효성 검사 및 에러를 처리할 수 있는 라이브러리입니다.
  - 전체 코드 양을 줄이고, 일관적인 코드 작성 및 유지보수, 렌더링 이슈 등을 해결하기 위해 사용하였습니다.

- `Tailwind CSS`
  - Tailwind CSS는 유틸리티 퍼스트(Utility-first)를 지향하는 오픈 소스 CSS 프레임워크입니다.
  - 일관된 디자인과 자유로운 커스터마이징 및 생산성을 위해 사용하였습니다.

## 프로젝트 구조

- api : API 관리
- components : 컴포넌트 관리
- constants : 상수 관리
- pages : 라우팅 관리
- queries : 리액트 쿼리 관리
- styles : 스타일 관리
- types : 공통 타입 관리
- utils : 유틸리티 함수 관리

```bash
 ┣ api
 ┃ ┣ auth.ts
 ┃ ┗ todo.ts
 ┣ components
 ┃ ┣ layouts
 ┃ ┃ ┗ MainLayout.tsx
 ┃ ┣ AuthForm.tsx
 ┃ ┣ FormError.tsx
 ┃ ┣ TodoDetail.tsx
 ┃ ┣ TodoDetailItem.tsx
 ┃ ┣ TodoForm.tsx
 ┃ ┣ TodoItem.tsx
 ┃ ┗ TodoList.tsx
 ┣ constants
 ┃ ┣ auth.ts
 ┃ ┣ common.ts
 ┃ ┗ queryKeys.ts
 ┣ pages
 ┃ ┣ _app.tsx
 ┃ ┣ _document.tsx
 ┃ ┣ auth.tsx
 ┃ ┗ index.tsx
 ┣ queries
 ┃ ┣ useAuthMutate.ts
 ┃ ┣ useTodoMutate.ts
 ┃ ┗ useTodoQuery.ts
 ┣ styles
 ┃ ┗ globals.css
 ┣ types
 ┃ ┣ auth.ts
 ┃ ┗ todo.ts
 ┣ utils
 ┃ ┗ localStorage.ts
```

## 주요 기능

### 회원가입, 로그인, 로그아웃

- /auth 경로에 로그인 및 회원가입 기능을 구현하였습니다.
- 회원가입 및 로그인 성공 시, 전달받은 토큰을 로컬 스토리지에 저장하고 루트 경로로 이동시킵니다.
- 로그아웃 시, 로컬 스토리지에 저장된 토큰을 삭제하고 /auth 경로로 이동시킵니다.

```tsx
// components/AuthForm.tsx
const { useSignUpMutation, useLoginMutation } = useAuthMutation();
const { mutateAsync: signUpMutateAsync, data: signUpData } = useSignUpMutation();
const { mutateAsync: loginMutateAsync, data: loginData } = useLoginMutation();

const onValid = useCallback(
  async (formData: FormData) => {
    if (status === AUTH_STATE.SIGN_UP) {
      const result = await signUpMutateAsync(formData);
      if (result.token) {
        reset();
        setLocalStorageItem(result.token);
        setStatus(AUTH_STATE.LOGIN);
      }
    } else {
      const result = await loginMutateAsync(formData);
      if (result.token) {
        reset();
        setLocalStorageItem(result.token);
        router.push("/");
      }
    }
  },
  [status, reset, router, signUpMutateAsync, loginMutateAsync]
);
```

- `React Hook Form`을 사용하여 form을 제어하고, 이메일과 비밀번호의 유효성 확인 및 에러를 대응합니다.

```tsx
<input
  {...register("email", {
    required: "이메일은 필수입니다.",
    validate: (value) => {
      const isValidText = value.includes("@") && value.includes(".");
      return isValidText || "이메일에는 @와 .이 포함되어야 합니다.";
    },
  })}
  required
  type="email"
  id="emailInput"
/>
<FormError text={errors.email?.message} />
```

### 투두 생성, 수정, 삭제

- 투두 추가 및 삭제 버튼을 클릭해 할 일을 생성하거나 삭제할 수 있습니다.
- 투두 수정 버튼을 클릭하면 수정 모드가 활성화되고, 수정 내용을 제출하거나 취소할 수 있습니다.

```tsx
// components/TodoForm.tsx
const { useCreateTodoMutation, useUpdateTodoMutation } = useTodoMutation();
const { mutate: createTodoMutate } = useCreateTodoMutation();
const { mutate: updateTodoMutate } = useUpdateTodoMutation();

const onValid = useCallback(
  (formData: FormData) => {
    if (isUpdating && id && handleToggleTodo) {
      handleToggleTodo();
      reset();
      updateTodoMutate({ id, title: formData.title, content: formData.content });
    } else {
      reset();
      createTodoMutate({ title: formData.title, content: formData.content });
    }
  },
  [updateTodoMutate, createTodoMutate, handleToggleTodo, isUpdating, id, reset]
);
```

- 수정한 투두의 내용은 전체 투두 목록 및 투두 상세에 실시간으로 반영됩니다.
- 수정한 투두의 내용을 실시간으로 반영하기 위해 `React Query`의 invalidateQueries 메서드를 통해 기존에 조회했던 쿼리를 무효화시키고 데이터를 새로 조회해오도록 합니다.
- invalidateQueries 메서드는 전달받은 쿼리 키에 해당하는 모든 쿼리를 무효화합니다.

```ts
// queries/useTodoMutation.ts
const useUpdateTodoMutation = () => {
  return useMutation({
    mutationFn: (params: UpdateTodoParams) => TodoApi.updateTodo({ id: params.id, title: params.title, content: params.content }),
    onSuccess: (response) => {
      queryClient.invalidateQueries(QUERY_KEYS.TODO.GET_TODOS());
      queryClient.invalidateQueries(QUERY_KEYS.TODO.GET_TODO_BY_ID(response.data.id));
    },
    onError: (error) => {
      console.log("useUpdateTodo onError", error);
    },
  });
};
```

### 전체 투두 조회 및 상세 조회

- 전체 투두 목록과 각각의 투두의 상세 내용을 확인할 수 있습니다.

```tsx
// components/TodoList.tsx
const TodoList = () => {
  const { useGetTodosQuery } = useTodoQuery();
  const { data: todosData, isLoading } = useGetTodosQuery();

  if (isLoading) {
    return "Loading...";
  }

  return <div>{todosData?.data && [...todosData?.data]?.reverse().map((item) => <TodoItem key={item.id} id={item.id} title={item.title} createdAt={item.createdAt} />)}</div>;
};

// components/TodoDetail.tsx
const TodoDetail = () => {
  const { useGetTodoByIdQuery } = useTodoQuery();
  const { data: todoData } = useGetTodoByIdQuery({ id: String(router.query.id) });

  return (
    <div>
      {todoData?.data && !isUpdating && (
        <TodoDetailItem title={todoData.data.title} content={todoData.data.content} createdAt={todoData.data.createdAt} updatedAt={todoData.data.updatedAt} />
      )}
    </div>
  );
};
```

## API 스펙

### login

- POST /users/login
- Parameter
  - email: string
  - password: string

### signUp

- POST /users/create
- Parameter
  - email: string
  - password: string

### getTodos

- GET /todos
- Headers
  - Authorization: login token

### getTodoById

- GET /todos/:id
- Headers
  - Authorization: login token

### createTodo

- POST /todos
- Parameter
  - title: string
  - content: string
- Headers
  - Authorization: login token

### updateTodo

- PUT /todos/:id
- Parameter
  - title: string
  - content: string
- Headers
  - Authorization: login token

### deleteTodo

- DELETE /todos/:id
- Headers
  - Authorization: login token
