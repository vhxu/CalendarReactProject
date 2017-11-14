import React, { Component } from 'react';

import Dates from './dates';


const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthNumber = new Date().getMonth();
var yearNumber = 0;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: "",
      year: "",
      currentDay: "",
      totalDays: "",
      selectedDay: "",
      datesArray: [],
      tasksArray: []
    };
    this.selectDay = this.selectDay.bind(this);
  }

  componentDidMount () {
    this.setState({
      month: this.selectMonth(monthNumber),
      year: new Date().getFullYear(),
      currentDay: new Date().getDate(),
      totalDays: this.totalDays(),
      selectedDay: new Date().getDate(),
      datesArray: [],
      tasksArray: []
    })

  }

  selectMonth(month) {
    return(
      monthNames[month]
    );
  }

  totalDays() {
    return new Date(new Date().getFullYear(), monthNumber + 1, 0).getDate()
  }

  handleLeftClick() {
    if (monthNumber > 0) {
      monthNumber -= 1;
      this.setState({
        month: this.selectMonth(monthNumber),
        totalDays: new Date(this.state.year, monthNumber + 1, 0).getDate(),
        datesArray: []
      })
    }
    else {
      monthNumber = 11;
      yearNumber -= 1
      this.setState({
        month: this.selectMonth(monthNumber),
        year: this.state.year - 1,
        totalDays: new Date(this.state.year - 1, monthNumber + 1, 0).getDate(),
        datesArray: []
      })
    }
  }

  handleRightClick() {
    if (monthNumber < 11) { //weird
      monthNumber += 1
      this.setState({
        month: this.selectMonth(monthNumber),
        totalDays: new Date(this.state.year, monthNumber + 1, 0).getDate(),
        datesArray: []
      })
    }
    else {
      monthNumber = 0;
      this.setState({
        month: this.selectMonth(monthNumber),
        year: this.state.year + 1,
        totalDays: new Date(this.state.year + 1, monthNumber + 1, 0).getDate(),
        datesArray: []
      })
    }
  }

  selectDay(e) {
    this.setState({
      selectedDay: e,
      datesArray: []
    })
  }

  createInputs() {
    console.log('pushed');
    document.querySelector('.plus').remove();
    var timeInput = document.querySelector('.inputs').appendChild(document.createElement("input"));
    timeInput.placeholder = 'time';
    timeInput.id = 'time';
    var taskInput = document.querySelector('.inputs').appendChild(document.createElement("input"));
    taskInput.placeholder = 'task';
    taskInput.id = 'task';
    var addButton = document.querySelector('.inputs').appendChild(document.createElement("span"));
    addButton.id = 'add';
    addButton.innerHTML = 'Add';
    addButton.onclick = this.inputInfo.bind(this);
  }

  inputInfo() {
    var timeInput = document.getElementById("time").value;
    var taskInput = document.getElementById("task").value;
    var splitTime = timeInput.split(':');
    var convertToMinutes = (+splitTime[0])*60 + (+splitTime[1]);
    var taskObject = {date: this.state.month+" "+this.state.selectedDay+", "+this.state.year, time: timeInput, minutes: convertToMinutes, task: taskInput};
    this.setState({
      tasksArray: this.state.tasksArray.concat([taskObject]),
      datesArray: []
    })
    console.log(this.state.tasksArray);
    document.getElementById("time").remove();
    document.getElementById("task").remove();
    document.getElementById("add").remove();
    var plusButton = document.querySelector('.app-container').appendChild(document.createElement("div"));
    plusButton.className= 'plus';
    plusButton.innerHTML = '+';
    plusButton.onclick = this.createInputs.bind(this);
  }

  render() {

    return(
      <div>
        <div className='app-container'>
          <div className='month-bar'>
            <div onClick={this.handleLeftClick.bind(this)} >&#8810;</div>
            <div>{this.state.month} {this.state.year}</div>
            <div onClick={this.handleRightClick.bind(this)}>&#8811;</div>
          </div>
          <div className='inputs'></div>
          <div className='plus' onClick={this.createInputs.bind(this)}>+</div>
        </div>
        <div className='dates-section'>
          <Dates tasksArray={this.state.tasksArray} datesArray={this.state.datesArray} totalDays={this.state.totalDays} month={monthNumber} monthName={this.state.month} year={this.state.year} currentDay={this.state.currentDay} selectedDay={this.state.selectedDay} selectDay = {this.selectDay}/>
        </div>
      </div>
    );
  }
}

export default App;
