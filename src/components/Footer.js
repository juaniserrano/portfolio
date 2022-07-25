import React from 'react';
import styled from 'styled-components';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillGitlab,
  AiFillMail,
  AiFillPhone,
} from 'react-icons/ai';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    margin-top: 4rem;
    padding: 2rem 0 2rem 0;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .copyright p {
    font-size: 2rem;
    white-space: nowrap;
  }

  .container .aLink :hover *,
  .container .aLink :hover {
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para,
    .footer__col1__title {
      max-width: 100%;
      text-align: center;
    }
  }
  .copyright p {
    font-size: 1rem;
    overflow-wrap: break-word;
    text-align: center;
    white-space: normal;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Juan Serrano</h1>
          <PText>
            {' '}
            Full Stack Web Developer - A freelance web designer and developer
            from Argentina, Buenos Aires 🇦🇷. I am constantly making websites and
            studying new technologies 🤓
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              { title: 'Home', path: '/', type: 'Link', icon: null },
              { title: 'About', path: '/about', type: 'Link' },
              { title: 'Projects', path: '/projects', type: 'Link' },
              { title: 'Contact', path: '/contact', type: 'Link' },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: 'Email',
                path: 'mailto:juanignacioserranoluna@gmail.com',
                icon: <AiFillMail />,
              },
              {
                title: '+54 9 11 5502-1895',
                path: 'https://wa.me/5491155021895',
                icon: <AiFillPhone />,
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="My Socials"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/juan-ignacio-serrano-luna/',
                icon: <AiFillLinkedin />,
              },
              {
                title: 'Github',
                path: 'https://github.com/juaniserrano',
                icon: <AiFillGithub />,
              },
              {
                title: 'Gitlab',
                path: 'https://gitlab.com/juanserrano',
                icon: <AiFillGitlab />,
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <PText>
          &copy; Copyright 2022 | Juan Serrano - Full Stack Web Developer
        </PText>
      </div>
    </FooterStyles>
  );
}
