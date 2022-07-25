import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

const PorjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 3rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-slide {
    width: 100%;
  }
`;

export default function ProjectsSection() {
  return (
    <PorjectSectionStyle>
      <div className="container">
        <SectionTitle
          heading="Projects"
          subheading="Here are some of my projects"
        />
        <div className="projects__allItems">
          <Swiper spaceBetween={30} slidesPerView={1} navigation>
            {projects.map((project, index) => {
              if (index > 5) return;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </PorjectSectionStyle>
  );
}
