import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyles = styled.div`
  .heading {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    white-space: nowrap;
  }
  svg {
    width: 2rem;
  }
`;

export default function FooterCol({
  heading = 'Heading',
  links = [{ type: 'link', title: 'Home', path: '/about', icon: null }],
}) {
  return (
    <ColStyles>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {' '}
            {item.type === 'link' ? (
              <Link to={item.path}>
                {item.title} {item.icon === null ? '' : item.icon}
              </Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
                {item.icon === null ? '' : item.icon}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyles>
  );
}
