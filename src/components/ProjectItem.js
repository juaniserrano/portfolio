import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.webp';

const ProjectItemSytles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid #fff;
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .projectItem__desc {
    font-size: 1.8rem;
    font-family: 'RobotoMono Regular';
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem() {
  return (
    <ProjectItemSytles>
      <Link to="/projects" className="projectItem__img">
        <img src={projectImg} alt="project" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title"> E-commerce SelftyShirt</h3>
        </Link>
        <p className="projectItem__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio rerum
          molestias esse minus! Sed est sequi error impedit dolores quasi iste
          perferendis qui maxime. Aliquam animi expedita vel adipisci alias.
        </p>
      </div>
    </ProjectItemSytles>
  );
}
