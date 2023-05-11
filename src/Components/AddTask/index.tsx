import { useState } from 'react';
import './AddTask.css';
import AddTaskModal from './AddTaskModal';
type ModalProps = {
	textOfTask: any,
	createTask: any,
	taskName: string,
	setTaskName: any,
	sumbitOnEnter: any,
	openModal: any,
	addIsClicked: boolean
}
export default function AddTask(props: ModalProps) {
	const {textOfTask, createTask, taskName, setTaskName, sumbitOnEnter, openModal, addIsClicked} = props;

  	return (
		<>
			<button onClick = {openModal} className={addIsClicked ? "addTask addTask_active" : "addTask"}>
				<div className="addTask__verticalLine"></div>
				<div className="addTask__horizontalLine"></div>
			</button>
			{addIsClicked && <AddTaskModal 
								textOfTask = {textOfTask} 
								createTask={createTask} 
								taskName={taskName} 
								setTaskName={setTaskName} 
								sumbitOnEnter={sumbitOnEnter}
							/>}
		</>
	)
}