'''
const TodoList = () => {
const value = useContext(TodoContext);

let items = value?.state.todoList.map((item) => {
return (
<TodoListItem
        key={item.no}
        todoItem={item}
        deleteTodo={value?.actions.deleteTodo}
        toggleDone={value?.actions.toggleDone}
      ></TodoListItem>
);
});

return (
<div className="row">
{" "}
<div className="col">
<ul className="list-group">{items}</ul>
</div>
</div>
);
};
'''

- TodoListItem은 Context를 이용해 상태값을 얻는게 아니라 TodoList 컴포넌트에서 자식컴포넌트로 속성을 전달하는 기존의 방식을 그대로 이용하고있는데, 그 이유는 배열의 각 항목을 일일이 TodoListItem 컴포넌트에서 Context를 이용해 가져오려면 오히려 그게 더 귀찮은 방법이기 때문이다.
