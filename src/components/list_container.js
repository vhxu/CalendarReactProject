import React, {Component} from 'react';

var tasksObjectArray = [];
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
    tasksObjectArray.push(taskObject);
    document.getElementById("time").remove();
    document.getElementById("task").remove();
    document.getElementById("add").remove();
    var plusButton = document.querySelector('.list').appendChild(document.createElement("div"));
    plusButton.setAttribute('id', 'plusButton');
    plusButton.className = 'list-add';
    plusButton.innerHTML = '+';
    plusButton.onclick = this.createInputs.bind(this);
    console.log(tasksObjectArray);
    for (var i=0; i < tasksObjectArray.length; i++) {
      var time = document.getElementById('test').appendChild(document.createElement("li"));
      time.innerHTML = tasksObjectArray[i].time;
      var task = document.getElementById('test').appendChild(document.createElement("li"));
      task.innerHTML = tasksObjectArray[i].task;
    }
    //FIGURE OUT HOW TO PUT TIMES IN ORDER AND GET RID OF REPEATED TASKS WHEN ADDING MORE

    this.render();
  }

  render() {

    // if (tasksObjectArray.length > 0) {
    //   console.log('hi')
    //   var tasksList = tasksObjectArray.map((task) => {
    //     console.log(task.time);
    //     <div className='time' key={task.task}>{task.time}</div>
    //
    //   });
    // }


    return (
      <div>
        <div className='list'>
          <div className='list-date'>{this.props.month} {this.props.selectedDay}, {this.props.year}</div>
          <div id='plusButton' className='list-add' onClick={this.createInputs.bind(this)}>+</div>
        </div>
        <div className='list-of-stuff'>
          <ul id='test'></ul>
        </div>
      </div>
    );
  }
};

export default ListContainer;
