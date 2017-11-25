import React, {Component} from 'react';
import DatesContainer from './dates_container';
import ListContainer from './list_container';
class Dates extends Component {


  render() {
    var firstDay = new Date(this.props.year, this.props.month, 1).getDay();
    var lastDay = new Date(this.props.year, this.props.month + 1, 0).getDay();

    if (this.props.datesArray.length === this.props.totalDays) {
      if (this.props.tasksArray.length > 0){
        var filterTasksArray = this.props.tasksArray.filter(task => task.month === this.props.monthName&& task.year === this.props.year);
        console.log(filterTasksArray);
        for (var i = 0; i < filterTasksArray.length; i++) {
          this.props.datesArray[filterTasksArray[i].day - 1].task = true;
        }
        console.log(this.props.datesArray);
      }
      const dateGrid = this.props.datesArray.map((day) => {
        if (day.day === this.props.selectedDay && day.day === this.props.currentDay && this.props.month === new Date().getMonth() && day.task === true) {
          return (
            <div className='day today dot selected-day' key={day.day}>{day.day}<div className='selected-circle'></div></div>
          )
        } else if (day.day === this.props.selectedDay && day.day === this.props.currentDay && this.props.month === new Date().getMonth()) {
          return (
            <div className='day today selected-day' key={day.day}>{day.day}<div className='selected-circle'></div></div>
          )
        } else if (day.day === this.props.selectedDay && day.task === true) {
          return (
            <div className='day dot selected-day' key={day.day}>{day.day}<div className='selected-circle'></div></div>
          )
        } else if (day.day === this.props.selectedDay) {
          return (
            <div className='day selected-day' key={day.day}>{day.day}<div className='selected-circle'></div></div>
          )
        } else if (day.day === this.props.currentDay && this.props.month === new Date().getMonth() && day.task === true) {
          return (
            <div className='day today dot' onClick={() => {this.props.selectDay(day.day)}} key={day.day}>{day.day}</div>
          )
        } else if (day.day === this.props.currentDay && this.props.month === new Date().getMonth()) {
          return (
            <div className='day today' onClick={() => {this.props.selectDay(day.day)}} key={day.day}>{day.day}</div>
          );
        } else if (day.task === true) {
          return (
            <div className='day dot' onClick={() => {this.props.selectDay(day.day)}} key={day.day}>{day.day}</div>
          )
        } else {
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
            <ListContainer deleteTask={this.props.deleteTask} cancelInfo={this.props.cancelInfo} inputInfo={this.props.inputInfo} tasksArray={this.props.tasksArray} month={this.props.monthName} selectedDay={this.props.selectedDay} year={this.props.year}/>
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
