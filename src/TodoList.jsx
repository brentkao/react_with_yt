import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo}) {
  return (
    <ul className="list">
      {todos.length === 0 && <li>No Todo</li>}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            // id={todo.id}
            // completed={todo.completed}
            // title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
