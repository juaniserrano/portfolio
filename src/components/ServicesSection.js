import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac, MdCode } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import { TiGroup } from 'react-icons/ti';
import SectionTitle from './SectionTitle';
import SerivcesSectionItem from './SerivcesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 300px;
      gap: 3rem;
      margin: 0 auto;
      margin-top: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle
          heading="My Services 💼"
          subheading="What I am capable of?"
        />

        <div className="services__allItems">
          <SerivcesSectionItem
            icon={<MdDesktopMac />}
            title="Full Stack Web Developer Freelance"
            desc="I have the ability and knowledge to develop the website from the scratch, I can also redevelop your website if it is outdated.
            I will do it as much user friendly as possible!"
          />
          <SerivcesSectionItem
            icon={<MdCode />}
            title="Desktop Application Developer"
            desc="I have experience making backend development for desktop applications with Java and Python. I made diferents projects that you can see on my portfolio"
          />
          <SerivcesSectionItem
            icon={<TiGroup />}
            title="Experienced with Agile Methodologies"
            desc="I worked on projects using Scrum methodology. I have the ability to work with the team and make sure that the project is done on time. Also I have the ability to be a project leader"
          />
          <SerivcesSectionItem
            icon={<FaUserGraduate />}
            title="Student at University (Computer Science Bachelor)"
            desc="I am currently at my 4th year of college and I am constantly learning new things. I am always looking for new ways to improve my skills and knowledge."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
