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
          <div className='input-title'>Add Event</div>
          <form>
            <div className='group'>
              <input id='time' type='text' required></input>
              <span className='bar'></span>
              <label>Time</label>
            </div>

            <div className='group'>
              <input id='task' type='text' required></input>
              <span className='bar'></span>
              <label>Task</label>
            </div>

            <div className='group'>
              <input id='location' type='text' required></input>
              <span className='bar'></span>
              <label>Location</label>
            </div>

            <div id='add' onClick={()=>this.props.inputInfo()}>Add</div>
            <div>Cancel</div>
          </form>

        </div>
      </div>
    );
  }
};

export default ListContainer;
