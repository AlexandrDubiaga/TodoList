import React from 'react';

class TodoListHeader extends React.Component {
    constructor() {
        super()
    }

    state = {
        inputValue: '',
        error: false
    }
    onUdateInput = (e) => {
        this.setState({
            inputValue: e.currentTarget.value,

        })
        if (e.currentTarget.value != '') {
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
        if (this.state.inputValue === '') {
            this.setState({
                error: true
            })
        } else {
            this.props.onAddTaskClick(this.state.inputValue);
            this.setState({
                inputValue: ''
            })
        }
    }

    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input className={this.state.error ? 'error' : ''} value={this.state.inputValue}
                           onChange={this.onUdateInput} type="text" placeholder="New task name"/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

