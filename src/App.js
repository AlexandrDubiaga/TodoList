import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    tasks = [{title: "CSS", isDone: true,priority:'low'},
        {title: "HTML", isDone: false,priority:'hight'},
        {title: "JS", isDone: true,priority:'low'},
        {title: "jQuery", isDone: false,priority:'hight'}
    ]
    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks={this.tasks} />
                    <TodoListFooter />
                </div>
            </div>
        );
    }
}

export default App;

