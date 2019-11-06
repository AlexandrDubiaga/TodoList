import React from 'react';

class TodoListTask extends React.Component {

    render = () => {
        let colorSpan = "";
        switch (this.props.priority) {
            case 'hight': {
                colorSpan = "red";
                break
            }
            case 'low': {
                colorSpan = "pink";
                break
            }
            case 'medium': {
                colorSpan = "green";
                break
            }
            default:
                break;
        }
        return (
            <div className="todoList-tasks">
                <input type="checkbox" checked={this.props.isDone}/>
                <span className={colorSpan}>{this.props.title + " priority: " + this.props.priority}</span>
            </div>
        );
    }
}

export default TodoListTask;

