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
      return (
        <div className='day' key={day.day}>{day.day}</div>
      );
    });
    if (firstDay > 0) {
      for (var i = 0; i < firstDay; i++) {
        dateGrid.unshift(<div className='day gray' key={-i}>{new Date(props.year, props.month, -i).getDate()}</div>)
      }
    }
    if (lastDay < 6) {
      for (var j = 1; j <= 6-lastDay; j++) {
        dateGrid.push(<div className='day gray' key={'next'+j}>{new Date(props.year, props.month + 1, j).getDate()}</div>)
      }
    }
    return (
    <div className='day-container'>
      {dateGrid}
      {console.log(dateGrid)}
    </div>
    );
  }
    else {
      return null;
    }
};

export default Dates;
