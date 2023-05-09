import DeleteIcon from '@mui/icons-material/Delete';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
type DoneModalProps = {
	handleDelete?: any,
	handleDeleteForever?: any,
	handleReturn?: any,
	isDeleted: boolean,
	id: string
}

export default function TodoDoneModal(props: DoneModalProps) {
	const {handleReturn, isDeleted, handleDelete, id, handleDeleteForever} = props;
	const deletingItem = (id:string) => {
		if (!isDeleted) handleDelete(id);
		else handleDeleteForever(id);
	}
  return (
		<div className='todoModals'>
			<div className="todoModals__button__wrapper">
				<button className="doneModal__wrapper" onClick={()=>deletingItem(id)}>
					<DeleteIcon sx={{color: '#353535', fontSize: '22px', marginRight: '18px', marginLeft: '8px'}}/>
					<div className="doneModal__trash">{isDeleted ? <>Delete Forever</> : <>Move to Trash</>}</div>
				</button>
			</div>
			{isDeleted ? <div className="todoModals__button__wrapper">
											<button className="doneModal__wrapper" onClick={()=>handleReturn(id)}>
												<LibraryAddCheckIcon sx={{color: '#353535', fontSize: '22px', marginRight: '18px', marginLeft: '8px'}}/>
												<div className='doneModal__trash'>Move Back To To Do</div>
											</button> 
										</div>
									:
										<></>}
		</div>
	);
}
