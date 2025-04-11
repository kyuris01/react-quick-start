- 할 일 아이템 여러개 추가한 뒤 아이템의 삭제버튼 클릭하면, 해당 할일 아이템 포함하여 그 이후에 추가한 모든 할 일 아이템이 삭제되는 현상 발생
  - 이는 각각의 TodoListItem 컴포넌트에 전달된 deleteTodo 함수는 useCallbcak에 의해서 의존하는 todoList 객체를 참조하고 있는데, 이 deleteTodo 함수가 React.memo 고차함수에 의해 메모이징 되고 있기 때문
  * deleteTodo 함수는 useCallback 훅에 의해 todoList 가 변할때만 새로 생성이 되고 있음
  * 이 deleteTodo 함수를 TodoListItem 컴포넌트가 props 로 받는데, 이때 TodoListItem 컴포넌트는 React.memo 때문에 얕은 비교 결과 true 이면 리렌더링 하지 않음
  * TodoListItem 컴포넌트는 리렌더링을 하지 않기때문에, 이전에 받았던 deleteTodo 함수를 계속 갖고있고, 그렇게 메모이징된 deleteTodo 함수가 참조하는 todoList 는 업데이트되지 않았기 때문에 이후에 추가된 todo 들은 todoList 에 포함되어있지않고, 이때 deleteTodo 함수가 실행되면 자신을 삭제하므로 자기 앞의 todo 까지만 남게되는것임
