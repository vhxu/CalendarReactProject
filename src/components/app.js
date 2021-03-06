import React, { Component } from 'react';

import Dates from './dates';


const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthNumber = new Date().getMonth();
var yearNumber = 0;
var tracker = 0;

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
    this.inputInfo = this.inputInfo.bind(this);
    this.cancelInfo = this.cancelInfo.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidMount () {
    this.setState({
      month: this.selectMonth(monthNumber),
      year: new Date().getFullYear(),
      currentDay: new Date().getDate(),
      totalDays: this.totalDays(),
      selectedDay: new Date().getDate(),
      datesArray: this.getDays(new Date(new Date().getFullYear(), monthNumber + 1, 0).getDate()),
      tasksArray: []
    })

  }

  selectMonth(month) {
    return(
      monthNames[month]
    );
  }

  getDays(totalDays) {
    var datesArray = [];
    for (var i = 1; i <= totalDays; i++) {
      datesArray.push({
        day: i,
        task: false
      });
    }
    return datesArray;
  }

  // updateDatesArray(datesArray) {
  //   this.setState({
  //     datesArray: datesArray
  //   })
  // }

  totalDays(year, month) {
    return new Date(new Date().getFullYear(), monthNumber + 1, 0).getDate()
  }

  handleLeftClick() {
    if (monthNumber > 0) {
      monthNumber -= 1;
      this.setState({
        month: this.selectMonth(monthNumber),
        totalDays: new Date(this.state.year, monthNumber + 1, 0).getDate(),
        datesArray: this.getDays(new Date(this.state.year, monthNumber + 1, 0).getDate())

      })
    }
    else {
      monthNumber = 11;
      yearNumber -= 1
      this.setState({
        month: this.selectMonth(monthNumber),
        year: this.state.year - 1,
        totalDays: new Date(this.state.year - 1, monthNumber + 1, 0).getDate(),
        datesArray: this.getDays(new Date(this.state.year - 1, monthNumber + 1, 0).getDate())
      })
    }
  }

  handleRightClick() {
    if (monthNumber < 11) { //weird
      monthNumber += 1
      this.setState({
        month: this.selectMonth(monthNumber),
        totalDays: new Date(this.state.year, monthNumber + 1, 0).getDate(),
        datesArray: this.getDays(new Date(this.state.year, monthNumber + 1, 0).getDate())
      })
    }
    else {
      monthNumber = 0;
      this.setState({
        month: this.selectMonth(monthNumber),
        year: this.state.year + 1,
        totalDays: new Date(this.state.year + 1, monthNumber + 1, 0).getDate(),
        datesArray: this.getDays(new Date(this.state.year + 1, monthNumber + 1, 0).getDate())
      })
    }
  }

  selectDay(e) {

    this.setState({
      selectedDay: e
    })
    var circle = document.querySelector('.day');
    circle.classList.add('active');
    // var circle = document.querySelector('.selected-circle');
    // circle.classList.add('move-circle');
  }

  createInputs() {
    var togglePlusButton = document.querySelector('.plus');
    togglePlusButton.style.display = 'none';
    var toggleList = document.querySelector('.list-of-stuff');
    toggleList.style.display = 'none';
    var toggleAddWindow = document.querySelector('.inputs');
    toggleAddWindow.style.display = 'inline-block';
  }

  inputInfo(e) {
    var toggleList = document.querySelector('.list-of-stuff');
    toggleList.style.display = null;
    var time = document.getElementById("time").value;

    var task = document.getElementById("task").value;
    var location = document.getElementById("location").value;
    document.getElementById('event-form').reset();
    var splitTime = time.split(':');
    if (e === 'am' && +splitTime[0] === 12) {
      var convertToMinutes = +splitTime[1];
    } else if (e === 'am') {
      var convertToMinutes = (+splitTime[0])*60 + (+splitTime[1]);
    } else if (e ==='pm' && +splitTime[0] === 12) {
      var convertToMinutes = (+splitTime[0])*60 + (+splitTime[1]);
    } else if (e==='pm' && +splitTime[0] < 12) {
      var convertToMinutes = (+splitTime[0] + 12)*60 + (+splitTime[1]);
    }
    var taskObject = {date: this.state.month+" "+this.state.selectedDay+", "+this.state.year, tracker: tracker, time: time, ampm: e, minutes: convertToMinutes, task: task, location: location, day: this.state.selectedDay, month: this.state.month, year: this.state.year};
    this.setState({
      tasksArray: this.state.tasksArray.concat([taskObject])
    })
    tracker += 1;
    var toggleAddWindow = document.querySelector('.inputs');
    toggleAddWindow.style.display = 'none';
    var togglePlusButton = document.querySelector('.plus');
    togglePlusButton.style.display = null;
  }

  cancelInfo() {
    var toggleAddWindow = document.querySelector('.inputs');
    toggleAddWindow.style.display = 'none';
    document.getElementById('event-form').reset();
    var togglePlusButton = document.querySelector('.plus');
    togglePlusButton.style.display = null;
  }

  deleteTask(day, e) {
    var newArray = this.state.tasksArray.filter(tracker => tracker.tracker != e);
    this.state.datesArray[day-1].task = false;
    this.setState({
      tasksArray: newArray
    });
  }

  render() {

    return(
      <div>
        <div className='app-container'>
          <div className='month-bar'>
            <div className='left-click' onClick={this.handleLeftClick.bind(this)}></div>
            <div>{this.state.month}</div>
            <div className='year'>{this.state.year}</div>
            <div className='right-click' onClick={this.handleRightClick.bind(this)}></div>
          </div>
          <div className='plus-container'>
            <div className='plus' onClick={this.createInputs.bind(this)}></div>
          </div>
        </div>
        <div className='dates-section'>
          <Dates deleteTask={this.deleteTask} cancelInfo={this.cancelInfo} inputInfo={this.inputInfo} tasksArray={this.state.tasksArray} datesArray={this.state.datesArray} totalDays={this.state.totalDays} month={monthNumber} monthName={this.state.month} year={this.state.year} currentDay={this.state.currentDay} selectedDay={this.state.selectedDay} selectDay={this.selectDay}/>
        </div>
      </div>
    );
  }
}

export default App;
