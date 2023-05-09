import TodoTask from './TodoTask';
import './Todo.css'
type TodoProps = {
	nameOfFilter: string,
	todos: any[],
	setTodos: any,
	handleDone: any,
	handleDelete: any,
	handleReturn: any,
	handleDeleteForever: any
}
export default function Todo(props: TodoProps) {
	const {todos, setTodos, nameOfFilter, handleDone, handleDelete, handleReturn, handleDeleteForever} = props;
	return (
		<div className='todo'>
			{todos.map((item) => {
				if (
					(nameOfFilter === 'To-Do' && !item.isDeleted && !item.isDone) ||
					(nameOfFilter === 'Done' && item.isDone) ||
					(nameOfFilter === 'Trash' && item.isDeleted)
				) {
					return (
						<TodoTask
							key={item.id}
							id={item.id}
							name={item.taskName}
							isDone={item.isDone}
							isDeleted={item.isDeleted}
							setTodos={setTodos}
							todos={todos}
							handleDone={handleDone}
							handleDelete={handleDelete}
							handleReturn={handleReturn}
							handleDeleteForever={handleDeleteForever}
						/>
					);
				}
				return null;
				})}

		</div> 	 
	)

}