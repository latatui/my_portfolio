import React from 'react';
import Slider from 'react-slick';

const Projects = ({ isEnglish }) => {
  const projects = [
    {
      title: isEnglish ? 'Project 1' : '프로젝트 1',
      description: isEnglish ? 'This is the first project.' : '이것은 첫 번째 프로젝트입니다.',
      id: 1,
    },
    {
      title: isEnglish ? 'Project 2' : '프로젝트 2',
      description: isEnglish ? 'This is the second project.' : '이것은 두 번째 프로젝트입니다.',
      id: 2,
    },
    {
      title: isEnglish ? 'Project 3' : '프로젝트 3',
      description: isEnglish ? 'This is the third project.' : '이것은 세 번째 프로젝트입니다.',
      id: 3,
    },
    {
      title: isEnglish ? 'Project 4' : '프로젝트 4',
      description: isEnglish ? 'This is the fourth project.' : '이것은 네 번째 프로젝트입니다.',
      id: 4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-8">{isEnglish ? 'Projects' : '프로젝트'}</h2>
      <div className="w-full max-w-4xl">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
