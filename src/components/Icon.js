import React from 'react';

export default function Icon({ name = 'test', extention = 'svg' }) {
  let path = `/icons/${name}.${extention}`;
  if (name === 'Styled-components') {
    path = '/icons/styled-components.png';
  }
  return (
    <div>
      <img src={path} alt="" />
    </div>
  );
}
