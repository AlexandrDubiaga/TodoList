import React from 'react';

class TodoListHeader extends React.Component {
    constructor() {
        super()
        this.newTittleRef = React.createRef();

    }
    onAddTaskClick=()=>{
        let newTitle = this.newTittleRef.current.value;
        this.newTittleRef.current.value='';
        this.props.onAddTaskClick(newTitle);
    }

    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input ref={this.newTittleRef} type="text" placeholder="New task name"/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

