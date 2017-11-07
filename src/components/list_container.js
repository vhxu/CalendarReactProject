import React, {Component} from 'react';

class ListContainer extends Component {

  createInputs() {
    var timeInput = document.querySelector('.list-of-stuff').appendChild(document.createElement("input"));
    timeInput.setAttribute('placeholder', 'time');
    timeInput.setAttribute('id', 'time');
    var taskInput = document.querySelector('.list-of-stuff').appendChild(document.createElement("input"));
    taskInput.setAttribute('placeholder', 'task');
    taskInput.setAttribute('id', 'task');
    var addButton = document.querySelector('.list-of-stuff').appendChild(document.createElement("div"));
    addButton.innerHTML = 'Add';
    addButton.onclick = this.test;
  }

  test() {
    console.log('hi');
    var input = document.getElementById("time").value;
    console.log(input);
  }

  render() {

    return (
      <div>
        <div className='list'>
          <div className='list-date'>{this.props.month} {this.props.selectedDay}, {this.props.year}</div>
          <div className='list-add' onClick={this.createInputs.bind(this)}>+</div>
        </div>
        <div className='list-of-stuff'></div>
      </div>
    );
  }
};

export default ListContainer;
