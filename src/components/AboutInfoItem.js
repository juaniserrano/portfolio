import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Icon from './Icon.js';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5rem;
  position: relative;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    flex-direction: row;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img {
      width: 4rem;
      padding: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      left: 0;
      width: 100%;
    }
    .item {
      width: 100%;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'My title',
  items = ['HTML', 'CSS', 'JS', 'React', 'Node.js'],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText> <Icon name={item} />
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
