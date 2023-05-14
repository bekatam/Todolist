import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import { useState, memo } from 'react';
import TodoDoneModal from './TodoDoneModal';
import CloseIcon from '@mui/icons-material/Close';
type TodoProps = {
	name: string,
	isDone: boolean,
	isDeleted: boolean,
	setTodos:any,
	todos: any[],
	id: string,
	handleDone: any,
	handleDelete: any,
	handleReturn: any,
	handleDeleteForever: any
}
export const TodoTask: React.FC<TodoProps> = memo((props) => {
	const {name, isDone, isDeleted, id, handleDone, handleDelete, handleReturn, handleDeleteForever} = props;
	const [doneModal, setDoneModal] = useState(false);
	const [deletedModal, setDeletedModal] = useState(false);
	const handleMore = () => {
		setDoneModal(!doneModal);
	}
	const handleDeletedModal = () => {
		setDeletedModal(!deletedModal);
	}
	
  return (
		<div className={isDone ? "todo__wrapper todo__wrapper_done" : isDeleted ? "todo__wrapper todo__wrapper_deleted" : "todo__wrapper"}>
			<button className="todo__more" onClick={()=>{isDeleted ? handleDeletedModal() : handleMore()}}>
				<MoreVertIcon sx={{fontSize:16}}/>
				{(!isDeleted && doneModal || isDeleted && deletedModal) && 
					<TodoDoneModal 
						handleReturn = {handleReturn} 
						handleDelete={handleDelete} 
						isDeleted={isDeleted} 
						id={id} 
						handleDeleteForever={handleDeleteForever}
					/>}
			</button>
			<button onClick = {()=>{handleDone(id)}} 
					className={isDone && !isDeleted ? "todo__check todo__check_done" : isDeleted ? "todo__check todo__check_deleted" : "todo__check"}>
					{isDone ? <CheckIcon 
									sx={{fontSize: '16px', color: "#fff"}}
								/> 
					: isDeleted ? <CloseIcon 
										sx={{fontSize: '18px', color: "#fff", transform: 'translate(-2px,-2px)'}}
									/> 
					: <></>}
			</button>
			<div className={isDone ? "todo__task todo__task_done" 
							: isDeleted ? "todo__task todo__task_deleted" : "todo__task"}>{name}</div>
		</div>
		)
});
