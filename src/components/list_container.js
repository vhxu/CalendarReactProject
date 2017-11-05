import React, {Component} from 'react';

class ListContainer extends Component {

  createInputs() {
    document.querySelector('.list-of-stuff').appendChild(document.createElement("input"));
    document.querySelector('.list-of-stuff').appendChild(document.createElement("input"));
    document.querySelector('.list-of-stuff').appendChild(document.createElement("div")).innerHTML = 'Add';
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
