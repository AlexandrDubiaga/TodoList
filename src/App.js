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
    changeTask=(task,obj)=>{
        let newTask = this.state.tasks.map(t => {
            if (t !== task) {
                return t;
            } else {
                return {...t, title:obj.title, isDone:obj.isDone, priority: obj.priority}
            }
        })
        this.setState({
            tasks: newTask
        });
    }
    onAddTaskClick = (newTitle) => {
        let newTask = {title: newTitle.title, isDone: newTitle.isDone, priority: newTitle.priority};
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

    filterTask=(currentTask)=>{
        let newState = this.state.tasks.filter(t=>{
            return t!=currentTask
        })
        this.setState({
            tasks: newState
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
                    <TodoListTasks changeTask={this.changeTask} changeStatus={this.changeStatus} filterTask={this.filterTask}
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

