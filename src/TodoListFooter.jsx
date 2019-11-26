import React from 'react';

class TodoListFooter extends React.Component {
    changeVisibilyty=(e)=>{
        if(e.currentTarget.value === 'Hide'){
            this.props.changeButtonsVisibility(false)
        }else if(e.currentTarget.value === 'Show'){
            this.props.changeButtonsVisibility(true)
        }
    }
    render = () => {
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";
        return (
            <div>
                {this.props.isVisible?
                <div>
                <button onClick={() => this.props.changeFilter('All')} className={classForAll}>All</button>
                    <button onClick={() => this.props.changeFilter('Completed')} className={classForCompleted}>Completed</button>
                    <button onClick={() => this.props.changeFilter('Active')} className={classForActive}>Active</button>
                    <button value="Hide" onClick={this.changeVisibilyty}>Hide</button>
                    </div>: <button value="Show" onClick={this.changeVisibilyty}>Show</button>
                }

            </div>
        );
    }
}

export default TodoListFooter;

