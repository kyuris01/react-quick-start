- 새로운 할 일 아이템 추가를 위해 타이핑할 때 todoList 상태에는 변화가 없음에도 Todolist와 TodoListItem 컴포넌트가 모두가 리렌더링됨
  - 이는 App 컴포넌트의 todo 상태가 바뀌기때문에 App 컴포넌트가 렌더링되면서 자식 컴포넌트인 TodoList, TodoListItem 컴포넌트 모두를 렌더링하기때문
