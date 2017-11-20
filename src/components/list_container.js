import React, {Component} from 'react';

class ListContainer extends Component {

  render() {
    var colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    var filteredTasksArray = this.props.tasksArray.filter(task => task.date === this.props.month+" "+this.props.selectedDay+", "+this.props.year);
    filteredTasksArray.sort((a,b) => {return a.minutes-b.minutes});
    return (
      <div>
        <div className='list'>
          <div className='list-date'>{this.props.month} {this.props.selectedDay}, {this.props.year}</div>
        </div>
        <div className='list-of-stuff'>
          {filteredTasksArray.map((task, i) => {
            return (
              <div className='list-item' key={i}>
                <div className='tasks'>{task.time}<li className='task-list' style={{ color:colors[i]}}>{task.task}</li></div>
                <div className='task-location'>
                  <div className='location-image'></div>
                  <div>{task.location}</div>
                </div>

              </div>

            )
          })}
        </div>
        <div className='inputs'>
          <div>Time</div>
          <input id='time'></input>
          <div>Task</div>
          <input id='task'></input>
          <div>Location</div>
          <input id='location'></input>
          <div id='add' onClick={()=>this.props.inputInfo()}>Add</div>
          <div>Cancel</div>

        </div>
      </div>
    );
  }
};

export default ListContainer;
