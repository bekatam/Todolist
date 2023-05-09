import { useState } from 'react';
import './AddTask.css';
import AddTaskModal from './AddTaskModal';
type ModalProps = {
	textOfTask: any,
	createTask: any
}
export default function AddTask(props: ModalProps) {
	const {textOfTask, createTask} = props;
	const [addIsClicked, setAddIsClicked] = useState(false);
	const openModal = () => {
		setAddIsClicked(!addIsClicked);
	}
  return (
		<>
			<button onClick = {openModal} className={addIsClicked ? "addTask addTask_active" : "addTask"}>
				<div className="addTask__verticalLine"></div>
				<div className="addTask__horizontalLine"></div>
			</button>
			{addIsClicked && <AddTaskModal textOfTask = {textOfTask} createTask={createTask} />}
		</>
	)
}