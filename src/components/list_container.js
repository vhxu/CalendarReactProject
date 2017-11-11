import React, {Component} from 'react';

var tasksObjectArray = [];
class ListContainer extends Component {

  componentDidUpdate() {
      this.showInfo();
  }

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
    var splitTime = timeInput.split(':');
    var convertToMinutes = (+splitTime[0])*60 + (+splitTime[1]);
    console.log(splitTime);
    console.log(convertToMinutes);
    var taskObject = {date: this.props.month+" "+this.props.selectedDay+", "+this.props.year, time: timeInput, minutes: convertToMinutes, task: taskInput};
    tasksObjectArray.push(taskObject);
    document.getElementById("time").remove();
    document.getElementById("task").remove();
    document.getElementById("add").remove();
    var plusButton = document.querySelector('.list').appendChild(document.createElement("div"));
    plusButton.setAttribute('id', 'plusButton');
    plusButton.className = 'list-add';
    plusButton.innerHTML = '+';
    plusButton.onclick = this.createInputs.bind(this);
    this.showInfo();
    // tasksObjectArray.sort(function(a, b) {return a.minutes-b.minutes});
    // console.log(tasksObjectArray);
    // for (var i=0; i < tasksObjectArray.length; i++) {
    //   if (tasksObjectArray[i].date === this.props.month+" "+this.props.selectedDay+", "+this.props.year) {
    //   var time = document.getElementById('test').appendChild(document.createElement("li"));
    //   time.innerHTML = tasksObjectArray[i].time;
    //   var task = document.getElementById('test').appendChild(document.createElement("li"));
    //   task.innerHTML = tasksObjectArray[i].task;
    //   }
    // }
  }

  //REF IS BEING CALLED SAME TIME SELECTEDDAY IS UPDATED SO IT IS ALWAYS ONE STEP BEHIND. POSSIBLY REF THROUGH TWO CHILDREN
  showInfo() {
    document.getElementById('test').innerHTML = '';
    tasksObjectArray.sort(function(a, b) {return a.minutes-b.minutes});
    console.log(tasksObjectArray);
    for (var i=0; i < tasksObjectArray.length; i++) {
      if (tasksObjectArray[i].date === this.props.month+" "+this.props.selectedDay+", "+this.props.year) {
      var time = document.getElementById('test').appendChild(document.createElement("li"));
      time.innerHTML = tasksObjectArray[i].time;
      var task = document.getElementById('test').appendChild(document.createElement("li"));
      task.innerHTML = tasksObjectArray[i].task;
      }

    }
  }


  render() {

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
