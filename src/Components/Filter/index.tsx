import { useState } from "react";
import Filtered from "./Filtered";
import './Filter.css';
import AddTask from "../AddTask";
import Todo from "../Todo";
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

export default function Filter() {

	const [filters, setFilters] = useState([
		{
			name: "To-Do",
			isActive: true,
		},
		{
			name: "Done",
			isActive: false,
		},
		{
			name: "Trash",
			isActive: false,
		},
	]);

	const [todos, setTodos] = useState([
		{
			taskName: 'Write Essay',
			isDone: false,
			isDeleted: false,
			id: uuid()
		},
		{
			taskName: 'To do to do list',
			isDone: false,
			isDeleted: false,
			id: uuid()
		},
		{
			taskName: 'Go to Gym',
			isDone: false,
			isDeleted: true,
			id: uuid()
		},
		{
			taskName: 'Buy groceries',
			isDone: true,
			isDeleted: false,
			id: uuid()
		}
	])

	const[taskName, setTaskName] = useState('');

	const handleClick = (itemName: string) => {
		const newFilters = filters.map((item)=>{
			if(item.name === itemName) {
				item.isActive = true;
			} else {
				item.isActive = false;
			}
			return item;
		})
		setFilters(newFilters);
	}

	let title = filters.map((item)=>{
		if (item.isActive) return item.name;
	})

	const textOfTask = (e?: any) => {
		setTaskName(e.target.value);
	}

	const createTask = () => {
		const newTask = {
			taskName: taskName,
			isDone: false,
			isDeleted: false,
			id: uuid()
		}
		if(taskName.trim().length > 0 && taskName) setTodos([newTask, ...todos]);
	}

	const handleDone = (id: string) => {
		const newToDoList = todos.map((item) => {
			if (id === item.id) {
				return {
					...item,
					isDone: !item.isDone,
					isDeleted: false
				};
			}
			return item;
		});
		setTodos(newToDoList);
	};

	const handleDelete = (id: string) => {
		const newToDoList = todos.map((item) => {
			if (id === item.id) {
				return {
					...item,
					isDeleted: true,
					isDone: false
				};
			}
			return item;
		});
		setTodos(newToDoList);
	};

	const handleReturn = (id: string) => {
		const newToDoList = todos.map((item) => {
			if (id === item.id) {
				return {
					...item,
					isDeleted: false
				};
			}
			return item;
		});
		setTodos(newToDoList);
	};

	const handleDeleteForever = (id: string) => {
		const newToDoList = todos.filter((item) => item.id !== id);
		setTodos(newToDoList);
	};
	
	
  return (
		<>
			<div className="filter__wrapper">
				<div className="filtered__wrapper">
					{filters.map((item, index) => {
						return <Link to={`./${item.name}`}>
							<Filtered key = {index} name={item.name} bool={item.isActive} handleClick = {handleClick}/>
						</Link>
					})}
				</div>
				<AddTask textOfTask = {textOfTask} createTask={createTask}/>
			</div>
			<div className="filter__title">{title}</div>
			{filters.map((item, index)=>{
				if (item.isActive) {
					return <Todo key = {index} nameOfFilter = {item.name} todos={todos} setTodos={setTodos} handleDone={handleDone} handleDelete={handleDelete} handleReturn={handleReturn} handleDeleteForever={handleDeleteForever}/>
				}
			})}
		</>

	)
};