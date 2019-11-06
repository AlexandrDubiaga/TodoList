import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {

    render = () => {

        const tasksElements = this.props.tasks.map(task => <TodoListTask title={task.title} isDone={task.isDone} priority={task.priority}  />
        )
        return (
            <div className="todoList-tasks ">
                <span>{tasksElements}</span>
            </div>
        );
    }
}

export default TodoListTasks;

