import React, {Component} from 'react';
import DatesContainer from './dates_container';
import ListContainer from './list_container';
class Dates extends Component {

  // addTask() {
  //   this.props.datesArray[this.props.selectedDay-1].task = 'testtest';
  //   console.log(this.props.datesArray[this.props.selectedDay-1]);
  // }

  render() {
    var firstDay = new Date(this.props.year, this.props.month, 1).getDay();
    var lastDay = new Date(this.props.year, this.props.month + 1, 0).getDay();
    // var datesArray= [];
    for (var i = 1; i <= this.props.totalDays; i++) {
      this.props.datesArray.push({
        day: i
      });
    }

    if (this.props.datesArray.length === this.props.totalDays) {
      const dateGrid = this.props.datesArray.map((day) => {
        if (day.day === this.props.selectedDay && day.day === this.props.currentDay) {
          return (
            <div className='day selected today' key={day.day}>{day.day}</div>
          )
        }
        else if (day.day === this.props.selectedDay) {
          return (
            <div className='day selected' key={day.day}>{day.day}</div>
          )
        }
        else if (day.day === this.props.currentDay && this.props.month === new Date().getMonth()) {
          return (
            <div className='day today' onClick={() => {this.props.selectDay(day.day)}} key={day.day}>{day.day}</div>
          );
        }
        else {

          return (
            <div className='day' onClick={() => {this.props.selectDay(day.day)}} key={day.day}>{day.day}</div>
          );
        }
      });
      if (firstDay > 0) {
        for (var i = 0; i < firstDay; i++) {
          dateGrid.unshift(<div className='day gray' key={-i}>{new Date(this.props.year, this.props.month, -i).getDate()}</div>)
        }
      }
      if (lastDay < 6) {
        for (var i = 1; i <= 6-lastDay; i++) {
          dateGrid.push(<div className='day gray' key={'next'+i}>{new Date(this.props.year, this.props.month + 1, i).getDate()}</div>)
        }
      }
      return (
      <div className='dates-list'>
        <div className='dates-container'>
          <DatesContainer />
          <div className='day-container'>
            {dateGrid}
          </div>
        </div>
        <div className='list-container'>
            <ListContainer task = {this.addTask} month={this.props.monthName} selectedDay={this.props.selectedDay} year={this.props.year}/>
        </div>
      </div>

      );
    }
      else {
        return null;
      }
  }
};

export default Dates;
