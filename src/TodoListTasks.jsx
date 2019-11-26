import React from 'react';
import TodoListTask from "./OneTask";

class TodoListTasks extends React.Component {

    render = () => {

        const tasksElements = this.props.tasks.map(task => <TodoListTask changeStatus={this.props.changeStatus} tasks={task} isDone={this.props.isDone}/>
        )
        return (
            <div className="todoList-tasks ">
                <span>{tasksElements}</span>
            </div>
        );
    }
}

export default TodoListTasks;

