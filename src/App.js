import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }

    state = {
        tasks: [{title: "CSS", isDone: true, priority: 'low'},
            {title: "HTML", isDone: false, priority: 'medium'},
            {title: "JS", isDone: true, priority: 'low'},
            {title: "jQuery", isDone: false, priority: 'hight'}
        ],

        filterValue: "Active"
    }
    onAddTaskClick = () => {
        let newTask = {title: this.newTaskTitleRef.current.value, isDone: true, priority: 'hard'};
        let nawTasks = [...this.state.tasks,newTask];
        this.setState({
            tasks: nawTasks
        });
        this.newTaskTitleRef.current.value='';
    }


    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    {/*<TodoListHeader/>*/}
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input type="text" placeholder="New task name" ref={this.newTaskTitleRef}/>
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

