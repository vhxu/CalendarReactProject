import React from 'react';

const ListContainer = (props) => {

    return (
      <div className='list-date'>
        <div>{props.month} {props.currentDay}, {props.year}</div>
      </div>

    );
};

export default ListContainer;
