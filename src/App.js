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
        tasks: [],
        filterValue: "All",
        id: 1
    }


    componentDidMount = () => {
        this.app = JSON.parse(localStorage.getItem('app'));
        if (localStorage.getItem('app')) {
            this.setState({
                tasks: [...this.app.tasks],
                filterValue: this.app.filterValue,
                id: this.app.id
            })
        } else {
            this.setState({
                tasks: [],
                filterValue: "All",
                id: 1
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        debugger
        localStorage.setItem('app', JSON.stringify(nextState));

    }

    changeTask = (task, obj) => {
        let newTask = this.state.tasks.map(t => {
            if (t.id !== task.id) {
                return t;
            } else {
                return {...t, title: obj.title, isDone: obj.isDone, priority: obj.priority}
            }
        })
        this.setState({
            tasks: newTask
        });
    }

    onAddTaskClick = (newTitle) => {
        let newTask = {
            id: this.state.id,
            title: newTitle.title,
            isDone: newTitle.isDone,
            priority: newTitle.priority
        };
        this.state.id++;
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
            if (t.id !== tasks.id) {
                return t;
            } else {
                return {...t, isDone: isDone}
            }
        })
        this.setState({
            tasks: newTask
        });
    }

    filterTask = (currentTask) => {

        let newState = this.state.tasks.filter(t => {
            return t.id != currentTask.id
        })
        let data = this.state.tasks.map(t => t.id);
        //let maxId = Math.max.apply(null, data);
        let maxId = 0;

        data.forEach(function (elem) {
            if (maxId < elem)
                maxId = elem;
        });


        let maxData = data.filter(t => t != maxId);
        let maxDataId = 0;

        maxData.forEach(function (elem) {
            if (maxDataId < elem)
                maxDataId = elem;
        });
        this.setState({
            tasks: newState,
            id: currentTask.id === maxId ? maxDataId + 1 : maxId + 1
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
                    <TodoListTasks changeTask={this.changeTask} changeStatus={this.changeStatus}
                                   filterTask={this.filterTask}
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

