import React, { Component } from 'react';
//ARRAY IS EMPTY. RETURNING UNDEFINED
var datesArray= [];
class Dates extends Component {

  componentDidMount() {
    // if (datesArray.length < 1) {
    for (var i = 1; i <= this.props.days; i++) {
      datesArray.push({
        day: i
      });
    }
  }

  render() {
    return (
      <div>
        <div>{this.props.days}</div>
        <div>{console.log(datesArray)}</div>
        <div>{datesArray[0].day}</div>
      </div>
    );
  }
}

// const Dates = (props) => {
//   var datesArray= [];
//
//   if (datesArray.length < 1) {
//     console.log('im here');
//     for (var i = 1; i <= props.days; i++) {
//       datesArray.push({
//         day: i
//       });
//     }
//   }
//   // if (!datesArray) {
//   //   return <div>hi</div>
//   // }
//
//   return (
//     <div>
//       <div>{props.days}</div>
//       <div>{console.log(datesArray)}</div>
//       <div>{datesArray[0].day}</div>
//     </div>
//   );
// };
//
export default Dates;
