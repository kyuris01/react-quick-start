- App컴포넌트의 todo 상태가 변경되면서 deleteTodo 함수가 새롭게 생성되는데, 이 함수가 TodoList, TodoListItem 컴포넌트로 속성을 통해 전달됨
  - TodoList, TodoListItem 컴포넌트의 기존 deleteTodo 함수와 얕은 비교 (참조되는 위치 비교) 결과가 false 이므로 매번 렌더링됨

* 이를 최적화하기 위해서는 두 가지 방법이 존재
  - React.memo 고차함수와 useCallback 훅을 함께 적용
  - React.memo 고차함수의 두번째 인자 사용
