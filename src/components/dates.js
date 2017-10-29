import React from 'react';
//ARRAY IS EMPTY. RETURNING UNDEFINED
// var datesArray= [];
// class Dates extends Component {
//
//
//   if (datesArray.length < 1) {
//     for (var i = 1; i <= this.props.days; i++) {
//       datesArray.push({
//         day: i
//       });
//       console.log('hi');
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         <div>{this.props.days}</div>
//         <div>{console.log(datesArray)}</div>
//         <div>{datesArray[0].day}</div>
//       </div>
//     );
//   }
// }

 const Dates = (props) => {
  var datesArray= [];
  for (var i = 1; i <= props.totalDays; i++) {
    datesArray.push({
      day: i
    });
  }

  if (datesArray.length < 1) {
    console.log('im here');
  }
  else {
    console.log('now im here');
  }



    if (datesArray.length === props.totalDays) {
      return (
      <div>
        <div>{props.totalDays}</div>
        <div>{console.log(datesArray[0].day)}</div>
        <div></div>
      </div>
      );
    }
    else {
      return null;
    }


};
//
export default Dates;
