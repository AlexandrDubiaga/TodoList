import React from 'react';

class TodoListHeader extends React.Component {
    constructor() {
        super()
    }

    state = {
        inputValue: '',
        error: false,
        isCheckedDoneTask: false,
        priority:['low','medium','hight']

    }
    onUdateInput = (e) => {

        this.setState({
            isCheckedDoneTask: e.currentTarget[0].checked,
            inputValue: e.currentTarget[1].value,
            priorityValue:e.currentTarget[2].value

        })

        if (e.currentTarget[1].value != '') {
            this.setState({
                error: false
            })
        } else {
            this.setState({
                error: true
            })
        }
    }
    onAddTaskClick = () => {
        let obj = {
            title: this.state.inputValue,
            isDone: this.state.isCheckedDoneTask,
            priority:this.state.priorityValue
        }
        if (this.state.inputValue === '') {
            this.setState({
                error: true
            })
        } else {
            this.props.onAddTaskClick(obj);
            this.setState({
                inputValue: '',
                isCheckedDoneTask: false
            })
        }
    }

    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <form onChange={this.onUdateInput}>
                        Done <input checked={this.state.isCheckedDoneTask ? true : false} type="checkbox"
                                    name="checked"/>
                        <input className={this.state.error ? 'error' : ''} type="text" value={this.state.inputValue} name="name"/>
                        Priority: <select>{this.state.priority.map((priority, idx) => <option key={idx}>{priority}</option>)}</select>
                    </form>
                    <button onClick={this.onAddTaskClick}>Add</button>

                </div>
            </div>
        );
    }
}

export default TodoListHeader;

