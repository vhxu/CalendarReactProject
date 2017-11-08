import React, {Component} from 'react';

var tasksArray = [];
class ListContainer extends Component {

  createInputs() {
    document.getElementById('plusButton').remove();
    var timeInput = document.querySelector('.list-of-stuff').appendChild(document.createElement("input"));
    timeInput.setAttribute('placeholder', 'time');
    timeInput.setAttribute('id', 'time');
    var taskInput = document.querySelector('.list-of-stuff').appendChild(document.createElement("input"));
    taskInput.setAttribute('placeholder', 'task');
    taskInput.setAttribute('id', 'task');
    var addButton = document.querySelector('.list-of-stuff').appendChild(document.createElement("div"));
    addButton.setAttribute('id', 'add');
    addButton.innerHTML = 'Add';
    addButton.onclick = this.inputInfo.bind(this);
  }

  inputInfo() {
    var timeInput = document.getElementById("time").value;
    var taskInput = document.getElementById("task").value;
    var taskObject = {date: this.props.month+" "+this.props.selectedDay+", "+this.props.year, time: timeInput, task: taskInput};
    tasksArray.push(taskObject);
    document.getElementById("time").remove();
    document.getElementById("task").remove();
    document.getElementById("add").remove();
    this.render();
  }

  render() {

    if (tasksArray.length > 0) {
      console.log('hi')
      var tasksList = tasksArray.map((task) => {
        return (
          <div>
            <div className='time' key={task.task} >{task.time}</div>

          </div>
        )
      });
    }


    return (
      <div>
        <div className='list'>
          <div className='list-date'>{this.props.month} {this.props.selectedDay}, {this.props.year}</div>
          <div id='plusButton' className='list-add' onClick={this.createInputs.bind(this)}>+</div>
        </div>
        <div className='list-of-stuff'></div>
        {tasksList}

      </div>
    );
  }
};

export default ListContainer;
