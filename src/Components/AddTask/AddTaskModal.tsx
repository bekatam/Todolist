type textOfTaskModalprops = {
    textOfTask: any,
    createTask: any,
    setTaskName: any,
    taskName: string,
    sumbitOnEnter: any
}

export default function AddTaskModal(props: textOfTaskModalprops) {
    const {textOfTask, createTask, taskName, sumbitOnEnter} = props;
    return (
        <div className="AddTaskModal">
            <div className="AddTaskModal__title">Add New To Do</div>
            <textarea className="AddTaskModal__input" placeholder="Your text" onChange={textOfTask} onKeyDown={sumbitOnEnter} value={taskName}></textarea>
            <button className="AddTaskModal__button" onClick={createTask}>Add</button>
        </div>
    )
}