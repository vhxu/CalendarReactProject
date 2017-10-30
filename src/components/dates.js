import React from 'react';

 const Dates = (props) => {
  var firstDay = new Date(props.year, props.month, 1).getDay();
  var lastDay = new Date(props.year, props.month + 1, 0).getDay();
  var datesArray= [];
  for (var i = 1; i <= props.totalDays; i++) {
    datesArray.push({
      day: i
    });
  }

  if (datesArray.length === props.totalDays) {
    const dateGrid = datesArray.map((day) => {
      if (day.day === props.currentDay && props.month === new Date().getMonth()) {
        return (
          <div className='day today' key={day.day}>{day.day}</div>
        );
      }
      else {
        return (
          <div className='day' key={day.day}>{day.day}</div>
        );
      }
    });
    if (firstDay > 0) {
      for (var i = 0; i < firstDay; i++) {
        dateGrid.unshift(<div className='day gray' key={-i}>{new Date(props.year, props.month, -i).getDate()}</div>)
      }
    }
    if (lastDay < 6) {
      for (var i = 1; i <= 6-lastDay; i++) {
        dateGrid.push(<div className='day gray' key={'next'+i}>{new Date(props.year, props.month + 1, i).getDate()}</div>)
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
};

export default Dates;
