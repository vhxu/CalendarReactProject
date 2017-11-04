import React from 'react';

const ListContainer = (props) => {

    return (
      <div className='list'>
        <div className='list-date'>{props.month} {props.selectedDay}, {props.year}</div>
        <div className='list-add'>+</div>
      </div>

    );
};

export default ListContainer;
