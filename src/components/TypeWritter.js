import React from 'react';
import Typewritter from 'typewriter-effect';
import styled from 'styled-components';

const TypeWritterStyles = styled.div`
  text-align: center;
  p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
  }
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 5.5rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  h3 {
    font-family: 'RobotoMono Regular';
    display: flex;
    align-items: left;
    justify-content: left;
    margin-top: 0.5rem;
    gap: 1.5rem;
    font-size: 2.5rem;
  }
  .typeWritterStyles {
    font-size: 2.5rem;
    font-family: 'RobotoMono Regular';
    margin-top: 0.5rem;
    text-transform: uppercase;
    text-align: left;
    .Typewriter__cursor,
    .Typewriter__wrapper {
      color: var(--blue);
    }
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 4rem;
    }
    h3 {
      justify-content: center;
    }
  }
`;

export default function TypeWritter() {
  return (
    <TypeWritterStyles className="typeWritterStyles">
      <div className="typeWritterStyles">
        <h3>
          I am{'  '}
          <Typewritter
            options={{
              autoStart: true,
              loop: true,
              delay: 60,
              strings: [
                'Full Stack Web Developer',
                'Computer Technician',
                'React Developer',
                'Backend developer (Java, Spring)',
              ],
            }}
          />
        </h3>
      </div>
    </TypeWritterStyles>
  );
}
