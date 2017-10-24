import React, { Component } from 'react';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var number = new Date().getMonth();

class MonthBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: ""

      // monthNumber: new Date().getMonth(),
      // month: this.selectMonth(this.monthNumber)
    };
  }


  componentDidMount () {
    this.setState({
      month: this.selectMonth(number)
    })

  }

  selectMonth(month) {
    return(
      monthNames[month]
    );
  }

  handleLeftClick() {
    this.setState({
      month: this.selectMonth(number + 1)
    })
    number += 1;
  }

  handleRightClick() {
    this.setState({
      month: this.selectMonth(number - 1)
    })
    number -= 1;
  }


  render() {

    return(
      <div>
        <h2 onClick={this.handleLeftClick.bind(this)} >left</h2>
        <h1>{this.state.month}</h1>
        <h2 onClick={this.handleRightClick.bind(this)}>right</h2>
      </div>
    );
  }
}

export default MonthBar;
