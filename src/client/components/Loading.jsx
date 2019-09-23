import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';


export  default class Loading extends React.Component {
  render() {
    return (
      <div className='loading-spinner'>
        <ClipLoader
          sizeUnit={"px"}
          size={60}
          color={'#5495b1'}
        />
      </div>
    )
  }
}
