import React, {Component} from 'react';

class ListContainer extends Component {

  render() {
    var colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    var filteredTasksArray = this.props.tasksArray.filter(task => task.date === this.props.month+" "+this.props.selectedDay+", "+this.props.year);
    filteredTasksArray.sort((a,b) => {return a.minutes-b.minutes});
    console.log(filteredTasksArray);
    return (
      <div>
        <div className='list'>
          <div className='list-date'>{this.props.month} {this.props.selectedDay}, {this.props.year}</div>
        </div>
        <div className='list-of-stuff'>
          {filteredTasksArray.map((task, i) => {
            return (
              <div key={i}>
                <div className='tasks'>{task.time} <li className='task-list'style={{ color:colors[i]}}>{task.task}</li></div>
                <hr className="task-divider"></hr>
              </div>

            )
          })}
        </div>
      </div>
    );
  }
};

export default ListContainer;
