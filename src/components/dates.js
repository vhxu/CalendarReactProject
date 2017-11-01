import React, {Component} from 'react';

class Dates extends Component {

  // selectDay (day) {
  //   console.log('youve selected this day', day);
  // }

  render() {
    var firstDay = new Date(this.props.year, this.props.month, 1).getDay();
    var lastDay = new Date(this.props.year, this.props.month + 1, 0).getDay();
    var datesArray= [];
    for (var i = 1; i <= this.props.totalDays; i++) {
      datesArray.push({
        day: i
      });
    }

    if (datesArray.length === this.props.totalDays) {
      const dateGrid = datesArray.map((day) => {
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
      <div className='day-container'>
        {dateGrid}
      </div>
      );
    }
      else {
        return null;
      }
  }
};

export default Dates;
