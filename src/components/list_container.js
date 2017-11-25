import React, {Component} from 'react';

class ListContainer extends Component {
  //
  // componentDidMount() {
  //   if (document.querySelector('.list-item') != null) {
  //     var item = this.refs.item;
  //     var deleteButton = this.refs.delete;
  //     item.addEventListener('onMouseEnter', function(e) {
  //       deleteButton.style.color = 'red';
  //     });
  //   }
  // }

  render() {
    var colors = ['#FE635D', '#0AAAFB', '#46D383', '#FAF777', '#ABABAB', '#7A4FF8'];
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
              <div className='list-item-delete' key={i}>
                <div className='list-item'>
                  <div className='tasks'>{task.time}<li className='task-list' style={{ color:colors[i]}}>{task.task}</li></div>
                  <div className='task-location'>
                    <div className='location-image'></div>
                    <div>{task.location}</div>
                  </div>
                </div>
                <div className='delete' onClick={()=>this.props.deleteTask(task.tracker)}></div>
              </div>
            )
          })}
        </div>
        <div className='inputs'>
          <div className='input-title'>Create Event</div>
          <form id='event-form'>
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
            <div className='add-cancel'>
              <div onClick={()=>this.props.cancelInfo()}>CANCEL</div>
              <div id='add' onClick={()=>this.props.inputInfo()}>ADD</div>
            </div>
          </form>

        </div>
      </div>
    );
  }
};

export default ListContainer;
