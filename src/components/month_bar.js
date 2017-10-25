import React, { Component } from 'react';
import DatesContainer from './dates_container';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var number = new Date().getMonth();

class MonthBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: ""
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
    if (number > 0) {
      number -= 1;
      this.setState({
        month: this.selectMonth(number)
      })
    }
    else {
      number = 11;
      this.setState({
        month: this.selectMonth(number)
      })
    }
  }

  handleRightClick() {
    if (number < 11) { //weird
      number += 1
      this.setState({
        month: this.selectMonth(number)
      })
    }
    else {
      number = 0;
      this.setState({
        month: this.selectMonth(number)
      })
    }
  }

  render() {

    return(
      <div>
        <h2 onClick={this.handleLeftClick.bind(this)} >left</h2>
        <h1>{this.state.month}</h1>
        <h2 onClick={this.handleRightClick.bind(this)}>right</h2>
        <DatesContainer />
      </div>
    );
  }
}

export default MonthBar;
