import React, { Component } from 'react';

class MonthBar extends Component {
  getMonth() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = new Date().getMonth();
    return (
      monthNames[currentMonth]
    );
  }

  handleLeftClick() {
    console.log('left');
  }

  handleRightClick() {
    console.log('right');
  }


  render() {

    return(
      <div>
        <h2 onClick={ () => this.handleLeftClick()} >left</h2>
        <h1>{this.getMonth()}</h1>
        <h2 onClick={ () => this.handleRightClick() }>right</h2>
      </div>
    );
  }
}

export default MonthBar;
