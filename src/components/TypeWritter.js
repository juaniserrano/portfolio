import React from 'react';
import Typewritter from 'typewriter-effect';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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
      font-size: 2rem;
      white-space: nowrap;
    }
  }
`;

export default function TypeWritter() {
  const { t } = useTranslation('global');
  return (
    <TypeWritterStyles className="typeWritterStyles">
      <div className="typeWritterStyles">
        <h3>
          {t('typewriter.maintext')}
          {'  '}
          <Typewritter
            options={{
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 'natural',
              strings: [
                t('typewriter.option1'),
                t('typewriter.option2'),
                t('typewriter.option3'),
                t('typewriter.option4'),
              ],
            }}
          />
        </h3>
      </div>
    </TypeWritterStyles>
  );
}
