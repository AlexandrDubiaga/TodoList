import React from 'react';

class TodoListFooter extends React.Component {

    state = {
        isVisible: true
    }
    onAllFilterClick = () => this.props.changeFilter('All')
    onCompletedFilterClick = () => this.props.changeFilter('Completed')
    onActiveFilterClick = () => this.props.changeFilter('Active')
    onShowFiltersClick = () => this.setState({isVisible: false})
    onHideFiltersClick = () => this.setState({isVisible: true})
    render = () => {
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";
        return (
            <div>
                {this.state.isVisible ?
                    <div>
                        <button onClick={this.onAllFilterClick} className={classForAll}>All</button>
                        <button onClick={this.onCompletedFilterClick}
                                className={classForCompleted}>Completed
                        </button>
                        <button onClick={this.onActiveFilterClick} className={classForActive}>Active
                        </button>
                        <button value="Hide" onClick={this.onShowFiltersClick}>Hide</button>
                    </div> : <button value="Show" onClick={this.onHideFiltersClick}>Show</button>
                }
            </div>
        );
    }
}

export default TodoListFooter;

