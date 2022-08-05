import React from 'react';
import { AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import { MdComputer } from 'react-icons/md';
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
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .projectItem__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .projectItem__desc {
    font-size: 1.8rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .projectButton {
    display: inline-block;
    text-decoration: none;
    font-size: 1.8rem;
    pointer: cursor;
    color: var(--white);
    align-items: center;
    gap: 1rem;
    border-radius: 8px;
    background-color: dark;
  }
  svg {
    width: 3rem;
    height: 3rem;
  }
  .projectButton:hover *,
  .projectButton:hover {
    color: lightblue;
  }
  .project__buttons {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 1rem 1rem;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Title',
  desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  link,
  repo,
  gitlab,
}) {
  return (
    <ProjectItemSytles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title"> {title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <div className="project__buttons">
          {link && (
            <a className="projectButton" href={link}>
              Go to website <MdComputer />
            </a>
          )}
          {repo && (
            <a className="projectButton" href={repo}>
              See Repo <AiFillGithub />
            </a>
          )}
          {gitlab && (
            <a className="projectButton" href={gitlab}>
              See Repo <AiFillGitlab />
            </a>
          )}
        </div>
      </div>
    </ProjectItemSytles>
  );
}
