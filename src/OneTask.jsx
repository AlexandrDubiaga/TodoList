import React from 'react';

class OneTask extends React.Component {
    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.tasks,e.currentTarget.checked);
    }
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
        let isDoneTask = this.props.tasks.isDone?'done':'';
        return (
            <div className="todoList-tasks">
                <input className={isDoneTask} type="checkbox" checked={this.props.tasks.isDone?true:false} onChange={this.onIsDoneChanged}/>
                <span className={`${colorSpan} ${isDoneTask}`}>{this.props.tasks.title + " priority: " + this.props.tasks.priority}</span>
            </div>
        );
    }
}

export default OneTask;

