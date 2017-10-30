import React, { Component } from 'react';
import DatesContainer from './dates_container';
import Dates from './dates';
import ListContainer from './list_container';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthNumber = new Date().getMonth();
var yearNumber = 0;
var datesArray = [];

class MonthBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: "",
      year: "",
      currentDay: "",
      totalDays: ""
    };
  }


  componentDidMount () {
    this.setState({
      month: this.selectMonth(monthNumber),
      year: new Date().getFullYear(),
      currentDay: new Date().getDate(),
      totalDays: this.totalDays()
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
      })
    }
    else {
      monthNumber = 11;
      yearNumber -= 1
      this.setState({
        month: this.selectMonth(monthNumber),
        year: this.state.year - 1,
        totalDays: new Date(this.state.year - 1, monthNumber + 1, 0).getDate()
      })
    }
  }

  handleRightClick() {
    if (monthNumber < 11) { //weird
      monthNumber += 1
      this.setState({
        month: this.selectMonth(monthNumber),
        totalDays: new Date(this.state.year, monthNumber + 1, 0).getDate()
      })
    }
    else {
      monthNumber = 0;
      this.setState({
        month: this.selectMonth(monthNumber),
        year: this.state.year + 1,
        totalDays: new Date(this.state.year + 1, monthNumber + 1, 0).getDate()
      })
    }
  }

  render() {
    // if (this.state.days != []) {
    //   var datesComponent = <Dates totalDays = {this.state.totalDays} days = {this.state.days} />
    // } else {
    //   var datesComponent = null;
    // }
    // var data = (this.state.days) ? this.state.days : [];

    return(
      <div className='app-container'>
        <div className='month-bar'>
          <div onClick={this.handleLeftClick.bind(this)} >&#8810;</div>
          <div>{this.state.month} {this.state.year}</div>
          <div onClick={this.handleRightClick.bind(this)}>&#8811;</div>
        </div>
        <div className='calendar-list'>
          <div className='calendar-container'>
            <DatesContainer />
            <Dates totalDays={this.state.totalDays} month={monthNumber} year={this.state.year} currentDay={this.state.currentDay}/>
          </div>
          <div className='list-container'>
            <ListContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default MonthBar;
