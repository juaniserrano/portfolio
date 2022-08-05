import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImage from '../assets/images/about-sec-image.png';
import ImageBanner from '../assets/images/img-banner.png';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 3;
  }
  .about__subheading {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 10px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 2rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      text-align: left;
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--deep-dark);
      with: 100%;
      height: auto;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.5rem;
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I'm <span className="about__name">Juan Serrano</span>
            </p>
            <h2 className="about__heading">A full stack web Developer</h2>
            <div className="about__info">
              <PText>
                {' '}
                Im am From Argentina Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Ratione inventore recusandae laudantium hic
                labore nesciunt quam quisquam odio sunt commodi ullam at culpa
                fugiat rem unde, voluptatem a deserunt? Dolores! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quam, quae? Neque
                quas corporis eum aperiam soluta! Non voluptatibus inventore
                consequatur nisi modi? Inventore animi architecto, dolorum
                quibusdam odit eveniet accusantium?
              </PText>
            </div>
            <a href="https://docdro.id/I6fTZuG">
              <Button
                btnText="Download my CV"
                btnLink="https://docdro.id/I6fTZuG"
                external="true"
              />
            </a>
          </div>
          <div className="right">
            <img src={ImageBanner} alt="About me" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="Frontend"
              items={['HTML', 'CSS', 'Bootstrap', 'Javascript', 'React']}
            />
            <AboutInfoItem
              title="Backend"
              items={[
                'Spring',
                'SQL',
                'Sequelize',
                'Java',
                'Python',
                'Node.js',
              ]}
            />
            <AboutInfoItem
              title="Frameworks"
              items={[
                'React',
                'NextJS',
                'Express',
                'Bootstrap',
                'MaterialUI',
                'Sass',
                'Tailwind',
                'Styled-components',
              ]}
            />
            <AboutInfoItem
              title="Devops"
              items={['Git', 'Github', 'AWS', 'Docker']}
            />
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}
