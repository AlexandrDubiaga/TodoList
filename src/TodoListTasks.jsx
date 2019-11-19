import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {

    render = () => {

        const tasksElements = this.props.tasks.map(task => <TodoListTask changeStatus={this.props.changeStatus} tasks={task}/>
        )
        return (
            <div className="todoList-tasks ">
                <span>{tasksElements}</span>
            </div>
        );
    }
}

export default TodoListTasks;

