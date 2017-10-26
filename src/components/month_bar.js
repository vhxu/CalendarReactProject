import React, { Component } from 'react';
import DatesContainer from './dates_container';
import Dates from './dates';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthNumber = new Date().getMonth();
var yearNumber = 0;

class MonthBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: "",
      year: "",
      totalDays: "",
      daysArray:[]
    };
  }


  componentDidMount () {
    this.setState({
      month: this.selectMonth(monthNumber),
      year: new Date().getFullYear(),
      totalDays: new Date(new Date().getFullYear(), monthNumber + 1, 0).getDate()
    })

  }

  selectMonth(month) {
    return(
      monthNames[month]
    );
  }

  handleLeftClick() {
    if (monthNumber > 0) {
      monthNumber -= 1;
      this.setState({
        month: this.selectMonth(monthNumber),
        totalDays: new Date(this.state.year, monthNumber + 1, 0).getDate()
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

    return(
      <div>
        <h2 onClick={this.handleLeftClick.bind(this)} >left</h2>
        <h1>{this.state.month} {this.state.year}</h1>
        <h2 onClick={this.handleRightClick.bind(this)}>right</h2>
        <DatesContainer />
        <Dates days = {this.state.totalDays}/>
      </div>
    );
  }
}

export default MonthBar;
