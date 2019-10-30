import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                   <TodoListHeader />
                    <TodoListTasks />
                    <div className="todoList-footer">
                        <button>All</button>
                        <button>Completed</button>
                        <button>Active</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

