import React from 'react';

class OneTask extends React.Component {
    state = {
        isVisibleTask: true,
        priority:['low','medium','hight']
    }
    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.tasks, e.currentTarget.checked);
    }
    deleteTask = () => {
        this.props.filterTask(this.props.tasks)
    }

    updateTask = (obj) => {
        let newtask = {
            isDone:obj.currentTarget[0].value,
            title: obj.currentTarget[1].value,
            priority: obj.currentTarget[2].value
        }
        this.props.changeTask(this.props.tasks, newtask)
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
        let isDoneTask = this.props.tasks.isDone ? 'done' : '';
        return (
            <div className="todoList-tasks">
                {this.state.isVisibleTask ?

                    <div>
                        <button onClick={this.deleteTask}>X</button>
                        <input className={isDoneTask} type="checkbox" checked={this.props.tasks.isDone ? true : false} onChange={this.onIsDoneChanged}/>
                        <span onDoubleClick={() => this.setState({isVisibleTask: false})} className={`${colorSpan} ${isDoneTask}`}>{this.props.tasks.title + " priority: " + this.props.tasks.priority}</span>
                    </div> :

                    <div>
                        <form onChange={this.updateTask} className="form">
                            isDone<input className={isDoneTask} type="checkbox" checked={this.props.tasks.isDone ? true : false}/>
                            <span className={`${colorSpan} ${isDoneTask}`}><input value={this.props.tasks.title}/>Priority:
                                <select value={this.props.tasks.priority}>{this.state.priority.map((priority, idx) => <option key={idx}>{priority}</option>)}</select>
</span>
                        </form>
                        <button onClick={() => this.setState({isVisibleTask: true})}>EDIT</button>
                    </div>
                }
            </div>
        );
    }
}

export default OneTask;

