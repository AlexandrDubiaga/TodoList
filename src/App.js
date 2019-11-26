import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        tasks: [{title: "CSS", isDone: true, priority: 'low'},
            {title: "HTML", isDone: false, priority: 'medium'},
            {title: "JS", isDone: true, priority: 'low'},
            {title: "jQuery", isDone: false, priority: 'hight'}
        ],

        filterValue: "All"
    }
    onAddTaskClick = (newTitle) => {
        let newTask = {title: newTitle, isDone: true, priority: 'hard'};
        let nawTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: nawTasks
        });
    }
    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    }

    changeStatus = (tasks, isDone) => {
        let newTask = this.state.tasks.map(t => {
            if (t !== tasks) {
                return t;
            } else {
                return {...t, isDone: isDone}
            }
        })
        this.setState({
            tasks: newTask
        });
    }


    render = () => {
        const getFilterTasks = (tasks, filterValue) => {
            return this.state.tasks.filter(t => {
                switch (filterValue) {
                    case "All":
                        return true;
                    case "Completed":
                        return t.isDone;
                    case "Active":
                        return !t.isDone;
                    default:
                        return false;
                }
            });
        }


        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader onAddTaskClick={this.onAddTaskClick}/>
                    <TodoListTasks changeStatus={this.changeStatus}
                                   tasks={getFilterTasks(this.state.tasks, this.state.filterValue)}/>
                    <TodoListFooter
                        isVisible={this.state.isVisible} changeFilter={this.changeFilter}
                        filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

