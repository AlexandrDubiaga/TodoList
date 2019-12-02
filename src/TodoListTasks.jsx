import React from 'react';
import TodoListTask from "./OneTask";

class TodoListTasks extends React.Component {

    render = () => {

        const tasksElements = this.props.tasks.map(task => <TodoListTask changeTask={this.props.changeTask} changeStatus={this.props.changeStatus} tasks={task} isDone={this.props.isDone} filterTask={this.props.filterTask}/>
        )
        return (
            <div className="todoList-tasks ">
                <span>{tasksElements}</span>
            </div>
        );
    }
}

export default TodoListTasks;

