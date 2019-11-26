import React from 'react';

class TodoListHeader extends React.Component {
    constructor() {
        super()
    }

    state = {
        inputValue: '',
        error: false,
        isCheckedDoneTask:false

    }
    onUdateInput = (e) => {

        this.setState({
            isCheckedDoneTask: e.currentTarget[0].checked,
            inputValue: e.currentTarget[1].value

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
        debugger
        let obj={
            title:this.state.inputValue,
            isDone:this.state.isCheckedDoneTask
        }
        if (this.state.inputValue === '') {
            this.setState({
                error: true
            })
        } else {
            this.props.onAddTaskClick(obj);
            this.setState({
                inputValue: '',
                isCheckedDoneTask:false


            })
        }
    }

    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <form onChange={this.onUdateInput}>
                        Done <input checked={this.state.isCheckedDoneTask ? true : false} type="checkbox" name="checked"/>
                        <input value={this.state.inputValue} name="name"/>
                    </form>
                    <button onClick={this.onAddTaskClick}>Add</button>

                </div>
            </div>
        );
    }
}

export default TodoListHeader;

