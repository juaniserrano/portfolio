import React from 'react';
import Error from './Error';

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '66px',
  border: '1px solid lightblue',
  textAlign: 'center',
  fontSize: '3rem',
  height: '95vh',
  flexDirection: 'column',
};

export default function Projects() {
  return (
    <div>
      <div>
        <div style={divStyle}>
          <Error />
        </div>
      </div>
    </div>
  );
}
