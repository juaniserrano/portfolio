import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    padding-top: 1rem;
    font-size: 4rem;
    margin-bottom: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .para {
      font-size: 1.6rem;
    }
    .contactBanner__heading {
      font-size: 3.5rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>You have a website project mind?</PText>
          <h3 className="contactBanner__heading">Let me help you build it!</h3>
          <Button btnText="Contact me" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
