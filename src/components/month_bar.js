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
      totalDays: "",
      selectedDay: ""
    };
    this.selectDay = this.selectDay.bind(this);
  }


  componentDidMount () {
    this.setState({
      month: this.selectMonth(monthNumber),
      year: new Date().getFullYear(),
      currentDay: new Date().getDate(),
      totalDays: this.totalDays(),
      selectedDay: new Date().getDate()
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

  selectDay(e) {
    this.setState({
      selectedDay: e
    })
    console.log(e);
  }

  render() {

    return(
      <div className='app-container'>
        <div className='calendar-container'>
          <div className='month-bar'>
            <div onClick={this.handleLeftClick.bind(this)} >&#8810;</div>
            <div>{this.state.month} {this.state.year}</div>
            <div onClick={this.handleRightClick.bind(this)}>&#8811;</div>
          </div>
            <DatesContainer />
            <Dates totalDays={this.state.totalDays} month={monthNumber} year={this.state.year} currentDay={this.state.currentDay} selectedDay={this.state.selectedDay} selectDay = {this.selectDay}/>
        </div>
        <div className='list-container'>
            <ListContainer month={this.state.month} selectedDay={this.state.selectedDay} year={this.state.year}/>
        </div>
      </div>
    );
  }
}

export default MonthBar;
