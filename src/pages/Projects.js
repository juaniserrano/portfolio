import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProjectItem from '../components/ProjectItem';
import SectionTitle from '../components/SectionTitle';
import ProjectInfo from '../assets/data/projects';

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
    padding: 0 3rem;
  }
`;
export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [projectData, setProjectData] = useState(ProjectInfo);
  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my recent works" />
      </div>
      <div className="projects__allItems">
        {projectData.map((item) => (
          <ProjectItem
            key={item.id}
            title={item.name}
            desc={item.desc}
            img={item.img}
            link={item.link}
            repo={item.repo}
            gitlab={item.gitlab}
          />
        ))}
      </div>
    </ProjectsStyles>
  );
}
